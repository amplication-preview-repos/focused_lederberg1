import { GradeCreateNestedManyWithoutSubjectsInput } from "./GradeCreateNestedManyWithoutSubjectsInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type SubjectCreateInput = {
  code?: string | null;
  grades?: GradeCreateNestedManyWithoutSubjectsInput;
  name?: string | null;
  school?: SchoolWhereUniqueInput | null;
  teacher?: string | null;
};
