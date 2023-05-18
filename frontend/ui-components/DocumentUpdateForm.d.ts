/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Document } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DocumentUpdateFormInputValues = {
    name?: string;
    doc_type?: string;
    is_archived?: boolean;
    data?: string;
    metadata?: string;
    owner?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type DocumentUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    doc_type?: ValidationFunction<string>;
    is_archived?: ValidationFunction<boolean>;
    data?: ValidationFunction<string>;
    metadata?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DocumentUpdateFormOverridesProps = {
    DocumentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    doc_type?: PrimitiveOverrideProps<SelectFieldProps>;
    is_archived?: PrimitiveOverrideProps<SwitchFieldProps>;
    data?: PrimitiveOverrideProps<TextAreaFieldProps>;
    metadata?: PrimitiveOverrideProps<TextAreaFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DocumentUpdateFormProps = React.PropsWithChildren<{
    overrides?: DocumentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    document?: Document;
    onSubmit?: (fields: DocumentUpdateFormInputValues) => DocumentUpdateFormInputValues;
    onSuccess?: (fields: DocumentUpdateFormInputValues) => void;
    onError?: (fields: DocumentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DocumentUpdateFormInputValues) => DocumentUpdateFormInputValues;
    onValidate?: DocumentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DocumentUpdateForm(props: DocumentUpdateFormProps): React.ReactElement;
