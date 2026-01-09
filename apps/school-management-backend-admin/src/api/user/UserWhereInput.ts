import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ParentProfileListRelationFilter } from "../parentProfile/ParentProfileListRelationFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { StudentProfileListRelationFilter } from "../studentProfile/StudentProfileListRelationFilter";
import { TeacherProfileListRelationFilter } from "../teacherProfile/TeacherProfileListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  lastLogin?: DateTimeNullableFilter;
  lastName?: StringNullableFilter;
  parentProfiles?: ParentProfileListRelationFilter;
  passwordHash?: StringNullableFilter;
  role?: "Option1";
  school?: SchoolWhereUniqueInput;
  studentProfiles?: StudentProfileListRelationFilter;
  teacherProfiles?: TeacherProfileListRelationFilter;
  username?: StringFilter;
};
