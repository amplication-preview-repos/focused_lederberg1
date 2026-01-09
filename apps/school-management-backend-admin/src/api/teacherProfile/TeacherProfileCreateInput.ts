import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeacherProfileCreateInput = {
  employeeId?: string | null;
  joiningDate?: Date | null;
  qualifications?: string | null;
  subjectsTaught?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
