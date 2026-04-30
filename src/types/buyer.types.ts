export interface IBuyer {
    id: string;
    buyerName: string,
    buyerAddress: string;
    phone: string;
    email: string;
    contactPerson: string;
    buyerType: "Retailer" | "Wholesaler" | "Brand" | "Corporate" | "Institutional" | "Enterprise" | "Misc";
    requirementCategory: string;
    status: TBuyerStatusOptions;
}
export interface IBuyerState {
    data: IBuyer[];
    selected: IBuyer | null;
    loading: boolean;
    error: string | null;
    page: number;
    limit: number;
    total: number;
}
export interface IBuyerFields {
    buyerName: string;
    email: string,
    phone: string,
    buyerAddress: string,
    contactPerson: string,
    requirementCategory: string,
    buyerType: string,
    status: TBuyerStatusOptions,
}

export type TBuyerStatusOptions = "Active" | "Inactive"