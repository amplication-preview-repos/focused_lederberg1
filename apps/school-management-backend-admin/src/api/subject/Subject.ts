import { Grade } from "../grade/Grade";
import { School } from "../school/School";

export type Subject = {
  code: string | null;
  createdAt: Date;
  grades?: Array<Grade>;
  id: string;
  name: string | null;
  school?: School | null;
  teacher: string | null;
  updatedAt: Date;
};
