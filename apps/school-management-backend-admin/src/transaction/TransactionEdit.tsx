import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { FeeStructureTitle } from "../feeStructure/FeeStructureTitle";
import { SchoolTitle } from "../school/SchoolTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
