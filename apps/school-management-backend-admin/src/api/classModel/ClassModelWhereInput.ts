import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { StudentProfileListRelationFilter } from "../studentProfile/StudentProfileListRelationFilter";

export type ClassModelWhereInput = {
  academicYear?: StringNullableFilter;
  attendances?: AttendanceListRelationFilter;
  capacity?: IntNullableFilter;
  classTeacher?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  school?: SchoolWhereUniqueInput;
  section?: StringNullableFilter;
  studentProfiles?: StudentProfileListRelationFilter;
};
