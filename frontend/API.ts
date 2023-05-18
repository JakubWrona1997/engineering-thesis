/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCommunicationInput = {
  id?: string | null,
  communication_type?: CommunicationType | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
  communicationDocumentId?: string | null,
};

export enum CommunicationType {
  EMAIL = "EMAIL",
  SMS = "SMS",
}


export type ModelCommunicationConditionInput = {
  communication_type?: ModelCommunicationTypeInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommunicationConditionInput | null > | null,
  or?: Array< ModelCommunicationConditionInput | null > | null,
  not?: ModelCommunicationConditionInput | null,
  communicationDocumentId?: ModelIDInput | null,
};

export type ModelCommunicationTypeInput = {
  eq?: CommunicationType | null,
  ne?: CommunicationType | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Communication = {
  __typename: "Communication",
  id: string,
  communication_type?: CommunicationType | null,
  Document?: Document | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  communicationDocumentId?: string | null,
};

export type Document = {
  __typename: "Document",
  id: string,
  name: string,
  doc_type?: DocumentType | null,
  is_archived?: boolean | null,
  data?: string | null,
  metadata?: string | null,
  owner?: string | null,
  Template?: Template | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  documentTemplateId?: string | null,
};

export enum DocumentType {
  PDF = "PDF",
  DOCX = "DOCX",
  XLS = "XLS",
}


export type Template = {
  __typename: "Template",
  id: string,
  name?: string | null,
  template_type?: TemplateType | null,
  metadata?: string | null,
  template_location?: string | null,
  template_image?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum TemplateType {
  BUSINESS = "BUSINESS",
  MARKETING = "MARKETING",
  INVOICE = "INVOICE",
  E_MARKETING = "E_MARKETING",
}


export type CreateTemplateInput = {
  id?: string | null,
  name?: string | null,
  template_type?: TemplateType | null,
  metadata?: string | null,
  template_location?: string | null,
  template_image?: string | null,
  _version?: number | null,
};

export type ModelTemplateConditionInput = {
  name?: ModelStringInput | null,
  template_type?: ModelTemplateTypeInput | null,
  metadata?: ModelStringInput | null,
  template_location?: ModelStringInput | null,
  template_image?: ModelStringInput | null,
  and?: Array< ModelTemplateConditionInput | null > | null,
  or?: Array< ModelTemplateConditionInput | null > | null,
  not?: ModelTemplateConditionInput | null,
};

export type ModelTemplateTypeInput = {
  eq?: TemplateType | null,
  ne?: TemplateType | null,
};

export type UpdateTemplateInput = {
  id: string,
  name?: string | null,
  template_type?: TemplateType | null,
  metadata?: string | null,
  template_location?: string | null,
  template_image?: string | null,
  _version?: number | null,
};

export type DeleteTemplateInput = {
  id: string,
  _version?: number | null,
};

export type CreateDocumentInput = {
  id?: string | null,
  name: string,
  doc_type?: DocumentType | null,
  is_archived?: boolean | null,
  data?: string | null,
  metadata?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
  documentTemplateId?: string | null,
};

export type ModelDocumentConditionInput = {
  name?: ModelStringInput | null,
  doc_type?: ModelDocumentTypeInput | null,
  is_archived?: ModelBooleanInput | null,
  data?: ModelStringInput | null,
  metadata?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDocumentConditionInput | null > | null,
  or?: Array< ModelDocumentConditionInput | null > | null,
  not?: ModelDocumentConditionInput | null,
  documentTemplateId?: ModelIDInput | null,
};

export type ModelDocumentTypeInput = {
  eq?: DocumentType | null,
  ne?: DocumentType | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateDocumentInput = {
  id: string,
  name?: string | null,
  doc_type?: DocumentType | null,
  is_archived?: boolean | null,
  data?: string | null,
  metadata?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
  documentTemplateId?: string | null,
};

export type DeleteDocumentInput = {
  id: string,
  _version?: number | null,
};

export type ModelCommunicationFilterInput = {
  id?: ModelIDInput | null,
  communication_type?: ModelCommunicationTypeInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommunicationFilterInput | null > | null,
  or?: Array< ModelCommunicationFilterInput | null > | null,
  not?: ModelCommunicationFilterInput | null,
  communicationDocumentId?: ModelIDInput | null,
};

export type ModelCommunicationConnection = {
  __typename: "ModelCommunicationConnection",
  items:  Array<Communication | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTemplateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  template_type?: ModelTemplateTypeInput | null,
  metadata?: ModelStringInput | null,
  template_location?: ModelStringInput | null,
  template_image?: ModelStringInput | null,
  and?: Array< ModelTemplateFilterInput | null > | null,
  or?: Array< ModelTemplateFilterInput | null > | null,
  not?: ModelTemplateFilterInput | null,
};

export type ModelTemplateConnection = {
  __typename: "ModelTemplateConnection",
  items:  Array<Template | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDocumentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  doc_type?: ModelDocumentTypeInput | null,
  is_archived?: ModelBooleanInput | null,
  data?: ModelStringInput | null,
  metadata?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDocumentFilterInput | null > | null,
  or?: Array< ModelDocumentFilterInput | null > | null,
  not?: ModelDocumentFilterInput | null,
  documentTemplateId?: ModelIDInput | null,
};

export type ModelDocumentConnection = {
  __typename: "ModelDocumentConnection",
  items:  Array<Document | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionCommunicationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  communication_type?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommunicationFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommunicationFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTemplateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  template_type?: ModelSubscriptionStringInput | null,
  metadata?: ModelSubscriptionStringInput | null,
  template_location?: ModelSubscriptionStringInput | null,
  template_image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTemplateFilterInput | null > | null,
  or?: Array< ModelSubscriptionTemplateFilterInput | null > | null,
};

export type ModelSubscriptionDocumentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  doc_type?: ModelSubscriptionStringInput | null,
  is_archived?: ModelSubscriptionBooleanInput | null,
  data?: ModelSubscriptionStringInput | null,
  metadata?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDocumentFilterInput | null > | null,
  or?: Array< ModelSubscriptionDocumentFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateCommunicationMutationVariables = {
  input: CreateCommunicationInput,
  condition?: ModelCommunicationConditionInput | null,
};

export type CreateCommunicationMutation = {
  createCommunication?:  {
    __typename: "Communication",
    id: string,
    communication_type?: CommunicationType | null,
    Document?:  {
      __typename: "Document",
      id: string,
      name: string,
      doc_type?: DocumentType | null,
      is_archived?: boolean | null,
      data?: string | null,
      metadata?: string | null,
      owner?: string | null,
      Template?:  {
        __typename: "Template",
        id: string,
        name?: string | null,
        template_type?: TemplateType | null,
        metadata?: string | null,
        template_location?: string | null,
        template_image?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      documentTemplateId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    communicationDocumentId?: string | null,
  } | null,
};

export type CreateTemplateMutationVariables = {
  input: CreateTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type CreateTemplateMutation = {
  createTemplate?:  {
    __typename: "Template",
    id: string,
    name?: string | null,
    template_type?: TemplateType | null,
    metadata?: string | null,
    template_location?: string | null,
    template_image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTemplateMutationVariables = {
  input: UpdateTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type UpdateTemplateMutation = {
  updateTemplate?:  {
    __typename: "Template",
    id: string,
    name?: string | null,
    template_type?: TemplateType | null,
    metadata?: string | null,
    template_location?: string | null,
    template_image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTemplateMutationVariables = {
  input: DeleteTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type DeleteTemplateMutation = {
  deleteTemplate?:  {
    __typename: "Template",
    id: string,
    name?: string | null,
    template_type?: TemplateType | null,
    metadata?: string | null,
    template_location?: string | null,
    template_image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDocumentMutationVariables = {
  input: CreateDocumentInput,
  condition?: ModelDocumentConditionInput | null,
};

export type CreateDocumentMutation = {
  createDocument?:  {
    __typename: "Document",
    id: string,
    name: string,
    doc_type?: DocumentType | null,
    is_archived?: boolean | null,
    data?: string | null,
    metadata?: string | null,
    owner?: string | null,
    Template?:  {
      __typename: "Template",
      id: string,
      name?: string | null,
      template_type?: TemplateType | null,
      metadata?: string | null,
      template_location?: string | null,
      template_image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    documentTemplateId?: string | null,
  } | null,
};

export type UpdateDocumentMutationVariables = {
  input: UpdateDocumentInput,
  condition?: ModelDocumentConditionInput | null,
};

export type UpdateDocumentMutation = {
  updateDocument?:  {
    __typename: "Document",
    id: string,
    name: string,
    doc_type?: DocumentType | null,
    is_archived?: boolean | null,
    data?: string | null,
    metadata?: string | null,
    owner?: string | null,
    Template?:  {
      __typename: "Template",
      id: string,
      name?: string | null,
      template_type?: TemplateType | null,
      metadata?: string | null,
      template_location?: string | null,
      template_image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    documentTemplateId?: string | null,
  } | null,
};

export type DeleteDocumentMutationVariables = {
  input: DeleteDocumentInput,
  condition?: ModelDocumentConditionInput | null,
};

export type DeleteDocumentMutation = {
  deleteDocument?:  {
    __typename: "Document",
    id: string,
    name: string,
    doc_type?: DocumentType | null,
    is_archived?: boolean | null,
    data?: string | null,
    metadata?: string | null,
    owner?: string | null,
    Template?:  {
      __typename: "Template",
      id: string,
      name?: string | null,
      template_type?: TemplateType | null,
      metadata?: string | null,
      template_location?: string | null,
      template_image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    documentTemplateId?: string | null,
  } | null,
};

export type CreateDocumentWithTemplateMutationVariables = {
  name: string,
  doc_type?: DocumentType | null,
  is_archived?: boolean | null,
  data?: string | null,
  metadata?: string | null,
  document_template_id?: string | null,
};

export type CreateDocumentWithTemplateMutation = {
  createDocumentWithTemplate?:  {
    __typename: "Document",
    id: string,
    name: string,
    doc_type?: DocumentType | null,
    is_archived?: boolean | null,
    data?: string | null,
    metadata?: string | null,
    owner?: string | null,
    Template?:  {
      __typename: "Template",
      id: string,
      name?: string | null,
      template_type?: TemplateType | null,
      metadata?: string | null,
      template_location?: string | null,
      template_image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    documentTemplateId?: string | null,
  } | null,
};

export type GetCommunicationQueryVariables = {
  id: string,
};

export type GetCommunicationQuery = {
  getCommunication?:  {
    __typename: "Communication",
    id: string,
    communication_type?: CommunicationType | null,
    Document?:  {
      __typename: "Document",
      id: string,
      name: string,
      doc_type?: DocumentType | null,
      is_archived?: boolean | null,
      data?: string | null,
      metadata?: string | null,
      owner?: string | null,
      Template?:  {
        __typename: "Template",
        id: string,
        name?: string | null,
        template_type?: TemplateType | null,
        metadata?: string | null,
        template_location?: string | null,
        template_image?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      documentTemplateId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    communicationDocumentId?: string | null,
  } | null,
};

export type ListCommunicationsQueryVariables = {
  filter?: ModelCommunicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommunicationsQuery = {
  listCommunications?:  {
    __typename: "ModelCommunicationConnection",
    items:  Array< {
      __typename: "Communication",
      id: string,
      communication_type?: CommunicationType | null,
      Document?:  {
        __typename: "Document",
        id: string,
        name: string,
        doc_type?: DocumentType | null,
        is_archived?: boolean | null,
        data?: string | null,
        metadata?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        documentTemplateId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      communicationDocumentId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCommunicationsQueryVariables = {
  filter?: ModelCommunicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCommunicationsQuery = {
  syncCommunications?:  {
    __typename: "ModelCommunicationConnection",
    items:  Array< {
      __typename: "Communication",
      id: string,
      communication_type?: CommunicationType | null,
      Document?:  {
        __typename: "Document",
        id: string,
        name: string,
        doc_type?: DocumentType | null,
        is_archived?: boolean | null,
        data?: string | null,
        metadata?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        documentTemplateId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      communicationDocumentId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ListCommunicationsSortedByTimestampQueryVariables = {
  communication_type: CommunicationType,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommunicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommunicationsSortedByTimestampQuery = {
  listCommunicationsSortedByTimestamp?:  {
    __typename: "ModelCommunicationConnection",
    items:  Array< {
      __typename: "Communication",
      id: string,
      communication_type?: CommunicationType | null,
      Document?:  {
        __typename: "Document",
        id: string,
        name: string,
        doc_type?: DocumentType | null,
        is_archived?: boolean | null,
        data?: string | null,
        metadata?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        documentTemplateId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      communicationDocumentId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTemplateQueryVariables = {
  id: string,
};

export type GetTemplateQuery = {
  getTemplate?:  {
    __typename: "Template",
    id: string,
    name?: string | null,
    template_type?: TemplateType | null,
    metadata?: string | null,
    template_location?: string | null,
    template_image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTemplatesQueryVariables = {
  filter?: ModelTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTemplatesQuery = {
  listTemplates?:  {
    __typename: "ModelTemplateConnection",
    items:  Array< {
      __typename: "Template",
      id: string,
      name?: string | null,
      template_type?: TemplateType | null,
      metadata?: string | null,
      template_location?: string | null,
      template_image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTemplatesQueryVariables = {
  filter?: ModelTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTemplatesQuery = {
  syncTemplates?:  {
    __typename: "ModelTemplateConnection",
    items:  Array< {
      __typename: "Template",
      id: string,
      name?: string | null,
      template_type?: TemplateType | null,
      metadata?: string | null,
      template_location?: string | null,
      template_image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDocumentQueryVariables = {
  id: string,
};

export type GetDocumentQuery = {
  getDocument?:  {
    __typename: "Document",
    id: string,
    name: string,
    doc_type?: DocumentType | null,
    is_archived?: boolean | null,
    data?: string | null,
    metadata?: string | null,
    owner?: string | null,
    Template?:  {
      __typename: "Template",
      id: string,
      name?: string | null,
      template_type?: TemplateType | null,
      metadata?: string | null,
      template_location?: string | null,
      template_image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    documentTemplateId?: string | null,
  } | null,
};

export type ListDocumentsQueryVariables = {
  filter?: ModelDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDocumentsQuery = {
  listDocuments?:  {
    __typename: "ModelDocumentConnection",
    items:  Array< {
      __typename: "Document",
      id: string,
      name: string,
      doc_type?: DocumentType | null,
      is_archived?: boolean | null,
      data?: string | null,
      metadata?: string | null,
      owner?: string | null,
      Template?:  {
        __typename: "Template",
        id: string,
        name?: string | null,
        template_type?: TemplateType | null,
        metadata?: string | null,
        template_location?: string | null,
        template_image?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      documentTemplateId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDocumentsQueryVariables = {
  filter?: ModelDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDocumentsQuery = {
  syncDocuments?:  {
    __typename: "ModelDocumentConnection",
    items:  Array< {
      __typename: "Document",
      id: string,
      name: string,
      doc_type?: DocumentType | null,
      is_archived?: boolean | null,
      data?: string | null,
      metadata?: string | null,
      owner?: string | null,
      Template?:  {
        __typename: "Template",
        id: string,
        name?: string | null,
        template_type?: TemplateType | null,
        metadata?: string | null,
        template_location?: string | null,
        template_image?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      documentTemplateId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ListDocumentsSortedByTimestampQueryVariables = {
  doc_type: DocumentType,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDocumentsSortedByTimestampQuery = {
  listDocumentsSortedByTimestamp?:  {
    __typename: "ModelDocumentConnection",
    items:  Array< {
      __typename: "Document",
      id: string,
      name: string,
      doc_type?: DocumentType | null,
      is_archived?: boolean | null,
      data?: string | null,
      metadata?: string | null,
      owner?: string | null,
      Template?:  {
        __typename: "Template",
        id: string,
        name?: string | null,
        template_type?: TemplateType | null,
        metadata?: string | null,
        template_location?: string | null,
        template_image?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      documentTemplateId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateCommunicationSubscriptionVariables = {
  filter?: ModelSubscriptionCommunicationFilterInput | null,
  owner?: string | null,
};

export type OnCreateCommunicationSubscription = {
  onCreateCommunication?:  {
    __typename: "Communication",
    id: string,
    communication_type?: CommunicationType | null,
    Document?:  {
      __typename: "Document",
      id: string,
      name: string,
      doc_type?: DocumentType | null,
      is_archived?: boolean | null,
      data?: string | null,
      metadata?: string | null,
      owner?: string | null,
      Template?:  {
        __typename: "Template",
        id: string,
        name?: string | null,
        template_type?: TemplateType | null,
        metadata?: string | null,
        template_location?: string | null,
        template_image?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      documentTemplateId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    communicationDocumentId?: string | null,
  } | null,
};

export type OnCreateTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateFilterInput | null,
};

export type OnCreateTemplateSubscription = {
  onCreateTemplate?:  {
    __typename: "Template",
    id: string,
    name?: string | null,
    template_type?: TemplateType | null,
    metadata?: string | null,
    template_location?: string | null,
    template_image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateFilterInput | null,
};

export type OnUpdateTemplateSubscription = {
  onUpdateTemplate?:  {
    __typename: "Template",
    id: string,
    name?: string | null,
    template_type?: TemplateType | null,
    metadata?: string | null,
    template_location?: string | null,
    template_image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionTemplateFilterInput | null,
};

export type OnDeleteTemplateSubscription = {
  onDeleteTemplate?:  {
    __typename: "Template",
    id: string,
    name?: string | null,
    template_type?: TemplateType | null,
    metadata?: string | null,
    template_location?: string | null,
    template_image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionDocumentFilterInput | null,
  owner?: string | null,
};

export type OnCreateDocumentSubscription = {
  onCreateDocument?:  {
    __typename: "Document",
    id: string,
    name: string,
    doc_type?: DocumentType | null,
    is_archived?: boolean | null,
    data?: string | null,
    metadata?: string | null,
    owner?: string | null,
    Template?:  {
      __typename: "Template",
      id: string,
      name?: string | null,
      template_type?: TemplateType | null,
      metadata?: string | null,
      template_location?: string | null,
      template_image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    documentTemplateId?: string | null,
  } | null,
};

export type OnUpdateDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionDocumentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateDocumentSubscription = {
  onUpdateDocument?:  {
    __typename: "Document",
    id: string,
    name: string,
    doc_type?: DocumentType | null,
    is_archived?: boolean | null,
    data?: string | null,
    metadata?: string | null,
    owner?: string | null,
    Template?:  {
      __typename: "Template",
      id: string,
      name?: string | null,
      template_type?: TemplateType | null,
      metadata?: string | null,
      template_location?: string | null,
      template_image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    documentTemplateId?: string | null,
  } | null,
};

export type OnDeleteDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionDocumentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteDocumentSubscription = {
  onDeleteDocument?:  {
    __typename: "Document",
    id: string,
    name: string,
    doc_type?: DocumentType | null,
    is_archived?: boolean | null,
    data?: string | null,
    metadata?: string | null,
    owner?: string | null,
    Template?:  {
      __typename: "Template",
      id: string,
      name?: string | null,
      template_type?: TemplateType | null,
      metadata?: string | null,
      template_location?: string | null,
      template_image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    documentTemplateId?: string | null,
  } | null,
};
