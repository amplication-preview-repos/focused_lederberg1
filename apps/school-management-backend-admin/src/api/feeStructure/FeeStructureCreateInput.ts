import { InputJsonValue } from "../../types";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { TransactionCreateNestedManyWithoutFeeStructuresInput } from "./TransactionCreateNestedManyWithoutFeeStructuresInput";

export type FeeStructureCreateInput = {
  amount?: number | null;
  applicableClassIds?: InputJsonValue;
  category?: "Option1" | null;
  dueDates?: InputJsonValue;
  installmentCount?: number | null;
  name?: string | null;
  school?: SchoolWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutFeeStructuresInput;
};
