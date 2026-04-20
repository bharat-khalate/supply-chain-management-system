import { IGeneralInfoSetting } from "./config.setting.types";
import { ISocialMediaLinkSettings } from "./config.setting.types";
import { IAppVersion } from "./config.setting.types";
import { IAppLink } from "./config.setting.types";
import { ISettingState, IConfigSetting } from "./config.setting.types";
import { IAboutUs, IPrivacyPolicy, ITermsAndConditions, IPageSetting, IPageSettingState } from "./page.setting";
export type {
  IGeneralInfoSetting,
  ISocialMediaLinkSettings,
  IAppVersion,
  IAppLink,
  ISettingState,
  IConfigSetting as ISetting
};
export type { IAboutUs };
export type { IPrivacyPolicy };
export type { ITermsAndConditions };
export type { IPageSetting, IPageSettingState }
