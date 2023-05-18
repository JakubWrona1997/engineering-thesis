/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCommunication = /* GraphQL */ `
  subscription OnCreateCommunication(
    $filter: ModelSubscriptionCommunicationFilterInput
    $owner: String
  ) {
    onCreateCommunication(filter: $filter, owner: $owner) {
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
export const onCreateTemplate = /* GraphQL */ `
  subscription OnCreateTemplate($filter: ModelSubscriptionTemplateFilterInput) {
    onCreateTemplate(filter: $filter) {
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
export const onUpdateTemplate = /* GraphQL */ `
  subscription OnUpdateTemplate($filter: ModelSubscriptionTemplateFilterInput) {
    onUpdateTemplate(filter: $filter) {
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
export const onDeleteTemplate = /* GraphQL */ `
  subscription OnDeleteTemplate($filter: ModelSubscriptionTemplateFilterInput) {
    onDeleteTemplate(filter: $filter) {
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
export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument(
    $filter: ModelSubscriptionDocumentFilterInput
    $owner: String
  ) {
    onCreateDocument(filter: $filter, owner: $owner) {
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
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument(
    $filter: ModelSubscriptionDocumentFilterInput
    $owner: String
  ) {
    onUpdateDocument(filter: $filter, owner: $owner) {
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
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument(
    $filter: ModelSubscriptionDocumentFilterInput
    $owner: String
  ) {
    onDeleteDocument(filter: $filter, owner: $owner) {
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
