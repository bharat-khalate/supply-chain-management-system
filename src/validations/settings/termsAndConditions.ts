import { TermsAndConditionsField } from "@/configs/forms/settings/termsAndCondition.form";
import { ITermsAndConditions } from "@/types/settings";
import {
  CommonRichTextRequiredValidator,
} from "@/utils/formFieldValidators";
import * as Yup from "yup";

export const TermsAndConditionsSchema: Yup.ObjectSchema<ITermsAndConditions> =
  Yup.object({
    termsAndConditions: CommonRichTextRequiredValidator(
      TermsAndConditionsField.termsAndConditions.label
    ),
  })