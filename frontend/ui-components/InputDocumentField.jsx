/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { TextField, View } from "@aws-amplify/ui-react";
export default function InputDocumentField(props) {
  const { data, title, overrides, ...rest } = props;
  return (
    <View
      width="321px"
      height="85px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "InputDocumentField")}
      {...rest}
    >
      <TextField
        width="300px"
        height="unset"
        position="absolute"
        top="4px"
        left="11px"
        label={title}
        placeholder={data}
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
    </View>
  );
}
