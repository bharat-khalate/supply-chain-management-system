export interface IGeneralInfoSetting {
  systemEmail: string;
  phone: string;
  websiteVideoUrl: string;
}
export interface ISocialMediaLinkSettings {
  twitterLink: string;
  instagramLink: string;
  facebookLink: string;
}
export interface IAppVersion {
  androidVersion: number;
  iosVersion: number;
}
export interface IAppLink {
  androidLink: string;
  iosLink: string;
}

export interface IConfigSetting extends IGeneralInfoSetting, ISocialMediaLinkSettings, IAppVersion, IAppLink { }
export interface ISettingState {
  data: IConfigSetting | null,
  selected: null | IConfigSetting,
  loading: boolean,
  error: string | null;
}