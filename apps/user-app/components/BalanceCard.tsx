import React from "react";
import { Card } from "@repo/ui/card";

interface BalanceCardProps {
  unblockedBalance: number |string;
  lockedBalance: number | string;
  totalBalance: number | string;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  unblockedBalance,
  lockedBalance,
  totalBalance,
}) => {
  return (
    <Card title="Balance" className="">
      <div className="text-sm font-normal border-b border-gray-700 h-10 my-2 pt-2">
        <span className="text-left">Unblocked balance: {unblockedBalance}</span>
      </div>
      <div className="text-sm font-normal border-b border-gray-700 h-10 my-2 pt-2">
        <span>Total locked balance: {lockedBalance}</span>
      </div>
      <div className="text-sm font-normal border-b border-gray-700 h-10 my-2 pt-2">
        <span>Total balance: {totalBalance}</span>
      </div>
    </Card>
  );
};

export default BalanceCard;
