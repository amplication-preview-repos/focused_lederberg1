import { TeacherProfile as TTeacherProfile } from "../api/teacherProfile/TeacherProfile";

export const TEACHERPROFILE_TITLE_FIELD = "employeeId";

export const TeacherProfileTitle = (record: TTeacherProfile): string => {
  return record.employeeId?.toString() || String(record.id);
};
