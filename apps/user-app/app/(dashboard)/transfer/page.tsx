import React from "react";
import { Card } from "@repo/ui/card";
import InputBox from "../../../components/LabledInput";
import { Button } from "@repo/ui/button";


function Transfer() {
  return (
    <div className="flex flex-col h-[100%] text-text-secondary  gap-2 pl-2 pt-2">
      <h1 className="text-3xl font-bold">Transfer</h1>
      <div className="flex flex-1 gap-4 mt-5">
        <div className="flex-1">
          <Card title="Add Money" className="">
            <div className="flex flex-col gap-4 m-4 ml-0">
              <InputBox type="number" label="Amount"></InputBox>
              <div className="flex flex-col gap-2">
                <label htmlFor="sel" className="text-text-secondary">
                  Bank
                </label>
                <select
                  name="Bank"
                  id="sel"
                  defaultValue=""
                  className="bg-gray-900 text-text-secondary pl-2 h-10 rounded-md"
                >
                  <option value="0">SBI Bank</option>
                  <option value="1">HDFC Bank</option>
                  <option value="2">Axis Bank</option>
                </select>
                <div className="flex mt-10 justify-center">
                  <Button className="px-6 text-xl">Add Money</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <Card title="Balance" className="">
            <div className="text-sm font-normal border-b border-gray-700 h-10 my-2 pt-2  ">
              <span>Unblocked balance</span>
            </div>
            <div className="text-sm font-normal border-b border-gray-700 h-10 my-2 pt-2">
              <span>Total locked balance</span>
            </div>
            <div className="text-sm font-normal border-b border-gray-700 h-10 my-2 pt-2">
              <span>Total balance</span>
            </div>


          </Card>
          <Card title="Recent Transactions" className="">
            <div className="h-[5rem] bg-card-bg border-gray-700 border-2 p-4 rounded-md"><span> No Transactions to show</span></div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
