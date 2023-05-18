import json
import os
from urllib import request

from boto3 import Session
from requests_aws4auth import AWS4Auth

from gql import gql
from gql.client import Client
from gql.transport.requests import RequestsHTTPTransport


create_document_mutation = """
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
"""

def handler(event, context):
  bucked = os.environ['STORAGE_S3SMARTDOCUMENTSENDERSTORAGE02A47B54_BUCKETNAME']
  api_url = os.environ['API_SMARTDOCUMENTSENDER_GRAPHQLAPIENDPOINTOUTPUT']

  session = Session()
  credentials = session.get_credentials()
  aws4auth = AWS4Auth(credentials.access_key, credentials.secret_key, session.region_name, 'appsync', session_token=credentials.token)

  headers = {
        'Content-Type': 'application/json',
     } 
  
  document_input = event['document_input']

  response = create_document(api_url, headers, aws4auth, document_input)

  print('received event:')
  print(event)

  print('received context: ' + response)
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('Hello from your new Amplify Python lambda!')
  }

def create_document(api_url, headers, aws4auth, document_input, condition=None):
    # Construct the query and variables
    query = {
        "query": create_document_mutation,
        "variables": {
            "input": document_input,
            "condition": condition
        }
    }

    # Send the GraphQL mutation request
    response = request.post(api_url, json=query, headers=headers, auth=aws4auth)

    # Check the response
    return response.json()
      
    