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
export default function DocumentCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    doc_type: undefined,
    is_archived: false,
    data: "",
    name: "",
    metadata: "",
  };
  const [doc_type, setDoc_type] = React.useState(initialValues.doc_type);
  const [is_archived, setIs_archived] = React.useState(
    initialValues.is_archived
  );
  const [data, setData] = React.useState(initialValues.data);
  const [name, setName] = React.useState(initialValues.name);
  const [metadata, setMetadata] = React.useState(initialValues.metadata);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDoc_type(initialValues.doc_type);
    setIs_archived(initialValues.is_archived);
    setData(initialValues.data);
    setName(initialValues.name);
    setMetadata(initialValues.metadata);
    setErrors({});
  };
  const validations = {
    doc_type: [],
    is_archived: [],
    data: [{ type: "JSON" }],
    name: [{ type: "Required" }],
    metadata: [{ type: "JSON" }],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          doc_type,
          is_archived,
          data,
          name,
          metadata,
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
          await DataStore.save(new Document(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DocumentCreateForm")}
      {...rest}
    >
      <SelectField
        label="Doc type"
        placeholder="Please select an option"
        isDisabled={false}
        value={doc_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              doc_type: value,
              is_archived,
              data,
              name,
              metadata,
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
              doc_type,
              is_archived: value,
              data,
              name,
              metadata,
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
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              doc_type,
              is_archived,
              data: value,
              name,
              metadata,
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
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              doc_type,
              is_archived,
              data,
              name: value,
              metadata,
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
      <TextAreaField
        label="Metadata"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              doc_type,
              is_archived,
              data,
              name,
              metadata: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
