import { SortOrder } from "../../util/SortOrder";

export type SubjectOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  schoolId?: SortOrder;
  teacher?: SortOrder;
  updatedAt?: SortOrder;
};
