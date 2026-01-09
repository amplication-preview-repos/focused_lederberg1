import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type MessageCreateInput = {
  attachmentUrl?: string | null;
  content?: string | null;
  read?: boolean | null;
  readAt?: Date | null;
  recipient?: string | null;
  school?: SchoolWhereUniqueInput | null;
  sender?: string | null;
  typeField?: "Option1" | null;
};
