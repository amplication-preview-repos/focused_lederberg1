import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";

export const FeeStructureList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"FeeStructures"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amount" source="amount" />
        <TextField label="applicable_class_ids" source="applicableClassIds" />
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="due_dates" source="dueDates" />
        <TextField label="ID" source="id" />
        <TextField label="installment_count" source="installmentCount" />
        <TextField label="name" source="name" />
        <ReferenceField label="school" source="school.id" reference="School">
          <TextField source={SCHOOL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
