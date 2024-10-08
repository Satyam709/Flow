
import { NextResponse } from "next/server";
import { getSession } from "../../../lib/getSession";

export const GET = async () => {
  const session =await getSession();
  console.log(session);
  
  if (session?.user) {

    return NextResponse.json({
      user: session.user,
    });
    
  }
  return NextResponse.json(
    {
      message: "You are not logged in",
    },
    {
      status: 403,
    }
  );
};
