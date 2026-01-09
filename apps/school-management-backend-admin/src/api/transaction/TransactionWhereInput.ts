import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { FeeStructureWhereUniqueInput } from "../feeStructure/FeeStructureWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  feeStructure?: FeeStructureWhereUniqueInput;
  gateway?: "Option1";
  gatewayTransactionId?: StringNullableFilter;
  id?: StringFilter;
  paymentMethod?: "Option1";
  receiptUrl?: StringNullableFilter;
  school?: SchoolWhereUniqueInput;
  status?: "Option1";
  student?: StringNullableFilter;
};
