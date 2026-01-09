import { SortOrder } from "../../util/SortOrder";

export type TeacherProfileOrderByInput = {
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  joiningDate?: SortOrder;
  qualifications?: SortOrder;
  subjectsTaught?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
