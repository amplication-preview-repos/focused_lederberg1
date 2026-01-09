import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CLASSMODEL_TITLE_FIELD } from "../classModel/ClassModelTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const StudentProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"StudentProfiles"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
