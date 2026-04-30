import { AppVersionFields, GeneralSettingConstant } from "@/configs/forms";
import {
  IAppLink,
  IAppVersion,
  ISocialMediaLinkSettings,
} from "@/types/settings";
import {
  commonNumberValidation,
  commonUrlValidation,
  emailValidation,
  phoneValidation,
} from "@/utils/formFieldValidators";
import * as Yup from "yup";
export const GeneralInfoSchema = Yup.object({
  systemEmail: emailValidation(GeneralSettingConstant.systemEmail.length),
  phone: phoneValidation(),
  websiteVideoUrl: commonUrlValidation,
});
export const SocialMediaLinkFormSchema = Yup.object<ISocialMediaLinkSettings>({
  instagramLink: commonUrlValidation,
  facebookLink: commonUrlValidation,
  twitterLink: commonUrlValidation,
});
export const AppVersionSchema: Yup.ObjectSchema<IAppVersion> = Yup.object({
  androidVersion: commonNumberValidation(AppVersionFields.androidVersion.label||""),
  iosVersion: commonNumberValidation(AppVersionFields.iosVersion.label || ""),
});
export const AppLinkSchema: Yup.ObjectSchema<IAppLink> = Yup.object({
  androidLink: commonUrlValidation,
  iosLink: commonUrlValidation,
});
