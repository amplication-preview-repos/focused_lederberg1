import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FEESTRUCTURE_TITLE_FIELD } from "./FeeStructureTitle";
import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";

export const FeeStructureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Transaction"
          target="feeStructureId"
          label="Transactions"
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
            <ReferenceField
              label="school"
              source="school.id"
              reference="School"
            >
              <TextField source={SCHOOL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <TextField label="student" source="student" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
