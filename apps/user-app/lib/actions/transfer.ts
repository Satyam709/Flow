"use server";
import prisma from "@repo/db/client";
import { getSession } from "../getSession";

export default async function transfer(amt: number, provider: string) {
  const session = await getSession();
  if (!session?.user) {
    return;
  }

  const balance = (
    await prisma.balance.findFirst({
      where: {
        userId: Number(session.user.id),
      },
    })
  )?.amount;

  if (!balance || balance < amt) {
    return;
  }

  try {
    const addTrasfer = await prisma.onRampTransaction.create({
      data: {
        token: "" + Math.random(),
        userId: Number(session.user.id),
        status: "Processing",
        startTime: new Date(),
        amount: amt * 100,
        provider: provider,
      },
    });
    console.log("trasfer done");
  } catch (error) {
    console.log(error);
  }
}
