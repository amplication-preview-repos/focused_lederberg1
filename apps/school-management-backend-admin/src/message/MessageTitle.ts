import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "attachmentUrl";

export const MessageTitle = (record: TMessage): string => {
  return record.attachmentUrl?.toString() || String(record.id);
};
