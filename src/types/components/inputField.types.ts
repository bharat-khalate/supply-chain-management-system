import { FormikConfig, FormikProps, FormikValues } from "formik";
import { FieldConstant } from "../interface";
import { SelectProps, LabelProps, SelectTriggerProps, SelectPopoverProps, SelectIndicatorProps, SelectValueProps, ListBoxProps, ListBoxItemProps, InputProps, TextFieldProps, FieldErrorProps, RadioGroupProps, RadioProps } from "@heroui/react";
import { FormHTMLAttributes, JSX } from "react";
export type TInputFieldProps<T> = {
    formik: FormikProps<T>;
    fieldConstant: FieldConstant<T>
}
export type TBuyerType = { id: string, name: string }
export type TAppSelectInputFieldProps<T, O extends TBuyerType, M extends "single" | "multiple" = "single"> = {
    fieldConstant: FieldConstant<T>;
    options: TBuyerType[];
    selectProps?: SelectProps<O[], M>;
    labelProps?: LabelProps;
    selectTriggerProps?: SelectTriggerProps;
    selectPopOverProps?: SelectPopoverProps;
    selectIndicatorProps?: SelectIndicatorProps;
    selectValueProps?: SelectValueProps;
    listBoxProps?: ListBoxProps<O[]>;
    listBoxItemProps?: ListBoxItemProps
}
export type TAppTextFieldProps<T> = {
    fieldConstant: FieldConstant<T>,
    inputProps?: InputProps;
    textFieldProps?: TextFieldProps;
    labelProps?: LabelProps;
    fieldErrorProps?: FieldErrorProps
};
export type TRadioOption<T> = {
    value: any;
    label: string;
    icon?: JSX.Element;
    render?: (props: {
        isSelected: boolean;
        option: TRadioOption<T>;
        onSelect: () => void
    }) => React.ReactNode
}
export type TAppRadioFieldProps<T, K extends keyof T> = {
    fieldConstants: FieldConstant<T> & { key: K };
    options: TRadioOption<T>[];
    radioGroupProps?: RadioGroupProps;
    radioProps?: RadioProps
}
export type TAppFormProps<T extends FormikValues> = FormHTMLAttributes<HTMLFormElement> & {
    children: React.ReactNode;
    formikProps: FormikConfig<T>
}