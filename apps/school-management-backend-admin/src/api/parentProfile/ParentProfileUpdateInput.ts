import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentProfileUpdateInput = {
  children?: InputJsonValue;
  occupation?: string | null;
  user?: UserWhereUniqueInput | null;
};
