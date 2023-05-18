/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCommunication = /* GraphQL */ `
  mutation CreateCommunication(
    $input: CreateCommunicationInput!
    $condition: ModelCommunicationConditionInput
  ) {
    createCommunication(input: $input, condition: $condition) {
      id
      communication_type
      Document {
        id
        name
        doc_type
        is_archived
        data
        metadata
        owner
        Template {
          id
          name
          template_type
          metadata
          template_location
          template_image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        documentTemplateId
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      communicationDocumentId
    }
  }
`;
export const createTemplate = /* GraphQL */ `
  mutation CreateTemplate(
    $input: CreateTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    createTemplate(input: $input, condition: $condition) {
      id
      name
      template_type
      metadata
      template_location
      template_image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTemplate = /* GraphQL */ `
  mutation UpdateTemplate(
    $input: UpdateTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    updateTemplate(input: $input, condition: $condition) {
      id
      name
      template_type
      metadata
      template_location
      template_image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTemplate = /* GraphQL */ `
  mutation DeleteTemplate(
    $input: DeleteTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    deleteTemplate(input: $input, condition: $condition) {
      id
      name
      template_type
      metadata
      template_location
      template_image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createDocument = /* GraphQL */ `
  mutation CreateDocument(
    $input: CreateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    createDocument(input: $input, condition: $condition) {
      id
      name
      doc_type
      is_archived
      data
      metadata
      owner
      Template {
        id
        name
        template_type
        metadata
        template_location
        template_image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      documentTemplateId
    }
  }
`;
export const updateDocument = /* GraphQL */ `
  mutation UpdateDocument(
    $input: UpdateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    updateDocument(input: $input, condition: $condition) {
      id
      name
      doc_type
      is_archived
      data
      metadata
      owner
      Template {
        id
        name
        template_type
        metadata
        template_location
        template_image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      documentTemplateId
    }
  }
`;
export const deleteDocument = /* GraphQL */ `
  mutation DeleteDocument(
    $input: DeleteDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    deleteDocument(input: $input, condition: $condition) {
      id
      name
      doc_type
      is_archived
      data
      metadata
      owner
      Template {
        id
        name
        template_type
        metadata
        template_location
        template_image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      documentTemplateId
    }
  }
`;
export const createDocumentWithTemplate = /* GraphQL */ `
  mutation CreateDocumentWithTemplate(
    $name: String!
    $doc_type: DocumentType
    $is_archived: Boolean
    $data: AWSJSON
    $metadata: AWSJSON
    $document_template_id: String
  ) {
    createDocumentWithTemplate(
      name: $name
      doc_type: $doc_type
      is_archived: $is_archived
      data: $data
      metadata: $metadata
      document_template_id: $document_template_id
    ) {
      id
      name
      doc_type
      is_archived
      data
      metadata
      owner
      Template {
        id
        name
        template_type
        metadata
        template_location
        template_image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      documentTemplateId
    }
  }
`;
