import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ClassModelTitle } from "../classModel/ClassModelTitle";
import { SchoolTitle } from "../school/SchoolTitle";

export const AttendanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="classField.id"
          reference="ClassModel"
          label="class"
        >
          <SelectInput optionText={ClassModelTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <TextInput label="marked_by" source="markedBy" />
        <ReferenceInput source="school.id" reference="School" label="school">
          <SelectInput optionText={SchoolTitle} />
        </ReferenceInput>
        <SelectInput
          source="session"
          label="session"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="student" source="student" />
      </SimpleForm>
    </Edit>
  );
};
