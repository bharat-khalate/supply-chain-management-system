import { GeneralSettingConstant } from "@/utils/constants";
import { shouldShowError } from "@/utils/validations";
import { GeneralInfoSchema } from "@/validations/settings/generalInfoSetting.validation";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { useFormik } from "formik";
import React from "react";
import AppDotLoader from "../../NavigationDotloader";
export interface IGeneralInfoSetting {
    systemEmail: string,
    phone: string,
    websiteVideoUrl: string
}
export default function GeneralInfoSettingForm(): React.ReactNode {
    const initialValues: IGeneralInfoSetting = {
        systemEmail: "",
        phone: "",
        websiteVideoUrl: "",
    }
    const formik = useFormik({
        initialValues,
        validationSchema: GeneralInfoSchema,
        onSubmit: async (_values) => {
            console.log(_values)
        }
    })
    const inputClassName = `flex  w-full rounded-lg border border-gray-200 bg-gray-100 rounded-xs px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm transition-colors focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none data-[invalid=true]:border-red-500 data-[invalid=true]:bg-red-50 data-[invalid=true]:focus:ring-red-500/20 disabled:cursor-not-allowed disabled:opacity-60`;
    const inputErrorMessageClass = "text-[0.8rem] font-medium text-destructive";
    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-6">
            <TextField isRequired isInvalid={shouldShowError(formik, GeneralSettingConstant.systemEmail.key)}>
                <Label className="text-sm font-medium leading-none">{GeneralSettingConstant.systemEmail.label}</Label>
                <Input
                    name={GeneralSettingConstant.systemEmail.key}
                    placeholder="Enter System Email"
                    className={inputClassName}
                    value={formik.values[GeneralSettingConstant.systemEmail.key]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-label={GeneralSettingConstant.systemEmail.label}
                />
                {shouldShowError(formik, GeneralSettingConstant.systemEmail.key) && (
                    <FieldError className={inputErrorMessageClass}>
                        {formik.errors[GeneralSettingConstant.systemEmail.key]}
                    </FieldError>
                )}
            </TextField>
            <TextField isRequired isInvalid={shouldShowError(formik, GeneralSettingConstant.phone.key)}>
                <Label className="text-sm font-medium leading-none">{GeneralSettingConstant.phone.label}</Label>
                <Input
                    name={GeneralSettingConstant.phone.key}
                    placeholder="Enter Phone Number"
                    className={inputClassName}
                    value={formik.values[GeneralSettingConstant.phone.key]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-label={GeneralSettingConstant.phone.label}
                />
                {shouldShowError(formik, GeneralSettingConstant.phone.key) && (
                    <FieldError className={inputErrorMessageClass}>
                        {formik.errors[GeneralSettingConstant.phone.key]}
                    </FieldError>
                )}
            </TextField>

            <TextField isRequired isInvalid={shouldShowError(formik, GeneralSettingConstant.websiteVideoUrl.key)}>
                <Label className="text-sm font-medium leading-none">{GeneralSettingConstant.websiteVideoUrl.label}</Label>
                <Input
                    name={GeneralSettingConstant.websiteVideoUrl.key}
                    placeholder="Enter Website Video Url"
                    className={inputClassName}
                    value={formik.values[GeneralSettingConstant.websiteVideoUrl.key]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-label={GeneralSettingConstant.websiteVideoUrl.label}
                />
                {shouldShowError(formik, GeneralSettingConstant.websiteVideoUrl.key) && (
                    <FieldError className={inputErrorMessageClass}>
                        {formik.errors[GeneralSettingConstant.websiteVideoUrl.key]}
                    </FieldError>
                )}
            </TextField>
            <div className="flex justify-end gap-5 mt-5">
                <Button
                    type="submit"
                    className="bg-blue-900 text-white px-4 py-2 text-sm font-medium rounded-md shadow hover:bg-blue-900"
                    isPending={formik.isSubmitting}

                >
                    {formik.isSubmitting ? <AppDotLoader /> : "Save Setting"}
                    {/* Save Buyer */}
                </Button>
                <Button
                    variant="ghost"
                    onPress={() => formik.resetForm()}
                    className="px-4 py-2 text-sm font-medium rounded-md border border-blue-800 hover:bg-accent"
                >
                    Reset
                </Button>

            </div>

        </form>
    );
}