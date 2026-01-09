import { Announcement } from "../announcement/Announcement";
import { Attendance } from "../attendance/Attendance";
import { ClassModel } from "../classModel/ClassModel";
import { JsonValue } from "type-fest";
import { FeeStructure } from "../feeStructure/FeeStructure";
import { Grade } from "../grade/Grade";
import { Message } from "../message/Message";
import { Subject } from "../subject/Subject";
import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type School = {
  announcements?: Array<Announcement>;
  attendances?: Array<Attendance>;
  classes?: Array<ClassModel>;
  configField: JsonValue;
  createdAt: Date;
  feeStructures?: Array<FeeStructure>;
  grades?: Array<Grade>;
  id: string;
  messages?: Array<Message>;
  name: string | null;
  subdomain: string | null;
  subjects?: Array<Subject>;
  subscriptionTier?: "Option1" | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  users?: Array<User>;
};
