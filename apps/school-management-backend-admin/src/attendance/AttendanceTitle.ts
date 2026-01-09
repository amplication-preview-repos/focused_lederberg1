import { Attendance as TAttendance } from "../api/attendance/Attendance";

export const ATTENDANCE_TITLE_FIELD = "markedBy";

export const AttendanceTitle = (record: TAttendance): string => {
  return record.markedBy?.toString() || String(record.id);
};
