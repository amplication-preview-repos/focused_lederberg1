import { ParentProfile } from "../parentProfile/ParentProfile";
import { JsonValue } from "type-fest";
import { School } from "../school/School";
import { StudentProfile } from "../studentProfile/StudentProfile";
import { TeacherProfile } from "../teacherProfile/TeacherProfile";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  isActive: boolean | null;
  lastLogin: Date | null;
  lastName: string | null;
  parentProfiles?: Array<ParentProfile>;
  passwordHash: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  school?: School | null;
  studentProfiles?: Array<StudentProfile>;
  teacherProfiles?: Array<TeacherProfile>;
  updatedAt: Date;
  username: string;
};
