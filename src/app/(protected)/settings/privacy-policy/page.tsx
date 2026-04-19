"use client";
import SettingShell from "@/components/common/settings-layout/SettingsShell";
import CustomAppEditor from "@/components/common/AppEditor";
import AppDotLoader from "@/components/common/NavigationDotloader";
import { IPrivacyPolicy } from "@/types/settings";
import { TermsAndConditionsSchema } from "@/validations";
import { Button } from "@heroui/react";
import { FormikProps, useFormik } from "formik";
import { PrivacyPolicyField } from "@/configs/forms/settings/privacyPolicy.form";

export default function ManagePrivacyPolicy() {
  const initialValues: IPrivacyPolicy = {
    privacyPolicy: "Type Here",
  };
  const formik: FormikProps<IPrivacyPolicy> = useFormik<IPrivacyPolicy>({
    initialValues: initialValues,
    validationSchema: TermsAndConditionsSchema,
    onSubmit: async (_values) => {
      console.log(_values);
    },
  });
  return (
    <SettingShell title="Manage Privacy Policy">
      <div className="flex flex-col w-full bg-white rounded-md shadow-sm border border-gray-200 p-6">
        <div className="border-b border-gray-200 mb-6">
          <button className="border-b-2 border-blue-500 pb-2 px-4 text-sm font-medium text-blue-600">
            Details
          </button>
        </div>
        <div className="space-y-8">
          <CustomAppEditor
            formik={formik}
            fieldKey={PrivacyPolicyField.privacyPolicy.key}
          />
        </div>
        <div className="flex justify-end gap-3 mt-8">
          <Button
            className="px-6 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-50 transition"
            onPress={() => formik.resetForm()}
          >
            Reset
          </Button>
          <Button
            onPress={() => formik.handleSubmit()}
            isPending={formik.isSubmitting}
            className="px-6 py-2 bg-[#4A5E8A] text-white rounded-md hover:bg-opacity-90 transition"
          >
            {formik.isSubmitting ? <AppDotLoader /> : "Save"}
            Save
          </Button>
        </div>
      </div>
    </SettingShell>
  );
}
