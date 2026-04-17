import { IBuyer, IPaginatedData } from "@/types";
import { IFetchServiceParams } from "@/types/service/service.types";
import { buyers, getPaginatedData } from "@/utils/data";
const buyerService = {
    fetchAll: async (params: IFetchServiceParams): Promise<IPaginatedData<IBuyer>> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                    resolve(getPaginatedData<IBuyer>(buyers))
            }, 500);
        });
    },
    fetchById: async (id: string): Promise<IBuyer> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const buyer = buyers.find((b) => b.id === id);
                if (!buyer) {
                    reject(new Error("Buyer not found"));
                } else {
                    resolve(buyer);
                }
            }, 300);
        });
    },
    add: async (newBuyer: IBuyer): Promise<IBuyer> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(newBuyer);
            }, 300);
        });
    },    update: async (updatedBuyer: IBuyer): Promise<IBuyer> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(updatedBuyer);
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
export default buyerService;