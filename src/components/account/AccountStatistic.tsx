"use client";
import { PercentIcon, TreePineIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
type Props = {
  userId: string;
};
const AccountStatistic: React.FC<Props> = ({}) => {
  const [currency, setCurrency] = useState<"USD" | "SOL">("USD");
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="bg-muted/50 p-5 rounded-md space-y-5">
        <div className="flex justify-between items-center border-b pb-5">
          <div className="fle flex-col space-y-5">
            <div className="bg-muted rounded-full size-10 p-2.5 flex items-center justify-center">
              <PercentIcon />
            </div>
            <div>
              <h3 className="text-muted-foreground text-sm">
                Average Expected Annual ROI
              </h3>
            </div>
          </div>
          <div>
            <span className="text-green-500 text-3xl font-bold">+ 8.9%</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-muted-foreground text-sm">
              Total Expected Tonnes of CO2 Offset
            </h3>
          </div>
          <div className="flex flex-col space-y-5">
            <div>
              <div className="text-3xl font-bold text-right">236</div>
              <span className="text-right text-xs text-muted-foreground">
                Tonnes of CO2
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted/50 p-5 rounded-md space-y-5">
        <div className="flex justify-between items-center border-b pb-5">
          <div className="fle flex-col space-y-5">
            <div className="bg-muted rounded-full size-10 p-2.5 flex items-center justify-center">
              <TreePineIcon />
            </div>
            <div>
              <h3 className="text-muted-foreground text-sm">
                NFTs Tree - Total number
              </h3>
            </div>
          </div>
          <div>
            <span className="text-3xl font-bold">377</span>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex flex-col space-y-5 items-start">
            <div>
              <span className="text-right text-xs text-muted-foreground">
                Total Investment Estimated Value
              </span>
              <div className="text-3xl font-bold text-right">
                {Number(47706).toLocaleString()}{" "}
                <span className="text-muted-foreground text-sm">
                  {currency}
                </span>
              </div>
            </div>
          </div>
          <div className="space-x-2">
            <Button
              variant={currency === "USD" ? "secondary" : "ghost"}
              onClick={() => setCurrency("USD")}
            >
              USD
            </Button>
            <Button
              variant={currency === "SOL" ? "secondary" : "ghost"}
              onClick={() => setCurrency("SOL")}
            >
              SOL
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStatistic;
