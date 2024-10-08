import { NextRequest, NextResponse } from "next/server";
import prisma from "@repo/db/client"; // Adjust the path to your Prisma client
import getTransactions from "../../../../lib/getTransactions";
import { getSession } from "../../../../lib/getSession";

export async function GET(request: NextRequest) {
  const session = await getSession();
  if (!session?.user)
    return NextResponse.json(
      { "response ": "unauthenticated" },
      { status: 400 }
    );

  // Extract userId from query params
  const { searchParams } = new URL(request.url);
  const userId = session.user.id;

  console.log("fetched user = " + userId);

  // Validate userId
  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  // Fetch transactions using Prisma
  try {
    const transactions = await getTransactions({ userId: userId });

    return NextResponse.json(transactions);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
