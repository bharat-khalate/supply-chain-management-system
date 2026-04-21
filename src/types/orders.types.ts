
export type IOrder = {
  orderId: string;
  date: string;
  qty: number;
  customerName: string;
  deliveryDate: string;
  status: "Active" | "Inactive";
};



export interface IOrderState {
    data: IOrder[];
    selected: IOrder | null;
    loading: boolean;
    error: string | null;
    page: number;
    limit: number;
    total: number;
}