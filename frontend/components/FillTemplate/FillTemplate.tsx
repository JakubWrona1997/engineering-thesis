import React, { useState } from "react";
import TemplatePreview from "../../ui-components/TemplatePreview";
import InputDocumentField from "../../ui-components/InputDocumentField";
import styles from "./FillTemplate.module.css";
import { Button, TextField } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { API, graphqlOperation } from "aws-amplify";
import { createDocument, createDocumentWithTemplate } from "../../graphql/mutations";

interface Template {
  id: string;
  name: string;
  template_image: string;
  metadata: Record<string, string>;
}

interface DocumentProps {
  [key: string]: string;
}

interface FillTemplateProps {
  template: Template | null;
  onBack: () => void;
  onFinish: () => void;
}

const FillTemplate: React.FC<FillTemplateProps> = ({
  template,
  onBack,
  onFinish,
}) => {
  if (!template) {
    return <div>No template selected</div>;
  }
  const parsedData = JSON.parse(template.metadata.toString());

  const keyValuePairs = Object.entries(parsedData).map(([key, value]) => ({
    key,
    value,
  }));

  type DocumentData = {
    [key in keyof typeof template.metadata]: string;
  };

  const [documentData, setDocumentData] = useState<DocumentData>(
    keyValuePairs.reduce((acc, { key }) => {
      acc[key] = "";
      return acc;
    }, {} as DocumentData)
  );

  const handleInputChange = (field: keyof DocumentProps, value: string) => {
    setDocumentData((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleCreateDocument = async () => {
    const { documentName, ...restData } = documentData;
    const newDocument = {
      name: documentName,
      doc_type: "PDF",
      is_archived: false,
      data: JSON.stringify(restData),
      metadata: JSON.stringify(template.metadata),
      documentTemplateId: template.id,
    };

    const createDocumentWithTemplateReturnId = `
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
      }
    }
  `;

    try {
      const result = await API.graphql(
        graphqlOperation(createDocumentWithTemplateReturnId, { name: documentName, doc_type: newDocument.doc_type, is_archived: newDocument.is_archived, data: newDocument.data, metadata: newDocument.metadata, document_template_id: template.id })
      );
      onFinish();
      console.log("Document created:", result);
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.fillTemplateContainer}>
        <TemplatePreview
          imageUrl={template.template_image}
          className={styles.template}
        />
        <div className={styles.inputFieldsContainer}>
          <InputDocumentField
            overrides={{
              TextField: {
                label: "Document name",
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange("documentName", e.target.value),
              },
            }}
          />
          {keyValuePairs.map(({ key }) => (
            <InputDocumentField
              key={key}
              title={key}
              overrides={{
                TextField: {
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(
                      key as keyof DocumentProps,
                      e.target.value
                    ),
                },
              }}
            />
          ))}
          <Button variation="link" onClick={handleCreateDocument}>
            Create document
          </Button>
          <Button onClick={() => onBack()}>Back</Button>
        </div>
      </div>
    </div>
  );
};

export default FillTemplate;
