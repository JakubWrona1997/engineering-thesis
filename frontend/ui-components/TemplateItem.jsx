/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function TemplateItem(props) {
  const { name, url, overrides, ...rest } = props;
  return (
    <View
      width="258px"
      height="443px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="5px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,0.2)"
      {...getOverrideProps(overrides, "TemplateItem")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="calc(50% - 196px - 25.5px)"
        left="calc(50% - 124.5px - 0px)"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 420")}
      >
        <Image
          width="229px"
          height="372px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={url}
          {...getOverrideProps(overrides, "Template_Img 1")}
        ></Image>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="calc(50% - 22px - -188.5px)"
        left="calc(50% - 43.5px - 0.5px)"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 421")}
      >
        <Text
          fontFamily="Gurajada"
          fontSize="24px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.09px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={name}
          {...getOverrideProps(overrides, "Template")}
        ></Text>
      </Flex>
    </View>
  );
}
