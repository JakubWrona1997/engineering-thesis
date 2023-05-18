/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CommunicationCreateFormInputValues = {
    communication_type?: string;
    owner?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type CommunicationCreateFormValidationValues = {
    communication_type?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommunicationCreateFormOverridesProps = {
    CommunicationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    communication_type?: PrimitiveOverrideProps<SelectFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CommunicationCreateFormProps = React.PropsWithChildren<{
    overrides?: CommunicationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CommunicationCreateFormInputValues) => CommunicationCreateFormInputValues;
    onSuccess?: (fields: CommunicationCreateFormInputValues) => void;
    onError?: (fields: CommunicationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommunicationCreateFormInputValues) => CommunicationCreateFormInputValues;
    onValidate?: CommunicationCreateFormValidationValues;
} & React.CSSProperties>;
export default function CommunicationCreateForm(props: CommunicationCreateFormProps): React.ReactElement;
