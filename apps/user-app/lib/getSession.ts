import { DefaultSession, getServerSession } from "next-auth";
import authOptions from "./authConfig";

export async function getSession(){
  console.log(authOptions);
  
  return await getServerSession(authOptions);
}
