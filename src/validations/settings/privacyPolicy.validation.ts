import { PrivacyPolicyField } from "@/configs/forms/settings/privacyPolicy.form";
import { IPrivacyPolicy } from "@/types/settings";
import { CommonRichTextRequiredValidator } from "@/utils/formFieldValidators";
import * as Yup from "yup";
export const PrivacyPolicySchema: Yup.ObjectSchema<IPrivacyPolicy> = Yup.object(
  {
    privacyPolicy: CommonRichTextRequiredValidator(
      PrivacyPolicyField.privacyPolicy.key,
    ),
  },
);
