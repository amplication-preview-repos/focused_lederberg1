import { ParentProfile as TParentProfile } from "../api/parentProfile/ParentProfile";

export const PARENTPROFILE_TITLE_FIELD = "occupation";

export const ParentProfileTitle = (record: TParentProfile): string => {
  return record.occupation?.toString() || String(record.id);
};
