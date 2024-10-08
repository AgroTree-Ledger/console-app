import React from "react";
type Props = {
  userId: string;
};
const AccountStatisticGrid: React.FC<Props> = ({}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5">
      <div className="bg-muted/50 p-5 rounded-md text-center space-y-1">
        <div className="text-cyan-500 text-4xl font-bold">2.3 Yrs</div>
        <div className="text-muted-foreground text-sm uppercase">
          Average Tree Age
        </div>
      </div>
      <div className="bg-muted/50 p-5 rounded-md text-center space-y-1">
        <div className="text-lime-500 text-4xl font-bold">377</div>
        <div className="text-muted-foreground text-sm uppercase">
          Total Tree Count
        </div>
      </div>
      <div className="bg-muted/50 p-5 rounded-md text-center space-y-1">
        <div className="text-blue-500 text-4xl font-bold">236</div>
        <div className="text-muted-foreground text-sm uppercase">
          CO2 Sequestration
        </div>
      </div>
      <div className="bg-muted/50 p-5 rounded-md text-center space-y-1">
        <div className="text-purple-500 text-4xl font-bold">100%</div>
        <div className="text-muted-foreground text-sm uppercase">
          Tree Survival Rate
        </div>
      </div>
      <div className="bg-muted/50 p-5 rounded-md text-center space-y-1">
        <div className="text-orange-500 text-4xl font-bold">+8.9%</div>
        <div className="text-muted-foreground text-sm uppercase">
          Average Expected Annual ROI
        </div>
      </div>
    </div>
  );
};

export default AccountStatisticGrid;
