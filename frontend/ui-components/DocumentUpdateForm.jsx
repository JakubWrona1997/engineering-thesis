/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Document } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DocumentUpdateForm(props) {
  const {
    id: idProp,
    document,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    doc_type: undefined,
    is_archived: false,
    data: "",
    metadata: "",
    owner: "",
    createdAt: "",
    updatedAt: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [doc_type, setDoc_type] = React.useState(initialValues.doc_type);
  const [is_archived, setIs_archived] = React.useState(
    initialValues.is_archived
  );
  const [data, setData] = React.useState(initialValues.data);
  const [metadata, setMetadata] = React.useState(initialValues.metadata);
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = documentRecord
      ? { ...initialValues, ...documentRecord }
      : initialValues;
    setName(cleanValues.name);
    setDoc_type(cleanValues.doc_type);
    setIs_archived(cleanValues.is_archived);
    setData(
      typeof cleanValues.data === "string"
        ? cleanValues.data
        : JSON.stringify(cleanValues.data)
    );
    setMetadata(
      typeof cleanValues.metadata === "string"
        ? cleanValues.metadata
        : JSON.stringify(cleanValues.metadata)
    );
    setOwner(cleanValues.owner);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [documentRecord, setDocumentRecord] = React.useState(document);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Document, idProp)
        : document;
      setDocumentRecord(record);
    };
    queryData();
  }, [idProp, document]);
  React.useEffect(resetStateValues, [documentRecord]);
  const validations = {
    name: [{ type: "Required" }],
    doc_type: [],
    is_archived: [],
    data: [{ type: "JSON" }],
    metadata: [{ type: "JSON" }],
    owner: [],
    createdAt: [{ type: "Required" }],
    updatedAt: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          doc_type,
          is_archived,
          data,
          metadata,
          owner,
          createdAt,
          updatedAt,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Document.copyOf(documentRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DocumentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              doc_type,
              is_archived,
              data,
              metadata,
              owner,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <SelectField
        label="Doc type"
        placeholder="Please select an option"
        isDisabled={false}
        value={doc_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              doc_type: value,
              is_archived,
              data,
              metadata,
              owner,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.doc_type ?? value;
          }
          if (errors.doc_type?.hasError) {
            runValidationTasks("doc_type", value);
          }
          setDoc_type(value);
        }}
        onBlur={() => runValidationTasks("doc_type", doc_type)}
        errorMessage={errors.doc_type?.errorMessage}
        hasError={errors.doc_type?.hasError}
        {...getOverrideProps(overrides, "doc_type")}
      >
        <option
          children="Pdf"
          value="PDF"
          {...getOverrideProps(overrides, "doc_typeoption0")}
        ></option>
        <option
          children="Docx"
          value="DOCX"
          {...getOverrideProps(overrides, "doc_typeoption1")}
        ></option>
        <option
          children="Xls"
          value="XLS"
          {...getOverrideProps(overrides, "doc_typeoption2")}
        ></option>
      </SelectField>
      <SwitchField
        label="Is archived"
        defaultChecked={false}
        isDisabled={false}
        isChecked={is_archived}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              doc_type,
              is_archived: value,
              data,
              metadata,
              owner,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.is_archived ?? value;
          }
          if (errors.is_archived?.hasError) {
            runValidationTasks("is_archived", value);
          }
          setIs_archived(value);
        }}
        onBlur={() => runValidationTasks("is_archived", is_archived)}
        errorMessage={errors.is_archived?.errorMessage}
        hasError={errors.is_archived?.hasError}
        {...getOverrideProps(overrides, "is_archived")}
      ></SwitchField>
      <TextAreaField
        label="Data"
        isRequired={false}
        isReadOnly={false}
        value={data}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              doc_type,
              is_archived,
              data: value,
              metadata,
              owner,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.data ?? value;
          }
          if (errors.data?.hasError) {
            runValidationTasks("data", value);
          }
          setData(value);
        }}
        onBlur={() => runValidationTasks("data", data)}
        errorMessage={errors.data?.errorMessage}
        hasError={errors.data?.hasError}
        {...getOverrideProps(overrides, "data")}
      ></TextAreaField>
      <TextAreaField
        label="Metadata"
        isRequired={false}
        isReadOnly={false}
        value={metadata}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              doc_type,
              is_archived,
              data,
              metadata: value,
              owner,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.metadata ?? value;
          }
          if (errors.metadata?.hasError) {
            runValidationTasks("metadata", value);
          }
          setMetadata(value);
        }}
        onBlur={() => runValidationTasks("metadata", metadata)}
        errorMessage={errors.metadata?.errorMessage}
        hasError={errors.metadata?.hasError}
        {...getOverrideProps(overrides, "metadata")}
      ></TextAreaField>
      <TextField
        label="Owner"
        isRequired={false}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              doc_type,
              is_archived,
              data,
              metadata,
              owner: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              doc_type,
              is_archived,
              data,
              metadata,
              owner,
              createdAt: value,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={updatedAt && convertToLocal(new Date(updatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              doc_type,
              is_archived,
              data,
              metadata,
              owner,
              createdAt,
              updatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || document)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || document) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
