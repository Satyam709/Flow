import { DefaultSession } from "next-auth";

export interface extended_session extends DefaultSession{
  id:number|string
}
