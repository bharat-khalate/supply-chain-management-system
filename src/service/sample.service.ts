import { IPaginatedData, ISample } from "@/types";
import { IFetchServiceParams } from "@/types/service/service.types";
import { getPaginatedData, sampleRecords } from "@/utils/data";

const sampleService = {
    getAll: async (params: IFetchServiceParams): Promise<IPaginatedData<ISample>> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(getPaginatedData<ISample>(sampleRecords));
            }, 500);
        });
    },
    getById: async (id: string): Promise<ISample> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const sample = sampleRecords.find((s) => s.sampleId === id);
                if (!sample) {
                    reject(new Error("Sample not found"));
                } else {
                    resolve(sample);
                }
            }, 300);
        });
    },
    add: async (sample: ISample): Promise<ISample> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(sample);
            }, 300);
        });
    },
    update: async (updated: ISample): Promise<ISample> => {
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
export default sampleService;
export type TSampleService = typeof sampleService;