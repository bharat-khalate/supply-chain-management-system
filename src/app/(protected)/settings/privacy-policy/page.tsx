"use client";
import AppDotLoader from "@/components/common/NavigationDotloader";
import SettingShell from "@/components/common/settings-layout/SettingsShell";
import AppSpinner from "@/components/common/Spinner";
import Tiptap from "@/components/ui/dashboard/TipTapEditor";
import { PrivacyPolicyField } from "@/configs/forms/settings/privacyPolicy.form";
import { useAppDispatch } from "@/lib/hooks";
import { selectPageSetting, selectPageSettingError, selectPageSettingLoader } from "@/redux/slice";
import { fetchAllPageSetting, updateAllPageSetting } from "@/redux/slice/page.setting";
import { IPageSetting, IPrivacyPolicy } from "@/types/settings";
import { ResetFormButtonClass, SubmitButtonClass } from "@/utils/tailwindCssClassConstant";
import { PrivacyPolicySchema } from "@/validations";
import { Button } from "@heroui/react";
import { FormikProps, useFormik } from "formik";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function ManagePrivacyPolicy() {
  const pageSetting: IPageSetting | null = useSelector(selectPageSetting);
  const loading: boolean = useSelector(selectPageSettingLoader);
  const error: string | null = useSelector(selectPageSettingError);
  const dispatch = useAppDispatch();
  useEffect(() => { dispatch(fetchAllPageSetting()) }, [])
  const initialValues: IPrivacyPolicy = {
    privacyPolicy: pageSetting?.privacyPolicy || "",
  };
  const formik: FormikProps<IPrivacyPolicy> = useFormik<IPrivacyPolicy>({
    initialValues: initialValues,
    validationSchema: PrivacyPolicySchema,
    enableReinitialize: true,
    onSubmit: async (_values) => {
      console.log(_values);
      dispatch(updateAllPageSetting({ ...pageSetting, ..._values } as IPageSetting))
    },
  });
  return (
    <SettingShell title="Manage Privacy Policy">
      {loading ? <AppSpinner /> : (
        <div className="flex flex-col w-full bg-white rounded-md shadow-sm border border-gray-200 p-6">
          <div className="border-b border-gray-200 mb-6">
            <button className="border-b-2 border-blue-500 pb-2 px-4 text-sm font-medium text-blue-600">
              Details
            </button>
          </div>
          <div className="space-y-8">
            <Tiptap
              formik={formik}
              fieldKey={PrivacyPolicyField.privacyPolicy.key}
            />
          </div>
          <div className="flex justify-end gap-3 mt-8">
            <Button
              className={ResetFormButtonClass}
              onPress={() => formik.resetForm()}
            >
              Reset
            </Button>
            <Button
              onPress={async () => {
                await formik.submitForm()
              }}
              isPending={formik.isSubmitting}
              className={SubmitButtonClass}
            >
              {formik.isSubmitting ? <AppDotLoader /> : "Save"}
            </Button>
          </div>
        </div>
      )}
    </SettingShell>
  );
}
