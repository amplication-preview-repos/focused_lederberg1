import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
} from "react-admin";

import { SchoolTitle } from "../school/SchoolTitle";
import { SubjectTitle } from "../subject/SubjectTitle";

export const GradeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="assessmentType"
          label="assessment_type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="comments" multiline source="comments" />
        <TextInput label="grade" source="grade" />
        <NumberInput label="max_score" source="maxScore" />
        <BooleanInput label="published" source="published" />
        <ReferenceInput source="school.id" reference="School" label="school">
          <SelectInput optionText={SchoolTitle} />
        </ReferenceInput>
        <NumberInput label="score" source="score" />
        <TextInput label="student" source="student" />
        <ReferenceInput source="subject.id" reference="Subject" label="subject">
          <SelectInput optionText={SubjectTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
