import { IFAQ, IPaginatedData } from "@/types";
import { IFetchServiceParams } from "@/types/service/service.types";
import { FAQ, getPaginatedData } from "@/utils/data";
import { resolve } from "path";

export const faqService = {
    add: async (faq: Omit<IFAQ, "id">): Promise<IFAQ> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(FAQ[0]), 300);
        })
    },
    fetchAll: async (params: IFetchServiceParams): Promise<IPaginatedData<IFAQ>> => {
        return new Promise((resolve) => setTimeout(() => resolve(getPaginatedData(FAQ)), 300))
    },
    fetchById: async (id: string): Promise<IFAQ> => {
        return new Promise((resolve) => setTimeout(() => resolve(FAQ[0]), 300));
    },
    update: async (faq: IFAQ): Promise<IFAQ> => {
        return new Promise((resolve) => setTimeout(() => resolve(faq), 300));
    },
    remove: async (id: string): Promise<IFAQ> => {
        return new Promise((resolve) => setTimeout(() => resolve(FAQ[0]), 300))
    }
}
export type TFaqService = typeof faqService;