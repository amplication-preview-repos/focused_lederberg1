import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { CLASSMODEL_TITLE_FIELD } from "../classModel/ClassModelTitle";
import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_active" source="isActive" />
        <TextField label="last_login" source="lastLogin" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="password_hash" source="passwordHash" />
        <TextField label="role" source="role" />
        <TextField label="Roles" source="roles" />
        <ReferenceField label="school" source="school.id" reference="School">
          <TextField source={SCHOOL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="ParentProfile"
          target="userId"
          label="ParentProfiles"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="children" source="children" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="occupation" source="occupation" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentProfile"
          target="userId"
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
        <ReferenceManyField
          reference="TeacherProfile"
          target="userId"
          label="TeacherProfiles"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="employee_id" source="employeeId" />
            <TextField label="ID" source="id" />
            <TextField label="joining_date" source="joiningDate" />
            <TextField label="qualifications" source="qualifications" />
            <TextField label="subjects_taught" source="subjectsTaught" />
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
