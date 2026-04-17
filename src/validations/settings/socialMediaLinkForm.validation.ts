import { ISocialMediaLinkFormFields } from "@/components/common/settings-layout/forms/SocialMediaLinkForm";
import { commonUrlValidation } from "@/utils/formFieldValidators";
import * as Yup from "yup";
export const SocialMediaLinkFormSchema = Yup.object<ISocialMediaLinkFormFields>({
    instagramLink: commonUrlValidation,
    facebookLink: commonUrlValidation,
    twitterLink: commonUrlValidation
})