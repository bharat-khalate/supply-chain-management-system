'use client'
import { TInputFieldProps } from "@/types";
import { InputLabelClass, InputFieldClass, InputFieldErrorMessageClass } from "@/utils/tailwindCssClassConstant";
import { shouldShowError } from "@/utils/validations";
import { FieldError, Input, Label, TextField } from "@heroui/react";
export default function InputField<T,>({ formik, fieldConstant }: TInputFieldProps<T>): React.ReactNode {
    const isInvalid = shouldShowError<T>(formik)
    return (
        <TextField
            isRequired
            isInvalid={isInvalid(fieldConstant.key)}
            className="space-y-2 basis-1/2"
        >
            <Label className={InputLabelClass}>{fieldConstant.label}</Label>
            <Input
                name={fieldConstant.key as string}
                placeholder={`Enter ${fieldConstant.label}`}
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