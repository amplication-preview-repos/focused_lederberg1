import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type TeacherProfile = {
  createdAt: Date;
  employeeId: string | null;
  id: string;
  joiningDate: Date | null;
  qualifications: string | null;
  subjectsTaught: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
