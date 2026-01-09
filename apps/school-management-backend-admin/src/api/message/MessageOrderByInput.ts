import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  attachmentUrl?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  read?: SortOrder;
  readAt?: SortOrder;
  recipient?: SortOrder;
  schoolId?: SortOrder;
  sender?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
