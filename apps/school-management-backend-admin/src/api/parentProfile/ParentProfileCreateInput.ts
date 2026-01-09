import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentProfileCreateInput = {
  children?: InputJsonValue;
  occupation?: string | null;
  user?: UserWhereUniqueInput | null;
};
