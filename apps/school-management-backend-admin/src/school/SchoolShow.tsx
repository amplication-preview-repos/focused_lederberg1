import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { SCHOOL_TITLE_FIELD } from "./SchoolTitle";
import { CLASSMODEL_TITLE_FIELD } from "../classModel/ClassModelTitle";
import { SUBJECT_TITLE_FIELD } from "../subject/SubjectTitle";
import { FEESTRUCTURE_TITLE_FIELD } from "../feeStructure/FeeStructureTitle";

export const SchoolShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="config" source="configField" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="subdomain" source="subdomain" />
        <TextField label="subscription_tier" source="subscriptionTier" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Announcement"
          target="schoolId"
          label="Announcements"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="attachments" source="attachments" />
            <TextField label="audience" source="audience" />
            <TextField label="class_ids" source="classIds" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="priority" source="priority" />
            <ReferenceField
              label="school"
              source="school.id"
              reference="School"
            >
              <TextField source={SCHOOL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Attendance"
          target="schoolId"
          label="Attendances"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="class"
              source="classmodel.id"
              reference="ClassModel"
            >
              <TextField source={CLASSMODEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="marked_by" source="markedBy" />
            <ReferenceField
              label="school"
              source="school.id"
              reference="School"
            >
              <TextField source={SCHOOL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="session" source="session" />
            <TextField label="status" source="status" />
            <TextField label="student" source="student" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ClassModel"
          target="schoolId"
          label="Classes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="academic_year" source="academicYear" />
            <TextField label="capacity" source="capacity" />
            <TextField label="class_teacher" source="classTeacher" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="school"
              source="school.id"
              reference="School"
            >
              <TextField source={SCHOOL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="section" source="section" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FeeStructure"
          target="schoolId"
          label="FeeStructures"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="amount" source="amount" />
            <TextField
              label="applicable_class_ids"
              source="applicableClassIds"
            />
            <TextField label="category" source="category" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="due_dates" source="dueDates" />
            <TextField label="ID" source="id" />
            <TextField label="installment_count" source="installmentCount" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="school"
              source="school.id"
              reference="School"
            >
              <TextField source={SCHOOL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Grade" target="schoolId" label="Grades">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="assessment_type" source="assessmentType" />
            <TextField label="comments" source="comments" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="grade" source="grade" />
            <TextField label="ID" source="id" />
            <TextField label="max_score" source="maxScore" />
            <BooleanField label="published" source="published" />
            <ReferenceField
              label="school"
              source="school.id"
              reference="School"
            >
              <TextField source={SCHOOL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="score" source="score" />
            <TextField label="student" source="student" />
            <ReferenceField
              label="subject"
              source="subject.id"
              reference="Subject"
            >
              <TextField source={SUBJECT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Message"
          target="schoolId"
          label="Messages"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="attachment_url" source="attachmentUrl" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="read" source="read" />
            <TextField label="read_at" source="readAt" />
            <TextField label="recipient" source="recipient" />
            <ReferenceField
              label="school"
              source="school.id"
              reference="School"
            >
              <TextField source={SCHOOL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="sender" source="sender" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Subject"
          target="schoolId"
          label="Subjects"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="school"
              source="school.id"
              reference="School"
            >
              <TextField source={SCHOOL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="teacher" source="teacher" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="schoolId"
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
        <ReferenceManyField reference="User" target="schoolId" label="Users">
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
            <ReferenceField
              label="school"
              source="school.id"
              reference="School"
            >
              <TextField source={SCHOOL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
