export type IEnquiry = {
  enquiryId: string;
  date: string;
  customerName: string;
  contactPerson: string;
  qty: number;
  expPrice: number;
  status: "Active" | "Pending" | "Closed";
};


export interface IEnquiryState {
    data: IEnquiry[];
    selected: IEnquiry | null;
    loading: boolean;
    error: string | null;
    page: number;
    limit: number;
    total: number;
}