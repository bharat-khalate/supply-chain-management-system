import { FieldConstant } from "@/types/interface";
import { ITermsAndConditions } from "@/types/settings";

export const TermsAndConditionsField: Record<
  keyof ITermsAndConditions,
  FieldConstant<ITermsAndConditions>
> = {
  termsAndConditions: {
    key: "termsAndConditions",
    length: 520,
    label: "Terms And Conditions",
  },
};
