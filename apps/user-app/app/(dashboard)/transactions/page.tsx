"use client";
import { Card } from "@repo/ui/card";
import React, { useEffect, useState } from "react";

function Transactions() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch transactions from API
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch("/api/user/transactions/"); // Fetching data from your Next.js API route
        const data = await res.json();

        console.log(data);

        setTransactions(data); // Store fetched transactions in state
      } catch (err) {
        console.error("Error fetching transactions:", err);
        setError("Failed to load transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Card title="Transactions" className="">
      {transactions.length > 0 ? (
        <div>{transactions.map((transaction) => transComp(transaction))}</div>
      ) : (
        <p>No transactions found</p>
      )}
    </Card>
  );
}

const transComp = (transaction: any) => {
  return (
    <div key={transaction.id} className="transaction-item p-2 my-4 border-gray-500 border-[0.05rem] rounded-md hover:shadow-xl ">
      <p>
        <strong>Status:</strong> {transaction.status}
      </p>
      <p>
        <strong>Token:</strong> {transaction.token}
      </p>
      <p>
        <strong>Provider:</strong> {transaction.provider}
      </p>
      <p>
        <strong>Amount:</strong> {transaction.amount}
      </p>
      <p>
        <strong>Start Time:</strong>{" "}
        {new Date(transaction.startTime).toLocaleString()}
      </p>
    </div>
  );
};

export default Transactions;
