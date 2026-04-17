import { BuyerConstants } from '@/utils/constants';
import { commonStringValidation, emailValidation, phoneValidation, AddressStringValidation, buyerTypeValidation } from '@/utils/formFieldValidators';
import * as Yup from 'yup'

export const BuyerSchema = Yup.object({
    buyerName: commonStringValidation("Name", BuyerConstants.buyerName.length),
    email: emailValidation(BuyerConstants.email.length),
    phone: phoneValidation(),
    buyerAddress: AddressStringValidation("Buyer Address", BuyerConstants.buyerAddress.length),
    contactPerson: commonStringValidation("Contact Person", BuyerConstants.contactPerson.length),
    requirementCategory: commonStringValidation("Category", BuyerConstants.requireMentCategory.length),
    buyerType: buyerTypeValidation("Buyer Type"),
    status: commonStringValidation("Status", BuyerConstants.status.length)
});