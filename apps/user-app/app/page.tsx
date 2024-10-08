import { getSession } from "../lib/getSession";

import { getServerSession } from "next-auth";
import authOptions from "../lib/authConfig";

import { redirect } from "next/navigation";

export default async function Home() {
  console.log(" i m at home ");
  
  const session = await getSession();

  // const session = await getServerSession(authOptions); // Await here to get the session

  console.log("\nsession :\n" + session?.user);
  if (session?.user) {
    redirect("/dashboard");
  } else {
    redirect("/api/auth/signin");
  }

}
