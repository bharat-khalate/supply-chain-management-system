import { GeneralSettingConstant } from "@/utils/constants"
import { commonUrlValidation, emailValidation, phoneValidation } from "@/utils/formFieldValidators"
import * as Yup from "yup"
export const GeneralInfoSchema = Yup.object({
    systemEmail: emailValidation(GeneralSettingConstant.systemEmail.length),
    phone: phoneValidation(),
    websiteVideoUrl: commonUrlValidation
})
