import prisma from "@repo/db/client";
import { getSession } from "../lib/getSession";
import BalanceCard from "./BalanceCard";
import React from "react";

async function BalanceClient() {
  try {
    const session = await getSession();

    if (!session?.user) {
      return <div>No session found</div>;
    }

    // Fetch the user's balance from the database on the server
    const balance = await prisma.balance.findFirst({
      where: {
        userId: Number(session.user.id), // Make sure to access the correct user ID
      },
    });

    if (!balance) {
      return <div>Balance not found</div>;
    }

    return (
      <BalanceCard
        unblockedBalance={balance.amount - balance.locked}
        lockedBalance={balance.locked}
        totalBalance={balance.amount}
      />
    );
  } catch (error) {
    console.error("Error fetching balance:", error);
    return <div>Error fetching balance</div>;
  }
}

export default BalanceClient;
