import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type ParentProfile = {
  children: JsonValue;
  createdAt: Date;
  id: string;
  occupation: string | null;
  updatedAt: Date;
  user?: User | null;
};
