import { IBuyerFields } from "@/types";
import { FieldConstant } from "@/types/interface";

export const BuyerConstants: Record<keyof IBuyerFields, FieldConstant<IBuyerFields>> = {
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