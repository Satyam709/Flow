"use client";

import { Button } from "./button";
import { LogOut } from "lucide-react";

interface AppBarProps {
  isLoggedIn: boolean;
  onSignOut: () => void;
  onSignin : ()=> void;
}

function AppBar(props: AppBarProps) {
  return (
    <div className="h-[3.5rem] flex px-4 justify-between bg-header text-xl items-center sticky border-b border-gray-700 ">
      <h2 className="flex gap-2 items-center text-3xl">
        <FlowIcon className="size-8"></FlowIcon>
        Flow
      </h2>
      <div>
        {props.isLoggedIn ? (
          <Button className="text-red-600 flex gap-2 items-center" onClick={props.onSignOut}>Logout <LogOut></LogOut></Button>
        ) : (
          <Button onClick={props.onSignin}>Login</Button>
        )}
      </div>
    </div>
  );
}

function FlowIcon({ className }: { className?: string }): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={!className ? "size-6" : className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
      />
    </svg>
  );
}

export default AppBar;
