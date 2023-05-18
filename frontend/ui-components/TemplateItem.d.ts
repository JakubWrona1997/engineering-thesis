/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TemplateItemOverridesProps = {
    TemplateItem?: PrimitiveOverrideProps<ViewProps>;
    "Frame 420"?: PrimitiveOverrideProps<FlexProps>;
    "Template_Img 1"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 421"?: PrimitiveOverrideProps<FlexProps>;
    Template?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TemplateItemProps = React.PropsWithChildren<Partial<ViewProps> & {
    name?: String;
    url?: String;
} & {
    overrides?: TemplateItemOverridesProps | undefined | null;
}>;
export default function TemplateItem(props: TemplateItemProps): React.ReactElement;
