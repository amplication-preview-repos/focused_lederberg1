import { JsonValue } from "type-fest";
import { School } from "../school/School";
import { Transaction } from "../transaction/Transaction";

export type FeeStructure = {
  amount: number | null;
  applicableClassIds: JsonValue;
  category?: "Option1" | null;
  createdAt: Date;
  dueDates: JsonValue;
  id: string;
  installmentCount: number | null;
  name: string | null;
  school?: School | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
