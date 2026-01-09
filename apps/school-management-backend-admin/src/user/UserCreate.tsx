import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { ParentProfileTitle } from "../parentProfile/ParentProfileTitle";
import { SchoolTitle } from "../school/SchoolTitle";
import { StudentProfileTitle } from "../studentProfile/StudentProfileTitle";
import { TeacherProfileTitle } from "../teacherProfile/TeacherProfileTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <BooleanInput label="is_active" source="isActive" />
        <DateTimeInput label="last_login" source="lastLogin" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput source="parentProfiles" reference="ParentProfile">
          <SelectArrayInput
            optionText={ParentProfileTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <TextInput label="password_hash" source="passwordHash" />
        <SelectInput
          source="role"
          label="role"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="school.id" reference="School" label="school">
          <SelectInput optionText={SchoolTitle} />
        </ReferenceInput>
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
        <ReferenceArrayInput
          source="teacherProfiles"
          reference="TeacherProfile"
        >
          <SelectArrayInput
            optionText={TeacherProfileTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
