import { FeeStructureWhereUniqueInput } from "../feeStructure/FeeStructureWhereUniqueInput";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  feeStructure?: FeeStructureWhereUniqueInput | null;
  gateway?: "Option1" | null;
  gatewayTransactionId?: string | null;
  paymentMethod?: "Option1" | null;
  receiptUrl?: string | null;
  school?: SchoolWhereUniqueInput | null;
  status?: "Option1" | null;
  student?: string | null;
};
