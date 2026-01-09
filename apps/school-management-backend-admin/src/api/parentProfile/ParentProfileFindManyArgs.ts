import { ParentProfileWhereInput } from "./ParentProfileWhereInput";
import { ParentProfileOrderByInput } from "./ParentProfileOrderByInput";

export type ParentProfileFindManyArgs = {
  where?: ParentProfileWhereInput;
  orderBy?: Array<ParentProfileOrderByInput>;
  skip?: number;
  take?: number;
};
