import { AnnouncementUpdateManyWithoutSchoolsInput } from "./AnnouncementUpdateManyWithoutSchoolsInput";
import { AttendanceUpdateManyWithoutSchoolsInput } from "./AttendanceUpdateManyWithoutSchoolsInput";
import { ClassModelUpdateManyWithoutSchoolsInput } from "./ClassModelUpdateManyWithoutSchoolsInput";
import { InputJsonValue } from "../../types";
import { FeeStructureUpdateManyWithoutSchoolsInput } from "./FeeStructureUpdateManyWithoutSchoolsInput";
import { GradeUpdateManyWithoutSchoolsInput } from "./GradeUpdateManyWithoutSchoolsInput";
import { MessageUpdateManyWithoutSchoolsInput } from "./MessageUpdateManyWithoutSchoolsInput";
import { SubjectUpdateManyWithoutSchoolsInput } from "./SubjectUpdateManyWithoutSchoolsInput";
import { TransactionUpdateManyWithoutSchoolsInput } from "./TransactionUpdateManyWithoutSchoolsInput";
import { UserUpdateManyWithoutSchoolsInput } from "./UserUpdateManyWithoutSchoolsInput";

export type SchoolUpdateInput = {
  announcements?: AnnouncementUpdateManyWithoutSchoolsInput;
  attendances?: AttendanceUpdateManyWithoutSchoolsInput;
  classes?: ClassModelUpdateManyWithoutSchoolsInput;
  configField?: InputJsonValue;
  feeStructures?: FeeStructureUpdateManyWithoutSchoolsInput;
  grades?: GradeUpdateManyWithoutSchoolsInput;
  messages?: MessageUpdateManyWithoutSchoolsInput;
  name?: string | null;
  subdomain?: string | null;
  subjects?: SubjectUpdateManyWithoutSchoolsInput;
  subscriptionTier?: "Option1" | null;
  transactions?: TransactionUpdateManyWithoutSchoolsInput;
  users?: UserUpdateManyWithoutSchoolsInput;
};
