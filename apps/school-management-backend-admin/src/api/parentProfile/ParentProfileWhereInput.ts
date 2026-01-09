import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentProfileWhereInput = {
  children?: JsonFilter;
  id?: StringFilter;
  occupation?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
