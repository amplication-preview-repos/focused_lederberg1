import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "gatewayTransactionId";

export const TransactionTitle = (record: TTransaction): string => {
  return record.gatewayTransactionId?.toString() || String(record.id);
};
