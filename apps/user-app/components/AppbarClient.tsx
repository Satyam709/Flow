"use client";
import { signOut, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

import Router from "next/router";

import AppBar from "@repo/ui/appbar";

const signout = () => {
  signOut();
  Router.push("/");
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
