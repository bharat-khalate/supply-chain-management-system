import { FieldConstant } from "@/types/interface";
import { IPrivacyPolicy } from "@/types/settings";

export const PrivacyPolicyField: Record<
  keyof IPrivacyPolicy,
  FieldConstant<IPrivacyPolicy>
> = {
  privacyPolicy: {
    key: "privacyPolicy",
    length: 520,
    label: "Privacy Policy",
  },
};
