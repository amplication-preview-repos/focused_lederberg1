import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentProfileUpdateInput = {
  admissionNo?: string | null;
  classField?: ClassModelWhereUniqueInput | null;
  dateOfBirth?: Date | null;
  emergencyContacts?: InputJsonValue;
  medicalInfo?: InputJsonValue;
  rollNo?: string | null;
  user?: UserWhereUniqueInput | null;
};
