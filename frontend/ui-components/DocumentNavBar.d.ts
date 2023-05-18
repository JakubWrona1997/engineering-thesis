/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, SearchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DocumentNavBarOverridesProps = {
    DocumentNavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "Star 1"?: PrimitiveOverrideProps<IconProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    "Frame 32136502755"?: PrimitiveOverrideProps<FlexProps>;
    Documents?: PrimitiveOverrideProps<TextProps>;
    Templates?: PrimitiveOverrideProps<TextProps>;
    Communications?: PrimitiveOverrideProps<TextProps>;
    "Frame 32136502760"?: PrimitiveOverrideProps<FlexProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Welcome?: PrimitiveOverrideProps<TextProps>;
    username?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DocumentNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    username?: String;
} & {
    overrides?: DocumentNavBarOverridesProps | undefined | null;
}>;
export default function DocumentNavBar(props: DocumentNavBarProps): React.ReactElement;
