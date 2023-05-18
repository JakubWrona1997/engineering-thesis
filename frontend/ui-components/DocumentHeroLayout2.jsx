/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function DocumentHeroLayout2(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({
    type: "url",
    url: "/createDocument",
  });
  return (
    <View
      width="1440px"
      height="858px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "DocumentHeroLayout2")}
      {...rest}
    >
      <Image
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="-60px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="137px"
        left="58px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 419")}
      >
        <Text
          fontFamily="Gurajada"
          fontSize="152px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="298.885986328125px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="1041px"
          height="239px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Smart Document Sender"
          {...getOverrideProps(overrides, "Smart Document Sender")}
        ></Text>
        <Text
          fontFamily="Gurajada"
          fontSize="52px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="102.2504653930664px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="261px"
          height="83px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="To fit your needs"
          {...getOverrideProps(overrides, "To fit your needs")}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="flex-end"
        position="absolute"
        bottom="70px"
        right="75px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Text
          fontFamily="Gurajada"
          fontSize="82px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="161.24111938476562px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Create your document"
          {...getOverrideProps(overrides, "Create your document")}
        ></Text>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          backgroundColor="rgba(214,43,156,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Create"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </View>
  );
}
