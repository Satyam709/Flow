"use client"; // Ensure this is a Client Component

import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@repo/ui/button"; // Import your Button component

const Success = () => {
  const handleSignOut = () => {
    signOut(); // Call the signOut function from next-auth
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Success</h1>
      <p className="mt-4">You have successfully logged in!</p>
      <Button
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSignOut}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default Success;
