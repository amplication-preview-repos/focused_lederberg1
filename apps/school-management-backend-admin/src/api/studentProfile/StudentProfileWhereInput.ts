import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentProfileWhereInput = {
  admissionNo?: StringNullableFilter;
  classField?: ClassModelWhereUniqueInput;
  dateOfBirth?: DateTimeNullableFilter;
  emergencyContacts?: JsonFilter;
  id?: StringFilter;
  medicalInfo?: JsonFilter;
  rollNo?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
