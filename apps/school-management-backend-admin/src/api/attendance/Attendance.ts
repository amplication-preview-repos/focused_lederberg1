import { ClassModel } from "../classModel/ClassModel";
import { School } from "../school/School";

export type Attendance = {
  classField?: ClassModel | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  markedBy: string | null;
  school?: School | null;
  session?: "Option1" | null;
  status?: "Option1" | null;
  student: string | null;
  updatedAt: Date;
};
