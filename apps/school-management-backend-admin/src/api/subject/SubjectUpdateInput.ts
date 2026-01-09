import { GradeUpdateManyWithoutSubjectsInput } from "./GradeUpdateManyWithoutSubjectsInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type SubjectUpdateInput = {
  code?: string | null;
  grades?: GradeUpdateManyWithoutSubjectsInput;
  name?: string | null;
  school?: SchoolWhereUniqueInput | null;
  teacher?: string | null;
};
