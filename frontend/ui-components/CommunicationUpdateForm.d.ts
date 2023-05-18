/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Communication } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CommunicationUpdateFormInputValues = {
    communication_type?: string;
    owner?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type CommunicationUpdateFormValidationValues = {
    communication_type?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommunicationUpdateFormOverridesProps = {
    CommunicationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    communication_type?: PrimitiveOverrideProps<SelectFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CommunicationUpdateFormProps = React.PropsWithChildren<{
    overrides?: CommunicationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    communication?: Communication;
    onSubmit?: (fields: CommunicationUpdateFormInputValues) => CommunicationUpdateFormInputValues;
    onSuccess?: (fields: CommunicationUpdateFormInputValues) => void;
    onError?: (fields: CommunicationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommunicationUpdateFormInputValues) => CommunicationUpdateFormInputValues;
    onValidate?: CommunicationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CommunicationUpdateForm(props: CommunicationUpdateFormProps): React.ReactElement;
