import { BuyerFormConfig } from '@/configs/forms';
import { commonStringValidation, emailValidation, phoneValidation, AddressStringValidation, buyerTypeValidation } from '@/utils/formFieldValidators';
import * as Yup from 'yup'

export const BuyerSchema = Yup.object({
    buyerName: commonStringValidation("Name", BuyerFormConfig.buyerName.length),
    email: emailValidation(BuyerFormConfig.email.length),
    phone: phoneValidation(),
    buyerAddress: AddressStringValidation("Buyer Address", BuyerFormConfig.buyerAddress.length),
    contactPerson: commonStringValidation("Contact Person", BuyerFormConfig.contactPerson.length),
    requirementCategory: commonStringValidation("Category", BuyerFormConfig.requirementCategory.length),
    buyerType: buyerTypeValidation("Buyer Type"),
    status: commonStringValidation("Status", BuyerFormConfig.status.length)
});