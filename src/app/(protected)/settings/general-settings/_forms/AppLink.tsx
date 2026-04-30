import InputField from "@/components/common/InputField";
import AppDotLoader from "@/components/common/NavigationDotloader";
import { AppLinkFields } from "@/configs/forms";
import { useAppDispatch } from "@/lib/hooks";
import { selectConfigSettingError, selectConfigSettingLoader, selectConfigSettings, updateConfigSetting } from "@/redux/slice";
import { IAppLink, ISetting } from "@/types/settings";
import { FormButtonDivClass, ResetFormButtonClass, SubmitButtonClass } from "@/utils/tailwindCssClassConstant";
import { AppLinkSchema } from "@/validations";
import { Button } from "@heroui/react";
import { useFormik } from "formik";
import React from "react";
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
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-6">
      <InputField formik={formik} fieldConstant={AppLinkFields.androidLink} />
      <InputField formik={formik} fieldConstant={AppLinkFields.iosLink} />
      <p className="text-sm text-red-600">
        *Note: Please do not change this value until confirmed by developers
      </p>
      <div className={FormButtonDivClass}>
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
