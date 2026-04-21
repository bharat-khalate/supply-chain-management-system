import { IOrder, IPaginatedData } from "@/types";
import { IFetchServiceParams } from "@/types/service/service.types";
import { getPaginatedData, orders } from "@/utils/data";
const orderService = {
    getAll: async (params: IFetchServiceParams): Promise<IPaginatedData<IOrder>> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(getPaginatedData<IOrder>(orders));
            }, 500);
        });
    },
    getById: async (id: string): Promise<IOrder> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const order = orders.find((o) => o.orderId === id);

                if (!order) {
                    reject(new Error("Order not found"));
                } else {
                    resolve(order);
                }
            }, 300);
        });
    },
    add: async (order: IOrder): Promise<IOrder> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(order);
            }, 300);
        });
    },
    update: async (updated: IOrder): Promise<IOrder> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(updated);
            }, 300);
        });
    },
    remove: async (id: string): Promise<string> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(id);
            }, 300);
        });
    },
   
};
export default orderService;
export type TOrderService=typeof orderService;