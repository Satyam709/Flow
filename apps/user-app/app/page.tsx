import { getSession } from "../lib/getSession";

import { getServerSession } from "next-auth";
import authOptions from "../lib/authConfig";

import { redirect } from "next/navigation";

export default async function Home() {

  console.log(authOptions);
  
  const session = await getServerSession(authOptions); // Await here to get the session

  console.log("server session: ", session);
  console.log("server session user- ", session?.user);
  if (session?.user) {
    redirect("/dashboard");
  } else {
    redirect("/api/auth/signin");
  }
}
