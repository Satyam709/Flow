"use client";
import { signOut, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import AppBar from "@repo/ui/appbar";

function AppbarClient() {
  const session = useSession();

  const signout = async () => {
    await signOut({callbackUrl:"/"});
  };

  return (
    <AppBar
      onsignout={signout}
      onsignin={signIn}
      isLoggedIn={session.status === "authenticated"}
    />
  );
}

export default AppbarClient;
