import { auth } from "@/auth";
import AccountInfoHeader from "@/components/account/AccountInfoHeader";
import MyTreeCard from "@/components/console/portfolio/MyTreeCard";

import AccountStatisticGrid from "@/components/reports/AccountStatisticGrid";
import GrowthRateByLocation from "@/components/reports/GrowthRateByLocation";
import NftOwnershipDistribution from "@/components/reports/NftOwnershipDistribution";
import PriceStatictic from "@/components/reports/PriceStatictic";

import React from "react";

const ReportsPage = async () => {
  const session = await auth();
  if (!session || !session.user.id) {
    return null;
  }
  return (
    <div className="space-y-5">
      <AccountInfoHeader userId={session.user.id} />

      <AccountStatisticGrid userId={session.user.id} />

      <div className="grid xl:grid-cols-5 gap-5">
        <div className="xl:col-span-2">
          <NftOwnershipDistribution userId={session.user.id} />
        </div>
        <div className="xl:col-span-3">
          <GrowthRateByLocation userId={session.user.id} />
        </div>
      </div>
      <div className="grid xl:grid-cols-5 gap-5">
        <div className="xl:col-span-2 space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-muted/50 p-5 rounded-md text-center space-y-1">
              <div className="text-cyan-500 text-4xl font-bold">98%</div>
              <div className="text-muted-foreground text-sm uppercase">
                Canopy coverage
              </div>
            </div>
            <div className="bg-muted/50 p-5 rounded-md text-center space-y-1">
              <div className="text-lime-500 text-4xl font-bold">3.2 Yrs</div>
              <div className="text-muted-foreground text-sm uppercase">
                Average Harvest period
              </div>
            </div>
          </div>
          <NftOwnershipDistribution userId={session.user.id} />
        </div>
        <div className="xl:col-span-3">
          <PriceStatictic userId={session.user.id} />
        </div>
      </div>
      <MyTreeCard address={session.user.id} />
    </div>
  );
};

export default ReportsPage;
