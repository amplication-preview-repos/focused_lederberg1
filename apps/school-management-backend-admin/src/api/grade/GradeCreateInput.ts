import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";

export type GradeCreateInput = {
  assessmentType?: "Option1" | null;
  comments?: string | null;
  grade?: string | null;
  maxScore?: number | null;
  published?: boolean | null;
  school?: SchoolWhereUniqueInput | null;
  score?: number | null;
  student?: string | null;
  subject?: SubjectWhereUniqueInput | null;
};
