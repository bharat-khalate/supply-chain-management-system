import { shouldShowError } from "@/utils/validations";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import AppDotLoader from "../../../../../components/common/NavigationDotloader";
import { IGeneralInfoSetting, ISetting } from "@/types/settings";
import { GeneralSettingConstant } from "@/configs/forms";
import { GeneralInfoSchema } from "@/validations";
import { useSelector } from "react-redux";
import { fetchConfigSetting, selectConfigSettings, updateConfigSetting } from "@/redux/slice";
import { useAppDispatch } from "@/lib/hooks";
import { InputFieldClass, InputFieldErrorMessageClass, InputLabelClass, ResetFormButtonClass, SubmitButtonClass } from "@/utils/tailwindCssClassConstant";
export default function GeneralInfoSettingForm(): React.ReactNode {
  const setting: ISetting | null = useSelector(selectConfigSettings);
  const { systemEmail, phone, websiteVideoUrl } = setting || {
    systemEmail: "",
    phone: "",
    websiteVideoUrl: "",
  };
  const dispatch = useAppDispatch();
  const initialValues: IGeneralInfoSetting = {
    systemEmail,
    phone,
    websiteVideoUrl,
  };
  const formik = useFormik({
    initialValues,
    validationSchema: GeneralInfoSchema,
    onSubmit: async (_values) => {
      console.log(_values);
      dispatch(updateConfigSetting({ ...setting, ..._values } as ISetting));
    },
  });

  const isInvalid = shouldShowError<IGeneralInfoSetting>(formik);
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-6">
      <TextField
        isRequired
        isInvalid={isInvalid(GeneralSettingConstant.systemEmail.key)}
      >
        <Label className={InputLabelClass}>
          {GeneralSettingConstant.systemEmail.label}
        </Label>
        <Input
          name={GeneralSettingConstant.systemEmail.key}
          placeholder="Enter System Email"
          className={InputFieldClass}
          value={formik.values[GeneralSettingConstant.systemEmail.key]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label={GeneralSettingConstant.systemEmail.label}
        />
        {isInvalid(GeneralSettingConstant.systemEmail.key) && (
          <FieldError className={InputFieldErrorMessageClass}>
            {formik.errors[GeneralSettingConstant.systemEmail.key]}
          </FieldError>
        )}
      </TextField>
      <TextField
        isRequired
        isInvalid={isInvalid(GeneralSettingConstant.phone.key)}
      >
        <Label className={InputLabelClass}>
          {GeneralSettingConstant.phone.label}
        </Label>
        <Input
          name={GeneralSettingConstant.phone.key}
          placeholder="Enter Phone Number"
          className={InputFieldClass}
          value={formik.values[GeneralSettingConstant.phone.key]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label={GeneralSettingConstant.phone.label}
        />
        {isInvalid(GeneralSettingConstant.phone.key) && (
          <FieldError className={InputFieldErrorMessageClass}>
            {formik.errors[GeneralSettingConstant.phone.key]}
          </FieldError>
        )}
      </TextField>

      <TextField
        isRequired
        isInvalid={isInvalid(
          GeneralSettingConstant.websiteVideoUrl.key,
        )}
      >
        <Label className={InputLabelClass}>
          {GeneralSettingConstant.websiteVideoUrl.label}
        </Label>
        <Input
          name={GeneralSettingConstant.websiteVideoUrl.key}
          placeholder="Enter Website Video Url"
          className={InputFieldClass}
          value={formik.values[GeneralSettingConstant.websiteVideoUrl.key]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label={GeneralSettingConstant.websiteVideoUrl.label}
        />
        {isInvalid(
          GeneralSettingConstant.websiteVideoUrl.key,
        ) && (
            <FieldError className={InputFieldErrorMessageClass}>
              {formik.errors[GeneralSettingConstant.websiteVideoUrl.key]}
            </FieldError>
          )}
      </TextField>
      <div className="flex justify-end gap-5 mt-5">
        <Button
          type="submit"
          className={SubmitButtonClass}
          isPending={formik.isSubmitting}
        >
          {formik.isSubmitting ? <AppDotLoader /> : "Save Setting"}
          {/* Save Buyer */}
        </Button>
        <Button
          variant="ghost"
          onPress={() => formik.resetForm()}
          className={ResetFormButtonClass}
        >
          Reset
        </Button>
      </div>
    </form>
  );
}
