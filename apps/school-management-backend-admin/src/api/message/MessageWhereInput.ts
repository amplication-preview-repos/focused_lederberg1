import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type MessageWhereInput = {
  attachmentUrl?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  read?: BooleanNullableFilter;
  readAt?: DateTimeNullableFilter;
  recipient?: StringNullableFilter;
  school?: SchoolWhereUniqueInput;
  sender?: StringNullableFilter;
  typeField?: "Option1";
};
