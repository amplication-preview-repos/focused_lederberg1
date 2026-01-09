import { ParentProfileUpdateManyWithoutUsersInput } from "./ParentProfileUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { StudentProfileUpdateManyWithoutUsersInput } from "./StudentProfileUpdateManyWithoutUsersInput";
import { TeacherProfileUpdateManyWithoutUsersInput } from "./TeacherProfileUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  isActive?: boolean | null;
  lastLogin?: Date | null;
  lastName?: string | null;
  parentProfiles?: ParentProfileUpdateManyWithoutUsersInput;
  password?: string;
  passwordHash?: string | null;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  school?: SchoolWhereUniqueInput | null;
  studentProfiles?: StudentProfileUpdateManyWithoutUsersInput;
  teacherProfiles?: TeacherProfileUpdateManyWithoutUsersInput;
  username?: string;
};
