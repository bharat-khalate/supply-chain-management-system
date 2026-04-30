import { IBuyerFields, TFormFieldConfig } from "@/types";

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

export const BUYER_TYPES = [
  { id: "Retailer", name: "Retailer" },
  { id: "Wholesaler", name: "Wholesaler" },
  { id: "Brand", name: "Brand" },
  { id: "Corporate", name: "Corporate" },
  { id: "Institutional", name: "Institutional" },
  { id: "Enterprise", name: "Enterprise" },
  { id: "Misc", name: "Misc" },
];
