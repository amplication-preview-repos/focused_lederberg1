import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ClassModelTitle } from "../classModel/ClassModelTitle";
import { UserTitle } from "../user/UserTitle";

export const StudentProfileCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="admission_no" source="admissionNo" />
        <ReferenceInput
          source="classField.id"
          reference="ClassModel"
          label="class"
        >
          <SelectInput optionText={ClassModelTitle} />
        </ReferenceInput>
        <DateTimeInput label="date_of_birth" source="dateOfBirth" />
        <div />
        <div />
        <TextInput label="roll_no" source="rollNo" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
