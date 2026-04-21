import InputField from "@/components/common/InputField";
import AppDotLoader from "@/components/common/NavigationDotloader";
import { AppVersionFields } from "@/configs/forms";
import { useAppDispatch } from "@/lib/hooks";
import { selectConfigSettingError, selectConfigSettingLoader, selectConfigSettings, updateConfigSetting } from "@/redux/slice";
import { IAppVersion, ISetting } from "@/types/settings";
import { ResetFormButtonClass, SubmitButtonClass } from "@/utils/tailwindCssClassConstant";
import { AppVersionSchema } from "@/validations";
import { Button } from "@heroui/react";
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
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-6">
      <InputField formik={formik} fieldConstant={AppVersionFields.androidVersion} />
      <InputField formik={formik} fieldConstant={AppVersionFields.iosVersion} />
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
