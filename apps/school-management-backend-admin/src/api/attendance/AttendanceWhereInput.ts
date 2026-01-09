import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type AttendanceWhereInput = {
  classField?: ClassModelWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  markedBy?: StringNullableFilter;
  school?: SchoolWhereUniqueInput;
  session?: "Option1";
  status?: "Option1";
  student?: StringNullableFilter;
};
