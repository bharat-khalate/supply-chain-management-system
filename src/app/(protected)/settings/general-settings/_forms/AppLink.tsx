import AppDotLoader from "@/components/common/NavigationDotloader";
import { AppLinkFields } from "@/configs/forms";
import { IAppLink } from "@/types/settings";
import { shouldShowError } from "@/utils/validations";
import { AppLinkSchema } from "@/validations";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { useFormik } from "formik";
import React from "react";

export default function AppLink(): React.ReactNode {
  const initialValues: IAppLink = {
    iosLink: "",
    androidLink: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: AppLinkSchema,
    onSubmit: async (_values) => {
      console.log(_values);
    },
  });
  const isInvalid = shouldShowError<IAppLink>(formik);
  const inputClassName = `flex  w-full rounded-lg border border-gray-200 bg-gray-100 rounded-xs px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm transition-colors focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none data-[invalid=true]:border-red-500 data-[invalid=true]:bg-red-50 data-[invalid=true]:focus:ring-red-500/20 disabled:cursor-not-allowed disabled:opacity-60`;
  const inputErrorMessageClass = "text-[0.8rem] font-medium text-destructive";
  const inputLabelClass = "text-sm font-medium leading-none";
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-6">
      <TextField
        isRequired
        isInvalid={isInvalid(AppLinkFields.androidLink.key)}
      >
        <Label className={inputLabelClass}>
          {AppLinkFields.androidLink.label}
        </Label>
        <Input
          placeholder="Enter Android Link"
          value={formik.values[AppLinkFields.androidLink.key]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label={AppLinkFields.androidLink.key}
          name={AppLinkFields.androidLink.key}
          className={inputClassName}
        />
        {formik.errors[AppLinkFields.androidLink.key] && (
          <FieldError className={inputErrorMessageClass}>
            {formik.errors[AppLinkFields.androidLink.key]}
          </FieldError>
        )}
      </TextField>
      <TextField isRequired isInvalid={isInvalid(AppLinkFields.iosLink.key)}>
        <Label className={inputLabelClass}>{AppLinkFields.iosLink.label}</Label>
        <Input
          placeholder="Enter IOS Link"
          value={formik.values[AppLinkFields.iosLink.key]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label={AppLinkFields.iosLink.key}
          name={AppLinkFields.iosLink.key}
          className={inputClassName}
        />
        {formik.errors[AppLinkFields.iosLink.key] && (
          <FieldError className={inputErrorMessageClass}>
            {formik.errors[AppLinkFields.iosLink.key]}
          </FieldError>
        )}
      </TextField>
      <p className="text-sm text-red-600">
        *Note: Please do not change this value until confirmed by developers
      </p>
      <div className="flex flex-row justify-end gap-2">
        <Button
          type="submit"
          className={
            "bg-blue-900 hover:bg-blue-950 px-4 py-2 text-white text-sm rounded-md shadow "
          }
          isPending={formik.isSubmitting}
        >
          {formik.isSubmitting ? <AppDotLoader /> : "Save"}
        </Button>
        <Button
          className={"text-sm px-4 py-2 rounded-md font-medium hover:bg-accent border border-blue-900"}
          onPress={() => formik.resetForm()}
        >
          Reset
        </Button>
      </div>
    </form>
  );
}
