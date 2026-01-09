import { SortOrder } from "../../util/SortOrder";

export type AnnouncementOrderByInput = {
  attachments?: SortOrder;
  audience?: SortOrder;
  classIds?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  priority?: SortOrder;
  schoolId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
