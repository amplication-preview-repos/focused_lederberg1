import { InputJsonValue } from "../../types";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { TransactionUpdateManyWithoutFeeStructuresInput } from "./TransactionUpdateManyWithoutFeeStructuresInput";

export type FeeStructureUpdateInput = {
  amount?: number | null;
  applicableClassIds?: InputJsonValue;
  category?: "Option1" | null;
  dueDates?: InputJsonValue;
  installmentCount?: number | null;
  name?: string | null;
  school?: SchoolWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutFeeStructuresInput;
};
