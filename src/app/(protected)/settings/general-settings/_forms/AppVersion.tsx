import AppDotLoader from "@/components/common/NavigationDotloader";
import { AppVersionFields } from "@/configs/forms";
import { IAppVersion } from "@/types/settings";
import { shouldShowError } from "@/utils/validations";
import { AppVersionSchema } from "@/validations";
import { FieldError, Label, TextField, Input, Button } from "@heroui/react";
import { useFormik } from "formik";
export default function AppVersion(): React.ReactNode {
  const initialValues: IAppVersion = {
    androidVersion: 1,
    iosVersion: 1,
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: AppVersionSchema,
    onSubmit: async (_values) => {
      console.log(_values);
    },
  });
  const isInvalid = shouldShowError<IAppVersion>(formik);
  const inputClassName = `flex  w-full rounded-lg border border-gray-200 bg-gray-100 rounded-xs px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm transition-colors focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none data-[invalid=true]:border-red-500 data-[invalid=true]:bg-red-50 data-[invalid=true]:focus:ring-red-500/20 disabled:cursor-not-allowed disabled:opacity-60`;
  const inputErrorMessageClass = "text-[0.8rem] font-medium text-destructive";
  const inputLabelClass = "text-sm font-medium leading-none";
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-6">
      <TextField
        isRequired
        isInvalid={isInvalid(AppVersionFields.androidVersion.key)}
      >
        <Label className={inputLabelClass}>
          {AppVersionFields.androidVersion.label}
        </Label>
        <Input
          placeholder="Enter Android Version"
          value={formik.values[AppVersionFields.androidVersion.key]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label={AppVersionFields.androidVersion.label}
          name={AppVersionFields.androidVersion.key}
          className={inputClassName}
        />
        {formik.errors[AppVersionFields.androidVersion.key] && (
          <FieldError className={inputErrorMessageClass}>
            {formik.errors[AppVersionFields.androidVersion.key]}
          </FieldError>
        )}
      </TextField>
      <TextField
        isRequired
        isInvalid={isInvalid(AppVersionFields.iosVersion.key)}
      >
        <Label className={inputLabelClass}>
          {AppVersionFields.iosVersion.label}
        </Label>
        <Input
          name={AppVersionFields.iosVersion.key}
          placeholder="Enter IOS Version"
          value={formik.values[AppVersionFields.iosVersion.key]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={inputClassName}
          aria-label={AppVersionFields.iosVersion.label}
        />
        {formik.errors[AppVersionFields.iosVersion.key] && (
          <FieldError className={inputErrorMessageClass}>
            {formik.errors[AppVersionFields.iosVersion.key]}
          </FieldError>
        )}
      </TextField>
      <div className="flex flex-row justify-end gap-5 mt-5">
        <Button
          type="submit"
          className={
            "bg-blue-900 hover:bg-blue-950 text-white px-4 py-2 text-sm font-medium rounded-md shadow "
          }
          isPending={formik.isSubmitting}
        >
          {formik.isSubmitting ? <AppDotLoader /> : "Save"}
        </Button>
        <Button
          className="border-blue-900 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
          onPress={() => formik.resetForm()}
        >
          Reset
        </Button>
      </div>
    </form>
  );
}
