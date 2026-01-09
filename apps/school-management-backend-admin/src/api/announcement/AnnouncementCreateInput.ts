import { InputJsonValue } from "../../types";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type AnnouncementCreateInput = {
  attachments?: InputJsonValue;
  audience?: "Option1" | null;
  classIds?: InputJsonValue;
  content?: string | null;
  priority?: "Option1" | null;
  school?: SchoolWhereUniqueInput | null;
  title?: string | null;
};
