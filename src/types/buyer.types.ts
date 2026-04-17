export interface IBuyer {
    id: string;
    buyerName: string,
    buyerAddress: string;
    phone: string;
    email: string;
    contactPerson: string;
    buyerType: "Retailer" | "Wholesaler" | "Brand" | "Corporate" | "Institutional" | "Enterprise" | "Misc";
    requirementCategory: string;
    status: "Active" | "Inactive";
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