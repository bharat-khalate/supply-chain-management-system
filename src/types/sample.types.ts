export type ISample = {
  sampleId: string;
  date: string;
  enquiryId: string;
  customerName: string;
  productCategory: string;
  status: "Active" | "Pending" | "Completed";
};



export interface ISampleState {
  data: ISample[];
  selected: ISample | null;
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
  total: number;
}