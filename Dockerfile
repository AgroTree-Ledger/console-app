# build
FROM node:20-alpine AS builder

RUN corepack enable

ENV NODE_ENV=build

USER node
WORKDIR /home/node

COPY prisma ./prisma

COPY package.json ./

COPY pnpm-lock.yaml ./

COPY .env.production ./.env

RUN pnpm install

COPY --chown=node:node . .

RUN pnpm run postinstall

ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp

RUN pnpm run build

# run production

FROM node:20-alpine

ENV NODE_ENV=production

USER node
WORKDIR /home/node

# COPY --from=builder --chown=node:node /home/node/package.json ./
# COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
# COPY --from=builder --chown=node:node /home/node/public/ ./public/
# COPY --from=builder --chown=node:node /home/node/.next/ ./.next/
# COPY --from=builder --chown=node:node /home/node/.env ./

# RUN pnpm add sharp
# ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp

COPY --from=builder --chown=node:node /home/node/public/ ./.next/standalone/public/
COPY --from=builder --chown=node:node /home/node/.next/static/ ./.next/standalone/.next/static/
COPY --from=builder --chown=node:node /home/node/.next/standalone/ ./.next/standalone/

CMD ["node", ".next/standalone/server.js"]