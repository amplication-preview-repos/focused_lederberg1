import { ParentProfileCreateNestedManyWithoutUsersInput } from "./ParentProfileCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { StudentProfileCreateNestedManyWithoutUsersInput } from "./StudentProfileCreateNestedManyWithoutUsersInput";
import { TeacherProfileCreateNestedManyWithoutUsersInput } from "./TeacherProfileCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  isActive?: boolean | null;
  lastLogin?: Date | null;
  lastName?: string | null;
  parentProfiles?: ParentProfileCreateNestedManyWithoutUsersInput;
  password: string;
  passwordHash?: string | null;
  role?: "Option1" | null;
  roles: InputJsonValue;
  school?: SchoolWhereUniqueInput | null;
  studentProfiles?: StudentProfileCreateNestedManyWithoutUsersInput;
  teacherProfiles?: TeacherProfileCreateNestedManyWithoutUsersInput;
  username: string;
};
