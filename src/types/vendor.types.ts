export interface IVendor {
  id: string;
  name: string;
  origin: string;
  code: string;
  type: "Manufacturer" | "Supplier";
  category: string;
  status: "Active" | "Inactive";
}

export interface IVendorState {
  data: IVendor[];
  selected: IVendor | null;
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
  total: number;
}