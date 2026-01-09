import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { SchoolTitle } from "../school/SchoolTitle";
import { StudentProfileTitle } from "../studentProfile/StudentProfileTitle";

export const ClassModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="academic_year" source="academicYear" />
        <ReferenceArrayInput source="attendances" reference="Attendance">
          <SelectArrayInput
            optionText={AttendanceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="capacity" source="capacity" />
        <TextInput label="class_teacher" source="classTeacher" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="school.id" reference="School" label="school">
          <SelectInput optionText={SchoolTitle} />
        </ReferenceInput>
        <TextInput label="section" source="section" />
        <ReferenceArrayInput
          source="studentProfiles"
          reference="StudentProfile"
        >
          <SelectArrayInput
            optionText={StudentProfileTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
