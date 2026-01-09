import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { FeeStructureTitle } from "../feeStructure/FeeStructureTitle";
import { SchoolTitle } from "../school/SchoolTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="feeStructure.id"
          reference="FeeStructure"
          label="fee_structure"
        >
          <SelectInput optionText={FeeStructureTitle} />
        </ReferenceInput>
        <SelectInput
          source="gateway"
          label="gateway"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="gateway_transaction_id"
          source="gatewayTransactionId"
        />
        <SelectInput
          source="paymentMethod"
          label="payment_method"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="receipt_url" source="receiptUrl" />
        <ReferenceInput source="school.id" reference="School" label="school">
          <SelectInput optionText={SchoolTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="student" source="student" />
      </SimpleForm>
    </Create>
  );
};
