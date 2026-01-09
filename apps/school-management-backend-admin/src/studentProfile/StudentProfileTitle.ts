import { StudentProfile as TStudentProfile } from "../api/studentProfile/StudentProfile";

export const STUDENTPROFILE_TITLE_FIELD = "admissionNo";

export const StudentProfileTitle = (record: TStudentProfile): string => {
  return record.admissionNo?.toString() || String(record.id);
};
