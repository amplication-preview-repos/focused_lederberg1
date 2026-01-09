import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GradeListRelationFilter } from "../grade/GradeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type SubjectWhereInput = {
  code?: StringNullableFilter;
  grades?: GradeListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  school?: SchoolWhereUniqueInput;
  teacher?: StringNullableFilter;
};
