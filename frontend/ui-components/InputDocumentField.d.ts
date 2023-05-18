/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InputDocumentFieldOverridesProps = {
    InputDocumentField?: PrimitiveOverrideProps<ViewProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InputDocumentFieldProps = React.PropsWithChildren<Partial<ViewProps> & {
    data?: String;
    title?: String;
} & {
    overrides?: InputDocumentFieldOverridesProps | undefined | null;
}>;
export default function InputDocumentField(props: InputDocumentFieldProps): React.ReactElement;
