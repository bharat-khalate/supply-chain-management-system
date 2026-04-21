import { TFormFieldConfig } from "@/types";
import { IAboutUs } from "@/types/settings";

export const AboutUsFields: TFormFieldConfig<IAboutUs> = {
  aboutUs: {
    key: "aboutUs",
    label: "About Us",
    length: 250,
  },
};
