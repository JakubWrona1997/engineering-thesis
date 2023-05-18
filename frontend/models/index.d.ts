import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum DocumentType {
  PDF = "PDF",
  DOCX = "DOCX",
  XLS = "XLS"
}

export enum TemplateType {
  BUSINESS = "BUSINESS",
  MARKETING = "MARKETING",
  INVOICE = "INVOICE",
  E_MARKETING = "E_MARKETING"
}

export enum AccountType {
  ADMIN = "ADMIN",
  USER = "USER"
}

export enum CommunicationType {
  EMAIL = "EMAIL",
  SMS = "SMS"
}



type EagerDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Document, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly doc_type?: DocumentType | keyof typeof DocumentType | null;
  readonly is_archived?: boolean | null;
  readonly data?: string | null;
  readonly metadata?: string | null;
  readonly owner?: string | null;
  readonly Template?: Template | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly documentTemplateId?: string | null;
}

type LazyDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Document, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly doc_type?: DocumentType | keyof typeof DocumentType | null;
  readonly is_archived?: boolean | null;
  readonly data?: string | null;
  readonly metadata?: string | null;
  readonly owner?: string | null;
  readonly Template: AsyncItem<Template | undefined>;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly documentTemplateId?: string | null;
}

export declare type Document = LazyLoading extends LazyLoadingDisabled ? EagerDocument : LazyDocument

export declare const Document: (new (init: ModelInit<Document>) => Document) & {
  copyOf(source: Document, mutator: (draft: MutableModel<Document>) => MutableModel<Document> | void): Document;
}

type EagerTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Template, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly template_type?: TemplateType | keyof typeof TemplateType | null;
  readonly metadata?: string | null;
  readonly template_location?: string | null;
  readonly template_image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Template, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly template_type?: TemplateType | keyof typeof TemplateType | null;
  readonly metadata?: string | null;
  readonly template_location?: string | null;
  readonly template_image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Template = LazyLoading extends LazyLoadingDisabled ? EagerTemplate : LazyTemplate

export declare const Template: (new (init: ModelInit<Template>) => Template) & {
  copyOf(source: Template, mutator: (draft: MutableModel<Template>) => MutableModel<Template> | void): Template;
}

type EagerCommunication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Communication, 'id'>;
  };
  readonly id: string;
  readonly communication_type?: CommunicationType | keyof typeof CommunicationType | null;
  readonly Document?: Document | null;
  readonly owner?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly communicationDocumentId?: string | null;
}

type LazyCommunication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Communication, 'id'>;
  };
  readonly id: string;
  readonly communication_type?: CommunicationType | keyof typeof CommunicationType | null;
  readonly Document: AsyncItem<Document | undefined>;
  readonly owner?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly communicationDocumentId?: string | null;
}

export declare type Communication = LazyLoading extends LazyLoadingDisabled ? EagerCommunication : LazyCommunication

export declare const Communication: (new (init: ModelInit<Communication>) => Communication) & {
  copyOf(source: Communication, mutator: (draft: MutableModel<Communication>) => MutableModel<Communication> | void): Communication;
}