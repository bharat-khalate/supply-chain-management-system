import AppDotLoader from "@/components/common/NavigationDotloader";
import { AppVersionFields } from "@/configs/forms";
import { useAppDispatch } from "@/lib/hooks";
import { selectConfigSettingError, selectConfigSettingLoader, selectConfigSettings, updateConfigSetting } from "@/redux/slice";
import { IAppVersion, ISetting } from "@/types/settings";
import { InputFieldClass, InputFieldErrorMessageClass, InputLabelClass, ResetFormButtonClass, SubmitButtonClass } from "@/utils/tailwindCssClassConstant";
import { shouldShowError } from "@/utils/validations";
import { AppVersionSchema } from "@/validations";
import { FieldError, Label, TextField, Input, Button } from "@heroui/react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
export default function AppVersion(): React.ReactNode {
  const settings: ISetting | null = useSelector(selectConfigSettings);
  const { androidVersion, iosVersion } = settings || {
    androidVersion: 1,
    iosVersion: 1,
  };
  const isLoading: boolean = useSelector(selectConfigSettingLoader);
  const error: string | null = useSelector(selectConfigSettingError);
  const dispatch = useAppDispatch();
  const initialValues: IAppVersion = {
    androidVersion,
    iosVersion
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: AppVersionSchema,
    onSubmit: async (_values) => {
      console.log(_values);
      dispatch(updateConfigSetting({ ...settings, ..._values } as ISetting))
    },
  });
  const isInvalid = shouldShowError<IAppVersion>(formik);
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-6">
      <TextField
        isRequired
        isInvalid={isInvalid(AppVersionFields.androidVersion.key)}
      >
        <Label className={InputLabelClass}>
          {AppVersionFields.androidVersion.label}
        </Label>
        <Input
          placeholder="Enter Android Version"
          value={formik.values[AppVersionFields.androidVersion.key]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label={AppVersionFields.androidVersion.label}
          name={AppVersionFields.androidVersion.key}
          className={InputFieldClass}
        />
        {formik.errors[AppVersionFields.androidVersion.key] && (
          <FieldError className={InputFieldErrorMessageClass}>
            {formik.errors[AppVersionFields.androidVersion.key]}
          </FieldError>
        )}
      </TextField>
      <TextField
        isRequired
        isInvalid={isInvalid(AppVersionFields.iosVersion.key)}
      >
        <Label className={InputLabelClass}>
          {AppVersionFields.iosVersion.label}
        </Label>
        <Input
          name={AppVersionFields.iosVersion.key}
          placeholder="Enter IOS Version"
          value={formik.values[AppVersionFields.iosVersion.key]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={InputFieldClass}
          aria-label={AppVersionFields.iosVersion.label}
        />
        {formik.errors[AppVersionFields.iosVersion.key] && (
          <FieldError className={InputFieldErrorMessageClass}>
            {formik.errors[AppVersionFields.iosVersion.key]}
          </FieldError>
        )}
      </TextField>
      <div className="flex flex-row justify-end gap-5 mt-5">
        <Button
          type="submit"
          className={
            SubmitButtonClass
          }
          isPending={formik.isSubmitting}
        >
          {formik.isSubmitting ? <AppDotLoader /> : "Save"}
        </Button>
        <Button
          className={ResetFormButtonClass}
          onPress={() => formik.resetForm()}
        >
          Reset
        </Button>
      </div>
    </form>
  );
}
