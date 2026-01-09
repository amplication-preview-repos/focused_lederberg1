import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type AttendanceCreateInput = {
  classField?: ClassModelWhereUniqueInput | null;
  date?: Date | null;
  markedBy?: string | null;
  school?: SchoolWhereUniqueInput | null;
  session?: "Option1" | null;
  status?: "Option1" | null;
  student?: string | null;
};
