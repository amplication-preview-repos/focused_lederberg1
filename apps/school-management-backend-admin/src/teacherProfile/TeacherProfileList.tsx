import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TeacherProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TeacherProfiles"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
