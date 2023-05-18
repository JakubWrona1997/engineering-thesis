// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const DocumentType = {
  "PDF": "PDF",
  "DOCX": "DOCX",
  "XLS": "XLS"
};

const TemplateType = {
  "BUSINESS": "BUSINESS",
  "MARKETING": "MARKETING",
  "INVOICE": "INVOICE",
  "E_MARKETING": "E_MARKETING"
};

const AccountType = {
  "ADMIN": "ADMIN",
  "USER": "USER"
};

const CommunicationType = {
  "EMAIL": "EMAIL",
  "SMS": "SMS"
};

const { Document, Template, Communication } = initSchema(schema);

export {
  Document,
  Template,
  Communication,
  DocumentType,
  TemplateType,
  AccountType,
  CommunicationType
};