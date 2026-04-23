"use client";

import AppDotLoader from "@/components/common/NavigationDotloader";
import SettingShell from "@/components/common/settings-layout/SettingsShell";
import AppSpinner from "@/components/common/Spinner";
import Tiptap from "@/components/ui/TipTapEditor";
import { TermsAndConditionsField } from "@/configs/forms/settings/termsAndCondition.form";
import { useAppDispatch } from "@/lib/hooks";
import { selectPageSetting, selectPageSettingError, selectPageSettingLoader } from "@/redux/slice";
import { fetchAllPageSetting, updateAllPageSetting } from "@/redux/slice/page.setting";
import { IPageSetting, ITermsAndConditions } from "@/types/settings";
import { FormButtonDivClass, ResetFormButtonClass, SubmitButtonClass } from "@/utils/tailwindCssClassConstant";
import { TermsAndConditionsSchema } from "@/validations";
import { Button } from "@heroui/react";
import { FormikProps, useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ManageTermsConditions() {
  const pageSetting: IPageSetting | null = useSelector(selectPageSetting);
  const loading: boolean = useSelector(selectPageSettingLoader);
  const error: string | null = useSelector(selectPageSettingError);
  const dispatch = useAppDispatch();
  useEffect(() => { dispatch(fetchAllPageSetting()); }, [dispatch])
  const initialValues: ITermsAndConditions = {
    termsAndConditions: pageSetting?.termsAndConditions ?? "",
  };
  const formik: FormikProps<ITermsAndConditions> =
    useFormik<ITermsAndConditions>({
      initialValues: initialValues,
      validationSchema: TermsAndConditionsSchema,
      enableReinitialize: true,
      onSubmit: async (_values) => {
        if (!pageSetting) return;
        console.log(_values);
        dispatch(updateAllPageSetting({ ...pageSetting, ..._values }))
      },
    });
  return (
    <SettingShell title="Manage Terms And Conditions">
      {loading ? <AppSpinner /> : (
        <div className="flex flex-col w-full bg-white rounded-md shadow-sm border border-gray-200 p-6">
          <div className="border-b border-gray-200 mb-6">
            <button className="border-b-2 border-blue-500 pb-2 px-4 text-sm font-medium text-blue-600">
              Details
            </button>
          </div>
          <div className="space-y-8">
            <Tiptap formik={formik}
              fieldKey={TermsAndConditionsField.termsAndConditions.key} />
          </div>
          <div className={FormButtonDivClass}>
            <Button
              className={ResetFormButtonClass}
              onPress={() => formik.resetForm()}
            >
              Reset
            </Button>
            <Button
              onPress={() => formik.handleSubmit()}
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
