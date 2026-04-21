import { FieldConstant } from "@/types/interface";
import {
  IAppLink,
  IAppVersion,
  IGeneralInfoSetting,
  ISocialMediaLinkSettings,
} from "@/types/settings";

export const GeneralSettingConstant: Record<
  keyof IGeneralInfoSetting,
  FieldConstant<IGeneralInfoSetting>
> = {
  systemEmail: {
    label: "System Email",
    length: 150,
    key: "systemEmail",
  },
  phone: {
    label: "Phone Number",
    length: 15,
    key: "phone",
  },
  websiteVideoUrl: {
    label: "Website Video Url",
    length: 250,
    key: "websiteVideoUrl",
  },
};
export const SocialMediaLinkFormFieldConstants: Record<
  keyof ISocialMediaLinkSettings,
  FieldConstant<ISocialMediaLinkSettings>
> = {
  instagramLink: {
    key: "instagramLink",
    length: 520,
    label: "Instagram Link",
  },
  facebookLink: {
    key: "facebookLink",
    length: 520,
    label: "Facebook Link",
  },
  twitterLink: {
    label: "Twitter Link",
    key: "twitterLink",
    length: 520,
  },
};
export const AppVersionFields: Record<
  keyof IAppVersion,
  FieldConstant<IAppVersion>
> = {
  androidVersion: {
    key: "androidVersion",
    length: 52,
    label: "Android Version",
  },
  iosVersion: {
    key: "iosVersion",
    length: 52,
    label: "IOS Version",
  },
};
export const AppLinkFields: Record<keyof IAppLink, FieldConstant<IAppLink>> = {
  androidLink: {
    key: "androidLink",
    label: "Android",
    length: 520,
  },
  iosLink: {
    key: "iosLink",
    length: 520,
    label: "IOS",
  },
};
