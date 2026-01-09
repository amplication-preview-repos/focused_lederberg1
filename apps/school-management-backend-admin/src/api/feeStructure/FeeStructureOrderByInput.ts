import { SortOrder } from "../../util/SortOrder";

export type FeeStructureOrderByInput = {
  amount?: SortOrder;
  applicableClassIds?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  dueDates?: SortOrder;
  id?: SortOrder;
  installmentCount?: SortOrder;
  name?: SortOrder;
  schoolId?: SortOrder;
  updatedAt?: SortOrder;
};
