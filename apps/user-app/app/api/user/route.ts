import { NextResponse } from "next/server";
import client from "@repo/db/client2";

export const GET = async () => {
    console.log("adding ...");
    
  await client.user.create({
    data: {
      email: "satyam3@gmail.com",
      name: "satyam3",
      number: "111111112",
      password: "satyam",
    },
  });
  
  
  return NextResponse.json({
    message: "hi there",
  });
};
