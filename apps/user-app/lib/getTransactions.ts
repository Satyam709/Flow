import prisma from "@repo/db/client";

export default function getTransactions({ userId }: props) {
  try {
    const transactions = prisma.onRampTransaction.findMany({
      where: {
        userId: Number(userId),
      },
    });
    console.log(transactions);
    
    return transactions;
  } catch (error) {
    console.log(error);
    return null;
  }
}

interface props {
  userId: number | string;
}