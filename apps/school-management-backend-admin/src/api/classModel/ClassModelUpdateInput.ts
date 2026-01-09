import { AttendanceUpdateManyWithoutClassModelsInput } from "./AttendanceUpdateManyWithoutClassModelsInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { StudentProfileUpdateManyWithoutClassModelsInput } from "./StudentProfileUpdateManyWithoutClassModelsInput";

export type ClassModelUpdateInput = {
  academicYear?: string | null;
  attendances?: AttendanceUpdateManyWithoutClassModelsInput;
  capacity?: number | null;
  classTeacher?: string | null;
  name?: string | null;
  school?: SchoolWhereUniqueInput | null;
  section?: string | null;
  studentProfiles?: StudentProfileUpdateManyWithoutClassModelsInput;
};
