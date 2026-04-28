import { IBuyerFields, TFormFieldConfig } from "@/types";
import { TSelectOption } from "@/types/components";

export const BuyerFormConfig: TFormFieldConfig<IBuyerFields> = {
  buyerName: {
    label: "Name",
    length: 52,
    key: "buyerName"
  },
  buyerAddress: {
    label: "Address",
    length: 250,
    key: "buyerAddress"
  },
  phone: {
    label: "Phone",
    length: 15,
    key: "phone"
  },
  email: {
    label: "Email",
    length: 150,
    key: "email"
  },
  contactPerson: {
    label: "Contact Person",
    length: 52,
    key: "contactPerson"
  },
  requirementCategory: {
    label: "Requirement Category",
    length: 52,
    key: "requirementCategory"
  },
  buyerType: {
    label: "Buyer Type",
    length: 52,
    key: "buyerType"
  },
  status: {
    label: "status",
    length: 25,
    key: "status"
  }
}

export const BUYER_TYPES:TSelectOption[] = [
  { label: "Retailer", key: "Retailer" },
  { label: "Wholesaler", key: "Wholesaler" },
  { label: "Brand", key: "Brand" },
  { label: "Corporate", key: "Corporate" },
  { label: "Institutional", key: "Institutional" },
  { label: "Enterprise", key: "Enterprise" },
  { label: "Misc", key: "Misc" },
];
