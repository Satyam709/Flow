"use client";
import { signOut, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

import AppBar from "@repo/ui/appbar";

const  signout = async () => {
  await signOut();
  console.log("going /");
  
  const router = useRouter();
  router.push("/");
};

function AppbarClient() {
  const session = useSession();
  return (
    <AppBar
      onSignOut={signout}
      onSignin={signIn}
      isLoggedIn={session.status == "authenticated"}
    ></AppBar>
  );
}

export default AppbarClient;
