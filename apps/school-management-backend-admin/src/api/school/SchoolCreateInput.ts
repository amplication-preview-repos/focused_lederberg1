import { AnnouncementCreateNestedManyWithoutSchoolsInput } from "./AnnouncementCreateNestedManyWithoutSchoolsInput";
import { AttendanceCreateNestedManyWithoutSchoolsInput } from "./AttendanceCreateNestedManyWithoutSchoolsInput";
import { ClassModelCreateNestedManyWithoutSchoolsInput } from "./ClassModelCreateNestedManyWithoutSchoolsInput";
import { InputJsonValue } from "../../types";
import { FeeStructureCreateNestedManyWithoutSchoolsInput } from "./FeeStructureCreateNestedManyWithoutSchoolsInput";
import { GradeCreateNestedManyWithoutSchoolsInput } from "./GradeCreateNestedManyWithoutSchoolsInput";
import { MessageCreateNestedManyWithoutSchoolsInput } from "./MessageCreateNestedManyWithoutSchoolsInput";
import { SubjectCreateNestedManyWithoutSchoolsInput } from "./SubjectCreateNestedManyWithoutSchoolsInput";
import { TransactionCreateNestedManyWithoutSchoolsInput } from "./TransactionCreateNestedManyWithoutSchoolsInput";
import { UserCreateNestedManyWithoutSchoolsInput } from "./UserCreateNestedManyWithoutSchoolsInput";

export type SchoolCreateInput = {
  announcements?: AnnouncementCreateNestedManyWithoutSchoolsInput;
  attendances?: AttendanceCreateNestedManyWithoutSchoolsInput;
  classes?: ClassModelCreateNestedManyWithoutSchoolsInput;
  configField?: InputJsonValue;
  feeStructures?: FeeStructureCreateNestedManyWithoutSchoolsInput;
  grades?: GradeCreateNestedManyWithoutSchoolsInput;
  messages?: MessageCreateNestedManyWithoutSchoolsInput;
  name?: string | null;
  subdomain?: string | null;
  subjects?: SubjectCreateNestedManyWithoutSchoolsInput;
  subscriptionTier?: "Option1" | null;
  transactions?: TransactionCreateNestedManyWithoutSchoolsInput;
  users?: UserCreateNestedManyWithoutSchoolsInput;
};
