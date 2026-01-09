import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeacherProfileWhereInput = {
  employeeId?: StringNullableFilter;
  id?: StringFilter;
  joiningDate?: DateTimeNullableFilter;
  qualifications?: StringNullableFilter;
  subjectsTaught?: JsonFilter;
  user?: UserWhereUniqueInput;
};
