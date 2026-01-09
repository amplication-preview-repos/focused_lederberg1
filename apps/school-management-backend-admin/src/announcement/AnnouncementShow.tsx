import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";

export const AnnouncementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="attachments" source="attachments" />
        <TextField label="audience" source="audience" />
        <TextField label="class_ids" source="classIds" />
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="priority" source="priority" />
        <ReferenceField label="school" source="school.id" reference="School">
          <TextField source={SCHOOL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
