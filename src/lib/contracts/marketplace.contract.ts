import { Program } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import appConfig from "../config";
import { AgrotreeMarketplace } from "./agrotree_marketplace";
import idl from "./agrotree_marketplace.json";

// import { getUmiServer } from "../umi";
// import { publicKey } from "@metaplex-foundation/umi";
// import { getAssetWithProof } from "@metaplex-foundation/mpl-bubblegum";

export function getMarketplaceProgram() {
  const connection = getProgramConnection();

  const program = new Program(idl as AgrotreeMarketplace, { connection });

  return { program, connection };
}

export function getProgramConnection() {
  const connection = new Connection(appConfig.endpointRpc, "confirmed");
  return connection;
}

export async function getMarketplaceListingNftBySeller(seller: string) {
  const { program } = getMarketplaceProgram();
  const raw = await program.account.compressedListing.all([
    {
      memcmp: {
        offset: 8,
        bytes: seller,
      },
    },
  ]);
  return raw;
}

// export async function getMarketplaceListingNft(
//   input: GetMarketplaceListingNftInput
// ) {
//   const {} = input;
//   const { program } = getMarketplaceProgram();
//   const raw = await program.account.compressedListing.all();
//   return raw;
// }

// export async function makeUnlistNftInstruction(
//   input: MakeUnlistNftInstructionInput
// ) {
//   try {
//     const { program, connection } = getMarketplaceProgram();
//     const { authority: seller, assetId } = input;

//     const umi = await getUmiServer();

//     const assetWithProof = await getAssetWithProof(umi, publicKey(assetId));
//     const _mapRoof = mapProof({ proof: assetWithProof.proof });

//     const instruction = await program.methods
//       .unlistCnft({
//         assetId,
//         cnftArgs: {
//           root: bufferToArray(Buffer.from(assetWithProof.root)),
//           creatorHash: bufferToArray(Buffer.from(assetWithProof.creatorHash)),
//           dataHash: bufferToArray(Buffer.from(assetWithProof.dataHash)),
//           index: assetWithProof.index,
//           nonce: new BN(assetWithProof.nonce),
//         },
//       })
//       .accounts({
//         seller,
//         leafOwner: seller,
//         leafDelegate: seller,
//         merkleTree: assetWithProof.merkleTree,
//       })
//       .remainingAccounts(_mapRoof)
//       .instruction();

//     const transaction = await buildTransaction(
//       connection,
//       [instruction],
//       seller
//     );
//     const result = Buffer.from(transaction.serialize()).toString("base64");

//     return {
//       success: true,
//       transaction: result,
//       data: {
//         merkleTree: assetWithProof.merkleTree,
//       },
//     };
//   } catch (error) {
//     console.error("Error unlisting NFT", error);
//     return {
//       transaction: null,
//       success: false,
//       error: error,
//       data: {
//         merkleTree: null,
//       },
//     };
//   }
// }

// export async function makeBuyNftInstruction(input: MakeBuyNftInstructionInput) {
//   try {
//     const { program, connection } = getMarketplaceProgram();
//     const { authority: buyer, assetId, seller } = input;

//     const umi = await getUmiServer();

//     const assetWithProof = await getAssetWithProof(umi, publicKey(assetId));
//     const _mapRoof = mapProof({ proof: assetWithProof.proof });

//     const instruction = await program.methods
//       .buyCnft({
//         assetId,
//         cnftArgs: {
//           root: bufferToArray(Buffer.from(assetWithProof.root)),
//           creatorHash: bufferToArray(Buffer.from(assetWithProof.creatorHash)),
//           dataHash: bufferToArray(Buffer.from(assetWithProof.dataHash)),
//           index: assetWithProof.index,
//           nonce: new BN(assetWithProof.nonce),
//         },
//       })
//       .accounts({
//         seller,
//         leafOwner: buyer,
//         leafDelegate: buyer,
//         merkleTree: assetWithProof.merkleTree,
//         buyer,
//       })
//       .remainingAccounts(_mapRoof)
//       .instruction();

//     const transaction = await buildTransaction(
//       connection,
//       [instruction],
//       buyer
//     );
//     const result = Buffer.from(transaction.serialize()).toString("base64");

