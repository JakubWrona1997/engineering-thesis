/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCommunication = /* GraphQL */ `
  query GetCommunication($id: ID!) {
    getCommunication(id: $id) {
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
export const listCommunications = /* GraphQL */ `
  query ListCommunications(
    $filter: ModelCommunicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCommunications = /* GraphQL */ `
  query SyncCommunications(
    $filter: ModelCommunicationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommunications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listCommunicationsSortedByTimestamp = /* GraphQL */ `
  query ListCommunicationsSortedByTimestamp(
    $communication_type: CommunicationType!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommunicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunicationsSortedByTimestamp(
      communication_type: $communication_type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTemplate = /* GraphQL */ `
  query GetTemplate($id: ID!) {
    getTemplate(id: $id) {
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
export const listTemplates = /* GraphQL */ `
  query ListTemplates(
    $filter: ModelTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTemplates = /* GraphQL */ `
  query SyncTemplates(
    $filter: ModelTemplateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTemplates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
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
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDocuments = /* GraphQL */ `
  query SyncDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listDocumentsSortedByTimestamp = /* GraphQL */ `
  query ListDocumentsSortedByTimestamp(
    $doc_type: DocumentType!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocumentsSortedByTimestamp(
      doc_type: $doc_type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
