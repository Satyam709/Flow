import React from "react";
import { Card } from "@repo/ui/card";
import InputBox from "../../../components/LabledInput";
import { Button } from "@repo/ui/button";
import AddMoneyCard from "../../../components/AddMoneyCard";
import BalanceCard from "../../../components/BalanceCard";
import RecentTransactions from "../../../components/RecentTransactionCard";

const transactions = [
  { id: 1, status: "Completed", date: "2024-10-08", amt: 200 },
  { id: 2, status: "Pending", date: "2024-10-07", amt: 150 },
  { id: 3, status: "Failed", date: "2024-10-06", amt: 300 },
];

function Transfer() {
  return (
    <div className="flex flex-col h-[100%] text-text-secondary  gap-2 pl-2 pt-2">
      <h1 className="text-3xl font-bold">Transfer</h1>
      <div className="flex flex-1 gap-4 mt-5">
        <div className="flex-1">
          <AddMoneyCard></AddMoneyCard>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <BalanceCard
            unblockedBalance={1500}
            lockedBalance={500}
            totalBalance={2000}
          />
          <RecentTransactions recents={transactions} />
        </div>
      </div>
    </div>
  );
}

export default Transfer;
