import { Attendance } from "../attendance/Attendance";
import { School } from "../school/School";
import { StudentProfile } from "../studentProfile/StudentProfile";

export type ClassModel = {
  academicYear: string | null;
  attendances?: Array<Attendance>;
  capacity: number | null;
  classTeacher: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  school?: School | null;
  section: string | null;
  studentProfiles?: Array<StudentProfile>;
  updatedAt: Date;
};
