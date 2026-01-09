import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  feeStructureId?: SortOrder;
  gateway?: SortOrder;
  gatewayTransactionId?: SortOrder;
  id?: SortOrder;
  paymentMethod?: SortOrder;
  receiptUrl?: SortOrder;
  schoolId?: SortOrder;
  status?: SortOrder;
  student?: SortOrder;
  updatedAt?: SortOrder;
};
