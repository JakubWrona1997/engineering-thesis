import json
import os
import requests
from requests_aws4auth import AWS4Auth

from boto3 import Session

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
    bucket = os.environ['STORAGE_S3SMARTDOCUMENTSENDERSTORAGE02A47B54_BUCKETNAME']
    api_url = os.environ['API_SMARTDOCUMENTSENDER_GRAPHQLAPIENDPOINTOUTPUT']

    credentials = Session().get_credentials().get_frozen_credentials()
    session = requests.Session()
    session.auth = AWS4Auth(credentials.access_key, credentials.secret_key,
                            'eu-central-1', 'appsync', session_token=credentials.token)

    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    arguments = event.get('arguments', {})

    document_input = {
        "name": arguments.get("name"),
        "doc_type": arguments.get("doc_type"),
        "is_archived": arguments.get("is_archived"),
        "data": arguments.get("data"),
        "metadata": arguments.get("metadata"),
        "document_template_id": arguments.get("document_template_id")
    }

    result = create_document(api_url, headers, document_input, session)

    data = result.get("data")

    document = result.get("data").get("createDocument")
    print(data)
    print(document)

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': document
    }


def create_document(api_url, headers, document_input, session, condition=None):

    first_query = f'''
    mutation CreateDocument {{
        createDocument(input: {{name: "{document_input["name"]}", doc_type: {document_input["doc_type"]}, is_archived: {str(document_input["is_archived"]).lower()}, documentTemplateId: "{document_input["document_template_id"]}"
        }}) {{
            id
            name
            doc_type
            is_archived
            data
            metadata
            owner
            createdAt
        }}
    }}
    '''
    print(first_query)

    # Send the GraphQL mutation request
    response = session.request(url=api_url, method='POST', headers=headers, json={
                               'query': first_query})
    print(response)
    print(response.json())
    # Check the response
    return response.json()
