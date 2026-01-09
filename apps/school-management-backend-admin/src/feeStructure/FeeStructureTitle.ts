import { FeeStructure as TFeeStructure } from "../api/feeStructure/FeeStructure";

export const FEESTRUCTURE_TITLE_FIELD = "name";

export const FeeStructureTitle = (record: TFeeStructure): string => {
  return record.name?.toString() || String(record.id);
};
