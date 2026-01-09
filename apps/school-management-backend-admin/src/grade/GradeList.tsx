import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";
import { SUBJECT_TITLE_FIELD } from "../subject/SubjectTitle";

export const GradeList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Grades"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="assessment_type" source="assessmentType" />
        <TextField label="comments" source="comments" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="grade" source="grade" />
        <TextField label="ID" source="id" />
        <TextField label="max_score" source="maxScore" />
        <BooleanField label="published" source="published" />
        <ReferenceField label="school" source="school.id" reference="School">
          <TextField source={SCHOOL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="score" source="score" />
        <TextField label="student" source="student" />
        <ReferenceField label="subject" source="subject.id" reference="Subject">
          <TextField source={SUBJECT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
