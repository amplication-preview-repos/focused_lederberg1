import { FeeStructureWhereInput } from "./FeeStructureWhereInput";
import { FeeStructureOrderByInput } from "./FeeStructureOrderByInput";

export type FeeStructureFindManyArgs = {
  where?: FeeStructureWhereInput;
  orderBy?: Array<FeeStructureOrderByInput>;
  skip?: number;
  take?: number;
};
