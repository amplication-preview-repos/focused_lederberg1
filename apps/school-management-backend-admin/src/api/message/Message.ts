import { School } from "../school/School";

export type Message = {
  attachmentUrl: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  read: boolean | null;
  readAt: Date | null;
  recipient: string | null;
  school?: School | null;
  sender: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
