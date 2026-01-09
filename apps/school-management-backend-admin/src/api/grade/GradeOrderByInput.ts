import { SortOrder } from "../../util/SortOrder";

export type GradeOrderByInput = {
  assessmentType?: SortOrder;
  comments?: SortOrder;
  createdAt?: SortOrder;
  grade?: SortOrder;
  id?: SortOrder;
  maxScore?: SortOrder;
  published?: SortOrder;
  schoolId?: SortOrder;
  score?: SortOrder;
  student?: SortOrder;
  subjectId?: SortOrder;
  updatedAt?: SortOrder;
};
