import transfer_amt from "../atoms/transfer_amt";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";

export function transferAmt() {
  const val = useRecoilValue(transfer_amt);
  return val;
}

export function setTransferAmt(it:number){
    const setTransState = useSetRecoilState(transfer_amt);
    setTransState(it);
}
