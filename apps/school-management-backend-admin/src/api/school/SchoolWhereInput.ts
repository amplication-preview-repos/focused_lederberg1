import { AnnouncementListRelationFilter } from "../announcement/AnnouncementListRelationFilter";
import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { ClassModelListRelationFilter } from "../classModel/ClassModelListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FeeStructureListRelationFilter } from "../feeStructure/FeeStructureListRelationFilter";
import { GradeListRelationFilter } from "../grade/GradeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubjectListRelationFilter } from "../subject/SubjectListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type SchoolWhereInput = {
  announcements?: AnnouncementListRelationFilter;
  attendances?: AttendanceListRelationFilter;
  classes?: ClassModelListRelationFilter;
  configField?: JsonFilter;
  feeStructures?: FeeStructureListRelationFilter;
  grades?: GradeListRelationFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  subdomain?: StringNullableFilter;
  subjects?: SubjectListRelationFilter;
  subscriptionTier?: "Option1";
  transactions?: TransactionListRelationFilter;
  users?: UserListRelationFilter;
};
