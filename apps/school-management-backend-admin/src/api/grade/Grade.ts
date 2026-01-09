import { School } from "../school/School";
import { Subject } from "../subject/Subject";

export type Grade = {
  assessmentType?: "Option1" | null;
  comments: string | null;
  createdAt: Date;
  grade: string | null;
  id: string;
  maxScore: number | null;
  published: boolean | null;
  school?: School | null;
  score: number | null;
  student: string | null;
  subject?: Subject | null;
  updatedAt: Date;
};
