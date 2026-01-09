import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";

export type AnnouncementWhereInput = {
  attachments?: JsonFilter;
  audience?: "Option1";
  classIds?: JsonFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  priority?: "Option1";
  school?: SchoolWhereUniqueInput;
  title?: StringNullableFilter;
};