//     return {
//       success: true,
//       transaction: result,
//       data: {
//         merkleTree: assetWithProof.merkleTree,
//       },
//     };
//   } catch (error) {
//     console.error("Error buying NFT", error);
//     return {
//       transaction: null,
//       success: false,
//       error: error,
//       data: {
//         merkleTree: null,
//       },
//     };
//   }
// }

// export async function makeListingNftInstruction(
//   input: MakeListingNftInstructionInput
// ) {
//   try {
//     const { program, connection } = getMarketplaceProgram();
//     const { authority: seller, assetId, price } = input;

//     const umi = await getUmiServer();

//     const assetWithProof = await getAssetWithProof(umi, publicKey(assetId));
//     const _mapRoof = mapProof({ proof: assetWithProof.proof });

//     const instruction = await program.methods
//       .listingCnft({
//         assetId,
//         price: new BN(price.toString()),
//         cnftArgs: {
//           root: bufferToArray(Buffer.from(assetWithProof.root)),
//           creatorHash: bufferToArray(Buffer.from(assetWithProof.creatorHash)),
//           dataHash: bufferToArray(Buffer.from(assetWithProof.dataHash)),
//           index: assetWithProof.index,
//           nonce: new BN(assetWithProof.nonce),
//         },
//       })
//       .accounts({
//         seller,
//         leafOwner: seller,
//         leafDelegate: seller,
//         merkleTree: assetWithProof.merkleTree,
//       })
//       .remainingAccounts(_mapRoof)
//       .instruction();

//     const transaction = await buildTransaction(
//       connection,
//       [instruction],
//       seller
//     );
//     const result = Buffer.from(transaction.serialize()).toString("base64");

//     return {
//       success: true,
//       transaction: result,
//       data: {
//         merkleTree: assetWithProof.merkleTree,
//       },
//     };
//   } catch (error) {
//     console.error("Error listing NFT", error);
//     return {
//       transaction: null,
//       success: false,
//       error: error,
//       data: {
//         merkleTree: null,
//       },
//     };
//   }
// }

// export async function makeInitMarketInstruction(
//   input: MakeInitMarketInstructionInput
// ) {
//   try {
//     const { program, connection } = getMarketplaceProgram();
//     const { feeRate, authority } = input;
//     const instruction = await program.methods
//       .initialize(feeRate)
//       .accounts({
//         authority: authority,
//       })
//       .instruction();

//     const transaction = await buildTransaction(
//       connection,
//       [instruction],
//       authority
//     );
//     const result = Buffer.from(transaction.serialize()).toString("base64");

//     return {
//       success: true,
//       transaction: result,
//     };
//   } catch (error) {
//     return {
//       transaction: null,
//       success: false,
//       error: error,
//     };
//   }
// }

export function getCompressedListingAddress(
  seller: PublicKey,
  merkelTree: PublicKey,
  assetId: PublicKey
) {
  const { program } = getMarketplaceProgram();
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from("c-listing"),
      seller.toBuffer(),
      merkelTree.toBuffer(),
      assetId.toBuffer(),
    ],
    program.programId
  );
}

export function getAgroTreeManagerConfigAddress() {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("agro-config")],
    new PublicKey(process.env.NEXT_PUBLIC_AGROTREE_PROGRAM_ID as string)
  );
}

export async function treeNftOnmarketplace(
  merkleTree: string | undefined,
  assetId: string
) {
  if (!merkleTree) return null;
  const { program } = getMarketplaceProgram();

  try {
    const [item] = await program.account.compressedListing.all([
      {
        memcmp: {
          offset: 8 + 32,
          bytes: new PublicKey(merkleTree).toBase58(),
        },
      },
      {
        memcmp: {
          offset: 8 + 32 + 32,
          bytes: new PublicKey(assetId).toBase58(),
        },
      },
    ]);

    if (!item) return null;

    return {
      publicKey: item.publicKey.toString(),
      account: {
        seller: item.account.seller.toString(),
        merkleTree: item.account.merkleTree.toString(),
        assetId: item.account.assetId.toString(),
        price: item.account.price.toString(),
        bump: item.account.bump,
      },
    };
  } catch {
    return null;
  }
}
