import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ClassModelTitle } from "../classModel/ClassModelTitle";
import { UserTitle } from "../user/UserTitle";

export const StudentProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
