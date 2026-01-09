import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  lastLogin?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  passwordHash?: SortOrder;
  role?: SortOrder;
  roles?: SortOrder;
  schoolId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
