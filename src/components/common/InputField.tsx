'use client'
import { BUYER_TYPES } from "@/configs/forms";
import { TInputFieldProps } from "@/types";
import { TAppRadioFieldProps, TAppSelectInputFieldProps, TAppTextFieldProps, TBuyerType } from "@/types/components";
import { InputFieldClass, InputFieldErrorMessageClass, InputLabelClass } from "@/utils/tailwindCssClassConstant";
import { shouldShowError } from "@/utils/validations";
import type { ButtonProps } from "@heroui/react";
import { Button, FieldError, Input, Label, ListBox, Radio, RadioGroup, Select, TextField } from "@heroui/react";
import { useFormikContext } from "formik";
import React from "react";
export default function InputField<T,>({ formik, fieldConstant }: TInputFieldProps<T>): React.ReactNode {
    const isInvalid = shouldShowError<T>(formik)
    return (
        <TextField
            isRequired
            isInvalid={isInvalid(fieldConstant.key)}
            className="space-y-2 basis-1/2"
        >
            {fieldConstant.label && (
                <Label className={InputLabelClass}>{fieldConstant.label}</Label>
            )}
            <Input
                name={fieldConstant.key as string}
                placeholder={fieldConstant.placeHolder ? fieldConstant.placeHolder : `Enter ${fieldConstant.label}`}
                className={InputFieldClass}
                value={formik.values[fieldConstant.key] as string}
                onChange={(e) =>
                    formik.setFieldValue(
                        fieldConstant.key as string,
                        e.target.value.trimStart(),
                    )
                }
                onBlur={formik.handleBlur}
                aria-label="Name"
            />
            {isInvalid(fieldConstant.key) && (
                <FieldError className={InputFieldErrorMessageClass}>
                    {formik.errors[fieldConstant.key] as string}
                </FieldError>
            )}
        </TextField>
    )
}
export function TextInputField<T,>({ fieldConstant, inputProps, textFieldProps, labelProps, fieldErrorProps }: TAppTextFieldProps<T>) {
    const formik = useFormikContext<T>();
    const showError = shouldShowError<T>(formik)
    return (
        <TextField
            {...textFieldProps}
            isRequired
            isInvalid={showError(fieldConstant.key)}
            className={`space-y-2 basis-1/2 ${textFieldProps?.className && textFieldProps.className}`}
        >
            {fieldConstant.label && (
                <Label
                    {...labelProps}
                    className={`${InputLabelClass} ${labelProps?.className && labelProps.className}`}
                >
                    {fieldConstant.label}
                </Label>
            )}
            <Input
                {...inputProps}
                name={fieldConstant.key as string}
                placeholder={fieldConstant.placeHolder ? fieldConstant.placeHolder : `Enter ${fieldConstant.label}`}
                className={`${InputFieldClass} ${inputProps?.className && inputProps.className}`}
                value={formik.values[fieldConstant.key] as string}
                onChange={(e) => {
                    formik.setFieldValue(
                        fieldConstant.key as string,
                        e.target.value.trimStart(),
                    )
                    inputProps?.onChange?.(e);
                }
                }
                onBlur={(e) => {
                    formik.handleBlur(e);
                    inputProps?.onBlur?.(e);
                }}
                aria-label="Name"
            />
            {showError(fieldConstant.key) && (
                <FieldError
                    {...fieldErrorProps}
                    className={`${InputFieldErrorMessageClass} ${fieldErrorProps?.className && fieldErrorProps.className}`}
                >
                    {formik.errors[fieldConstant.key] as string}
                </FieldError>
            )}
        </TextField>
    )
}
export function SaveFormButton({ children, ...props }: ButtonProps) {
    const formik = useFormikContext();
    return (
        <Button
            {...props}
            type="submit"
            isDisabled={formik.isSubmitting || !formik.isValid}
        >
            {formik.isSubmitting ? "...Submitting" : children}
        </Button>
    )
}
export function ResetFormButton({ children, ...props }: ButtonProps) {
    const formik = useFormikContext();
    return (
        <Button
            {...props}
            onPress={() => formik.resetForm()}
            isDisabled={!formik.dirty}
        >
            {children}
        </Button>
    )
}
export function RadioInputField<T, K extends keyof T>({ fieldConstants, options, radioGroupProps, radioProps }: TAppRadioFieldProps<T, K>) {
    const formik = useFormikContext<T>();
    return (
        <RadioGroup
            {...radioGroupProps}
            className={`flex flex-col sm:flex-row gap-2 w-full ${radioGroupProps?.className && radioGroupProps.className}`}
            aria-label={fieldConstants.label}
        >
            {
                options.map((item) => {
                    return item.render ? item.render({ isSelected: formik.values[fieldConstants.key] == item.value, option: item, onSelect: () => { formik.setFieldValue(fieldConstants.key as string, item.value) } }) :
                        <Radio value={item.value as string}>
                            <Radio.Control>
                                <Radio.Indicator />
                            </Radio.Control>
                            <Radio.Content>
                                <Label>{item.label}</Label>
                            </Radio.Content>
                        </Radio>
                })
            }
        </RadioGroup>
    )
}
export function AppSelectInputField<T, O extends TBuyerType, M extends "single" | "multiple" = "single">({ fieldConstant: fieldConfig, options, ...props }: TAppSelectInputFieldProps<T, O, M>) {
    const formik = useFormikContext<T>();
    const showError = shouldShowError<T>(formik);
    return (
        <Select
            {...props}
            isRequired
            className={` w-full space-y-2 basis-1/3 `}
            value={formik.values[fieldConfig.key] as string}
            name={fieldConfig.key as string}
            placeholder="Select one"
            onChange={(key) => {
                formik.setFieldValue(fieldConfig.key as string, String(key));
                formik.setFieldTouched(fieldConfig.key as string, true);
            }}
            aria-label={fieldConfig.label ?? "Type"}
            onOpenChange={(isOpen) => {
                if (!isOpen) {
                    formik.setFieldTouched(fieldConfig.key as string, true);
                }
            }}
            isInvalid={showError(fieldConfig.key)}
        >
            <Label {...props.labelProps} className={`${InputLabelClass} ${props.labelProps?.className}`}>
                {fieldConfig.label}
            </Label>
            <Select.Trigger {...props.selectTriggerProps} className={`${InputFieldClass} ${props.selectTriggerProps?.className}`}>
                <Select.Value {...props.selectValueProps} className={`placeholder:text-gray-400 text-gray-700 ${props.selectValueProps?.className}`} />
                <Select.Indicator {...props.selectIndicatorProps} className={`ml-2 text-gray-400 ${props.selectIndicatorProps?.className}`} />
            </Select.Trigger>
            <Select.Popover {...props.selectPopOverProps} className={`min-w-[var(--trigger-width)] ${props.selectPopOverProps?.className}`}>
                <ListBox {...props.listBoxProps} className={`bg-white border rounded-md shadow-lg p-1 ${props.listBoxProps?.className}`}>
                    {BUYER_TYPES.map((type) => (
                        <ListBox.Item
                            {...props.listBoxItemProps}
                            key={type.id}
                            id={type.id}
                            textValue={type.name}
                            className={`px-2 py-1.5 text-sm rounded-sm cursor-pointer outline-none hover:bg-slate-100 focus:bg-slate-100 ${props.listBoxItemProps?.className}`}
                        >
                            {type.name}
                            <ListBox.ItemIndicator key={type.id} />
                        </ListBox.Item>
                    ))}
                </ListBox>
            </Select.Popover>
            {showError(fieldConfig.key) && (
                <FieldError className={InputFieldErrorMessageClass}>
                    {formik.errors[fieldConfig.key] as string}
                </FieldError>
            )}
        </Select>
    )
}