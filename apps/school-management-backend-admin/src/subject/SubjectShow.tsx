import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";
import { SUBJECT_TITLE_FIELD } from "./SubjectTitle";

export const SubjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <ReferenceField label="school" source="school.id" reference="School">
          <TextField source={SCHOOL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="teacher" source="teacher" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Grade" target="subjectId" label="Grades">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="assessment_type" source="assessmentType" />
            <TextField label="comments" source="comments" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="grade" source="grade" />
            <TextField label="ID" source="id" />
            <TextField label="max_score" source="maxScore" />
            <BooleanField label="published" source="published" />
            <ReferenceField
              label="school"
              source="school.id"
              reference="School"
            >
              <TextField source={SCHOOL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="score" source="score" />
            <TextField label="student" source="student" />
            <ReferenceField
              label="subject"
              source="subject.id"
              reference="Subject"
            >
              <TextField source={SUBJECT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
