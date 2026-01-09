import { ClassModel } from "../classModel/ClassModel";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type StudentProfile = {
  admissionNo: string | null;
  classField?: ClassModel | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  emergencyContacts: JsonValue;
  id: string;
  medicalInfo: JsonValue;
  rollNo: string | null;
  updatedAt: Date;
  user?: User | null;
};
