"use client";
import { Card } from "@repo/ui/card";
import InputBox from "./LabledInput";
import { Button } from "@repo/ui/button";
import prisma from "@repo/db/client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { transferAmt } from "@repo/store/useTransferAmt";
import transfer from "../lib/actions/transfer";

function AddMoneyCard() {
  const session = useSession();
  const [amt, setAmt] = useState("0");
  const [provider, setProvider] = useState("");

  return (
    <Card title="Add Money" className="">
      <div className="flex flex-col gap-4 m-4 ml-0">
        <InputBox
          type="number"
          label="Amount"
          onChange={(it) => setAmt(it)}
        ></InputBox>
        <div className="flex flex-col gap-2">
          <label htmlFor="sel" className="text-text-secondary">
            Bank
          </label>
          <select
            name="Bank"
            id="sel"
            defaultValue="-1"
            className="bg-gray-900 text-text-secondary pl-2 h-10 rounded-md"
            onChange={(value) => setProvider(value.target.value)}
          >
            <option value="-1" disabled>
              Select Bank
            </option>
            <option value="SBI Bank">SBI Bank</option>
            <option value="HDFC Bank">HDFC Bank</option>
            <option value="Axis Bank">Axis Bank</option>
          </select>
          <div className="flex mt-10 justify-center">
            <Button
              className="px-6 text-xl"
              onClick={async () => await transfer(Number(amt), provider)}
            >
              Add Money
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AddMoneyCard;
