import { NextResponse } from "next/server";
import client from "@repo/db/client2";

export const GET = async () => {
    console.log("adding ...");
  await client.user.create({
    data: {
      email: "satyam1@gmail.com",
      name: "satyam",
      number: "111111111",
      password: "satyam",
    },
  });
  
  
  return NextResponse.json({
    message: "hi there",
  });
};
