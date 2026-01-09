import { SortOrder } from "../../util/SortOrder";

export type AttendanceOrderByInput = {
  classFieldId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  markedBy?: SortOrder;
  schoolId?: SortOrder;
  session?: SortOrder;
  status?: SortOrder;
  student?: SortOrder;
  updatedAt?: SortOrder;
};
