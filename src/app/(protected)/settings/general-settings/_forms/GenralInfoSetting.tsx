import InputField from "@/components/common/InputField";
import { GeneralSettingConstant } from "@/configs/forms";
import { useAppDispatch } from "@/lib/hooks";
import { selectConfigSettings, updateConfigSetting } from "@/redux/slice";
import { IGeneralInfoSetting, ISetting } from "@/types/settings";
import { FormButtonDivClass, ResetFormButtonClass, SubmitButtonClass } from "@/utils/tailwindCssClassConstant";
import { shouldShowError } from "@/utils/validations";
import { GeneralInfoSchema } from "@/validations";
import { Button } from "@heroui/react";
import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import AppDotLoader from "../../../../../components/common/NavigationDotloader";
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

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-6">
      <InputField formik={formik} fieldConstant={GeneralSettingConstant.systemEmail} />
      <InputField formik={formik} fieldConstant={GeneralSettingConstant.phone} />
      <InputField formik={formik} fieldConstant={GeneralSettingConstant.websiteVideoUrl} />
      <div className={FormButtonDivClass}>
        <Button
          type="submit"
          className={SubmitButtonClass}
          isPending={formik.isSubmitting}
        >
          {formik.isSubmitting ? <AppDotLoader /> : "Save Setting"}
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
