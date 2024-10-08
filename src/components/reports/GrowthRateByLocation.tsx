"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Info } from "lucide-react";
import GrowthRateByLocationChart from "./GrowthRateByLocationChart";
type Props = {
  userId: string;
};
const locations = ["Apac", "NA", "US", "EU"];
const GrowthRateByLocation: React.FC<Props> = ({}) => {
  const [timeRange, setTimeRange] = useState("Week");
  return (
    <div className="bg-muted/50 p-5 rounded-md">
      <div className="flex justify-between items-center mb-4 border-b border-b-muted pb-5">
        <h3>Growth Rate By Location</h3>
        <div className="flex space-x-2">
          <Button
            variant={timeRange === "Week" ? "secondary" : "ghost"}
            onClick={() => setTimeRange("Week")}
          >
            Week
          </Button>
          <Button
            variant={timeRange === "Month" ? "secondary" : "ghost"}
            onClick={() => setTimeRange("Month")}
          >
            Month
          </Button>
          <Button
            variant={timeRange === "Year" ? "secondary" : "ghost"}
            onClick={() => setTimeRange("Year")}
          >
            Year
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <Select defaultValue={locations[0]}>
          <SelectTrigger className="w-[180px] bg-gray-800 text-white border-gray-700">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-400 mr-2"></div>
            <span className="text-sm">Observed Growth Rate</span>
            <Info className="w-4 h-4 ml-1 text-gray-400" />
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-700 mr-2"></div>
            <span className="text-sm">Standard Growth Rate</span>
            <Info className="w-4 h-4 ml-1 text-gray-400" />
          </div>
        </div>
      </div>
      <GrowthRateByLocationChart />
    </div>
  );
};

export default GrowthRateByLocation;
