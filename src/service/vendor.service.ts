import { IPaginatedData, IVendor } from "@/types";
import { IFetchServiceParams } from "@/types/service/service.types";
import { getPaginatedData, vendors } from "@/utils/data";

const vendorService = {
    getAll: async (params: IFetchServiceParams): Promise<IPaginatedData<IVendor>> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(getPaginatedData<IVendor>(vendors));
            }, 500);
        });
    },
    getById: async (id: string): Promise<IVendor> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const vendor = vendors.find((v) => v.id === id);

                if (!vendor) {
                    reject(new Error("Vendor not found"));
                } else {
                    resolve(vendor);
                }
            }, 300);
        });
    },
    add: async (vendor: IVendor): Promise<IVendor> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(vendor);
            }, 300);
        });
    },
    update: async (updated: IVendor): Promise<IVendor> => {
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
export default vendorService;
export type TVendorService = typeof vendorService;