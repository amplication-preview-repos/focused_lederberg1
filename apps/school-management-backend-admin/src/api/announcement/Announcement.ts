import { JsonValue } from "type-fest";
import { School } from "../school/School";

export type Announcement = {
  attachments: JsonValue;
  audience?: "Option1" | null;
  classIds: JsonValue;
  content: string | null;
  createdAt: Date;
  id: string;
  priority?: "Option1" | null;
  school?: School | null;
  title: string | null;
  updatedAt: Date;
};
