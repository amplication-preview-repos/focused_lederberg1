import { AttendanceCreateNestedManyWithoutClassModelsInput } from "./AttendanceCreateNestedManyWithoutClassModelsInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { StudentProfileCreateNestedManyWithoutClassModelsInput } from "./StudentProfileCreateNestedManyWithoutClassModelsInput";

export type ClassModelCreateInput = {
  academicYear?: string | null;
  attendances?: AttendanceCreateNestedManyWithoutClassModelsInput;
  capacity?: number | null;
  classTeacher?: string | null;
  name?: string | null;
  school?: SchoolWhereUniqueInput | null;
  section?: string | null;
  studentProfiles?: StudentProfileCreateNestedManyWithoutClassModelsInput;
};
