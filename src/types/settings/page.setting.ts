export interface IPrivacyPolicy {
    privacyPolicy: string;
}
export interface IAboutUs {
    aboutUs: string;
}
export interface ITermsAndConditions {
    termsAndConditions: string;
}
export interface IPageSetting extends IAboutUs, IPrivacyPolicy, ITermsAndConditions { }
export interface IPageSettingState {
    data: IPageSetting | null;
    error: string | null;
    loading: boolean;
    selected: IPageSetting | null;
}