import { FieldConstant } from "@/types/interface";
import { IAboutUs } from "@/types/settings";

export const AboutUsFields: Record<keyof IAboutUs, FieldConstant<IAboutUs>> = {
  aboutUs: {
    key: "aboutUs",
    label: "About Us",
    length: 250,
  },
};
