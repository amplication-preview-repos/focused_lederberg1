import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type FeeStructureWhereInput = {
  amount?: FloatNullableFilter;
  applicableClassIds?: JsonFilter;
  category?: "Option1";
  dueDates?: JsonFilter;
  id?: StringFilter;
  installmentCount?: IntNullableFilter;
  name?: StringNullableFilter;
  school?: SchoolWhereUniqueInput;
  transactions?: TransactionListRelationFilter;
};
