import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { FEESTRUCTURE_TITLE_FIELD } from "../feeStructure/FeeStructureTitle";
import { SCHOOL_TITLE_FIELD } from "../school/SchoolTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
