/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function TemplatePreview(props) {
  const { imageUrl, overrides, ...rest } = props;
  return (
    <View
      width="403px"
      height="532px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,0.2)"
      {...getOverrideProps(overrides, "TemplatePreview")}
      {...rest}
    >
      <Image
        width="361px"
        height="511px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 255.5px - 0.5px)"
        left="calc(50% - 180.5px - 3px)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={imageUrl}
        {...getOverrideProps(overrides, "Template_Img 2")}
      ></Image>
    </View>
  );
}
