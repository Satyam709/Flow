import { Card } from "@repo/ui/card";
import InputBox from "./LabledInput";
import { Button } from "@repo/ui/button";
function AddMoneyCard() {
  return (
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
  );
}

export default AddMoneyCard