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
import { FEESTRUCTURE_TITLE_FIELD } from "../feeStructure/FeeStructureTitle";
import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="fee_structure"
          source="feestructure.id"
          reference="FeeStructure"
        >
          <TextField source={FEESTRUCTURE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="gateway" source="gateway" />
        <TextField
          label="gateway_transaction_id"
          source="gatewayTransactionId"
        />
        <TextField label="ID" source="id" />
        <TextField label="payment_method" source="paymentMethod" />
        <TextField label="receipt_url" source="receiptUrl" />
        <ReferenceField label="school" source="school.id" reference="School">
          <TextField source={SCHOOL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <TextField label="student" source="student" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
