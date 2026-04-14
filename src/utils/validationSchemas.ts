import * as Yup from 'yup'
import { BuyerConstants } from './constants';
import { commonStringValidation, emailValidation, phoneValidation, AddressStringValidation } from './formFieldValidators';

export const BuyerSchema = Yup.object({
    buyerName: commonStringValidation("Name", BuyerConstants.buyerName.length),
    email: emailValidation(BuyerConstants.email.length),
    phone: phoneValidation(),
    buyerAddress: AddressStringValidation("buyer.buyerAddress", BuyerConstants.buyerAddress.length),
    contactPerson: commonStringValidation("Contact Person", BuyerConstants.contactPerson.length),
    requirementCategory: commonStringValidation("Category", BuyerConstants.requireMentCategory.length),
    buyerType: commonStringValidation("Buyer Type", BuyerConstants.buyerType.length),
    status: commonStringValidation("Status", BuyerConstants.status.length)
});