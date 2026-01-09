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
} from "react-admin";

import { CLASSMODEL_TITLE_FIELD } from "./ClassModelTitle";
import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ClassModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="academic_year" source="academicYear" />
        <TextField label="capacity" source="capacity" />
        <TextField label="class_teacher" source="classTeacher" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <ReferenceField label="school" source="school.id" reference="School">
          <TextField source={SCHOOL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="section" source="section" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Attendance"
          target="classFieldId"
          label="Attendances"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="class"
              source="classmodel.id"
              reference="ClassModel"
            >
              <TextField source={CLASSMODEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="marked_by" source="markedBy" />
            <ReferenceField
              label="school"
              source="school.id"
              reference="School"
            >
              <TextField source={SCHOOL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="session" source="session" />
            <TextField label="status" source="status" />
            <TextField label="student" source="student" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentProfile"
          target="classFieldId"
          label="StudentProfiles"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="admission_no" source="admissionNo" />
            <ReferenceField
              label="class"
              source="classmodel.id"
              reference="ClassModel"
            >
              <TextField source={CLASSMODEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date_of_birth" source="dateOfBirth" />
            <TextField label="emergency_contacts" source="emergencyContacts" />
            <TextField label="ID" source="id" />
            <TextField label="medical_info" source="medicalInfo" />
            <TextField label="roll_no" source="rollNo" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
