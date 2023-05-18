/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DocumentHeroLayout2OverridesProps = {
    DocumentHeroLayout2?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    "Smart Document Sender"?: PrimitiveOverrideProps<TextProps>;
    "To fit your needs"?: PrimitiveOverrideProps<TextProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    "Create your document"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DocumentHeroLayout2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DocumentHeroLayout2OverridesProps | undefined | null;
}>;
export default function DocumentHeroLayout2(props: DocumentHeroLayout2Props): React.ReactElement;
