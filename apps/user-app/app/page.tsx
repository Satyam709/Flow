import { session } from "../lib/getSession";
import { redirect } from "next/navigation";

export default async function Home() {
  console.log("server session " + session);

  if (session?.user) {
    redirect("/dashboard");
  } else {
    redirect("/api/auth/signin");
  }
}
