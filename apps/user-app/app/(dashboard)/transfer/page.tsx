import React from "react";
import AddMoneyCard from "../../../components/AddMoneyCard";
import RecentsTransactionsClient from "../../../components/RecentsTransactions";
import BalanceClient from "../../../components/BalanceClient";

function Transfer() {
  return (
    <div className="flex flex-col h-[100%] text-text-secondary  gap-2 pl-2 pt-2">
      <h1 className="text-3xl font-bold">Transfer</h1>
      <div className="flex flex-1 gap-4 mt-5">
        <div className="flex-1">
          <AddMoneyCard></AddMoneyCard>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <BalanceClient></BalanceClient>
          <RecentsTransactionsClient></RecentsTransactionsClient>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
