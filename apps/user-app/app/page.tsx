"use client";
import { useBalance } from "@repo/store/useBalance";

export default function Home() {
  return (
      <div className="h-[100%] flex justify-center items-center bg-black text-white">
        <div className="text-5xl font-serif">Hey There {useBalance()}</div>
      </div>
  );
}
