import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type GradeWhereInput = {
  assessmentType?: "Option1";
  comments?: StringNullableFilter;
  grade?: StringNullableFilter;
  id?: StringFilter;
  maxScore?: FloatNullableFilter;
  published?: BooleanNullableFilter;
  school?: SchoolWhereUniqueInput;
  score?: FloatNullableFilter;
  student?: StringNullableFilter;
  subject?: SubjectWhereUniqueInput;
};
