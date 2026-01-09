import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
