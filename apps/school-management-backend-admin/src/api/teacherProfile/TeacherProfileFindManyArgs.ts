import { TeacherProfileWhereInput } from "./TeacherProfileWhereInput";
import { TeacherProfileOrderByInput } from "./TeacherProfileOrderByInput";

export type TeacherProfileFindManyArgs = {
  where?: TeacherProfileWhereInput;
  orderBy?: Array<TeacherProfileOrderByInput>;
  skip?: number;
  take?: number;
};
