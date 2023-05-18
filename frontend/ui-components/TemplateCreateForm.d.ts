/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TemplateCreateFormInputValues = {
    name?: string;
    template_type?: string;
    metadata?: string;
    template_location?: string;
    template_image?: string;
};
export declare type TemplateCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    template_type?: ValidationFunction<string>;
    metadata?: ValidationFunction<string>;
    template_location?: ValidationFunction<string>;
    template_image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TemplateCreateFormOverridesProps = {
    TemplateCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    template_type?: PrimitiveOverrideProps<SelectFieldProps>;
    metadata?: PrimitiveOverrideProps<TextAreaFieldProps>;
    template_location?: PrimitiveOverrideProps<TextFieldProps>;
    template_image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TemplateCreateFormProps = React.PropsWithChildren<{
    overrides?: TemplateCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TemplateCreateFormInputValues) => TemplateCreateFormInputValues;
    onSuccess?: (fields: TemplateCreateFormInputValues) => void;
    onError?: (fields: TemplateCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TemplateCreateFormInputValues) => TemplateCreateFormInputValues;
    onValidate?: TemplateCreateFormValidationValues;
} & React.CSSProperties>;
export default function TemplateCreateForm(props: TemplateCreateFormProps): React.ReactElement;
