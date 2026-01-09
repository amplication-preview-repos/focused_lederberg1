import { FeeStructure } from "../feeStructure/FeeStructure";
import { School } from "../school/School";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  feeStructure?: FeeStructure | null;
  gateway?: "Option1" | null;
  gatewayTransactionId: string | null;
  id: string;
  paymentMethod?: "Option1" | null;
  receiptUrl: string | null;
  school?: School | null;
  status?: "Option1" | null;
  student: string | null;
  updatedAt: Date;
};
