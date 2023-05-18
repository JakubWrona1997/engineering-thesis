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
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Template } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TemplateUpdateForm(props) {
  const {
    id: idProp,
    template,
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
    template_type: undefined,
    metadata: "",
    template_location: "",
    template_image: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [template_type, setTemplate_type] = React.useState(
    initialValues.template_type
  );
  const [metadata, setMetadata] = React.useState(initialValues.metadata);
  const [template_location, setTemplate_location] = React.useState(
    initialValues.template_location
  );
  const [template_image, setTemplate_image] = React.useState(
    initialValues.template_image
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = templateRecord
      ? { ...initialValues, ...templateRecord }
      : initialValues;
    setName(cleanValues.name);
    setTemplate_type(cleanValues.template_type);
    setMetadata(
      typeof cleanValues.metadata === "string"
        ? cleanValues.metadata
        : JSON.stringify(cleanValues.metadata)
    );
    setTemplate_location(cleanValues.template_location);
    setTemplate_image(cleanValues.template_image);
    setErrors({});
  };
  const [templateRecord, setTemplateRecord] = React.useState(template);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Template, idProp)
        : template;
      setTemplateRecord(record);
    };
    queryData();
  }, [idProp, template]);
  React.useEffect(resetStateValues, [templateRecord]);
  const validations = {
    name: [],
    template_type: [],
    metadata: [{ type: "JSON" }],
    template_location: [{ type: "URL" }],
    template_image: [],
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
          name,
          template_type,
          metadata,
          template_location,
          template_image,
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
            Template.copyOf(templateRecord, (updated) => {
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
      {...getOverrideProps(overrides, "TemplateUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              template_type,
              metadata,
              template_location,
              template_image,
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
        label="Template type"
        placeholder="Please select an option"
        isDisabled={false}
        value={template_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              template_type: value,
              metadata,
              template_location,
              template_image,
            };
            const result = onChange(modelFields);
            value = result?.template_type ?? value;
          }
          if (errors.template_type?.hasError) {
            runValidationTasks("template_type", value);
          }
          setTemplate_type(value);
        }}
        onBlur={() => runValidationTasks("template_type", template_type)}
        errorMessage={errors.template_type?.errorMessage}
        hasError={errors.template_type?.hasError}
        {...getOverrideProps(overrides, "template_type")}
      >
        <option
          children="Business"
          value="BUSINESS"
          {...getOverrideProps(overrides, "template_typeoption0")}
        ></option>
        <option
          children="Marketing"
          value="MARKETING"
          {...getOverrideProps(overrides, "template_typeoption1")}
        ></option>
        <option
          children="Invoice"
          value="INVOICE"
          {...getOverrideProps(overrides, "template_typeoption2")}
        ></option>
        <option
          children="E marketing"
          value="E_MARKETING"
          {...getOverrideProps(overrides, "template_typeoption3")}
        ></option>
      </SelectField>
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
              template_type,
              metadata: value,
              template_location,
              template_image,
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
        label="Template location"
        isRequired={false}
        isReadOnly={false}
        value={template_location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              template_type,
              metadata,
              template_location: value,
              template_image,
            };
            const result = onChange(modelFields);
            value = result?.template_location ?? value;
          }
          if (errors.template_location?.hasError) {
            runValidationTasks("template_location", value);
          }
          setTemplate_location(value);
        }}
        onBlur={() =>
          runValidationTasks("template_location", template_location)
        }
        errorMessage={errors.template_location?.errorMessage}
        hasError={errors.template_location?.hasError}
        {...getOverrideProps(overrides, "template_location")}
      ></TextField>
      <TextField
        label="Template image"
        isRequired={false}
        isReadOnly={false}
        value={template_image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              template_type,
              metadata,
              template_location,
              template_image: value,
            };
            const result = onChange(modelFields);
            value = result?.template_image ?? value;
          }
          if (errors.template_image?.hasError) {
            runValidationTasks("template_image", value);
          }
          setTemplate_image(value);
        }}
        onBlur={() => runValidationTasks("template_image", template_image)}
        errorMessage={errors.template_image?.errorMessage}
        hasError={errors.template_image?.hasError}
        {...getOverrideProps(overrides, "template_image")}
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
          isDisabled={!(idProp || template)}
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
              !(idProp || template) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
