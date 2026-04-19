import { AboutUsFields } from "@/configs/forms/settings/aboutUs.form";
import { IAboutUs } from "@/types/settings";
import { CommonRichTextRequiredValidator } from "@/utils/formFieldValidators";
import * as Yup from "yup";
export const AboutUsSchema: Yup.ObjectSchema<IAboutUs> = Yup.object({
  aboutUs: CommonRichTextRequiredValidator(AboutUsFields.aboutUs.label),
});
