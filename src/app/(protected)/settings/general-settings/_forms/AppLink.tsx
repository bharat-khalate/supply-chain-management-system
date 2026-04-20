import AppDotLoader from "@/components/common/NavigationDotloader";
import { AppLinkFields } from "@/configs/forms";
import { useAppDispatch } from "@/lib/hooks";
import { fetchConfigSetting, selectConfigSettingError, selectConfigSettingLoader, selectConfigSettings, updateConfigSetting } from "@/redux/slice";
import { IAppLink, ISetting } from "@/types/settings";
import { InputFieldClass, InputFieldErrorMessageClass, InputLabelClass, ResetFormButtonClass, SubmitButtonClass } from "@/utils/tailwindCssClassConstant";
import { shouldShowError } from "@/utils/validations";
import { AppLinkSchema } from "@/validations";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function AppLink(): React.ReactNode {
  const settings: ISetting | null = useSelector(selectConfigSettings);
  const { iosLink, androidLink } = settings || {
    iosLink: "",
    androidLink: "",
  };
  const isLoading: boolean = useSelector(selectConfigSettingLoader);
  const error: string | null = useSelector(selectConfigSettingError);
  const dispatch = useAppDispatch();
  const initialValues: IAppLink = {
    androidLink,
    iosLink,
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: AppLinkSchema,
    onSubmit: async (_values) => {
      console.log(_values);
      dispatch(updateConfigSetting({ ...settings, ..._values } as ISetting))
    },
  });
  const isInvalid = shouldShowError<IAppLink>(formik);
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-6">
      <TextField
        isRequired
        isInvalid={isInvalid(AppLinkFields.androidLink.key)}
      >
        <Label className={InputLabelClass}>
          {AppLinkFields.androidLink.label}
        </Label>
        <Input
          placeholder="Enter Android Link"
          value={formik.values[AppLinkFields.androidLink.key]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label={AppLinkFields.androidLink.key}
          name={AppLinkFields.androidLink.key}
          className={InputFieldClass}
        />
        {formik.errors[AppLinkFields.androidLink.key] && (
          <FieldError className={InputFieldErrorMessageClass}>
            {formik.errors[AppLinkFields.androidLink.key]}
          </FieldError>
        )}
      </TextField>
      <TextField isRequired isInvalid={isInvalid(AppLinkFields.iosLink.key)}>
        <Label className={InputLabelClass}>{AppLinkFields.iosLink.label}</Label>
        <Input
          placeholder="Enter IOS Link"
          value={formik.values[AppLinkFields.iosLink.key]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label={AppLinkFields.iosLink.key}
          name={AppLinkFields.iosLink.key}
          className={InputFieldClass}
        />
        {formik.errors[AppLinkFields.iosLink.key] && (
          <FieldError className={InputFieldErrorMessageClass}>
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
