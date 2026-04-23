import { IEnquiry, IPaginatedData } from "@/types";
import { IFetchServiceParams } from "@/types/service/service.types";
import { enquiries, getPaginatedData } from "@/utils/data";
const enquiryService = {
    getAll: async (params: IFetchServiceParams): Promise<IPaginatedData<IEnquiry>> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(getPaginatedData<IEnquiry>(enquiries));
            }, 500);
        });
    },
    getById: async (id: string): Promise<IEnquiry> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {  
                const enquiry = enquiries[0]; enquiries.find((e) => e.enquiryId === id);
                console.log(enquiry)
                if (!enquiry) {
                    reject(new Error("Enquiry not found"));
                } else {
                    resolve(enquiry);
                }
            }, 300);
        });
    },
    add: async (enquiry: IEnquiry): Promise<IEnquiry> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(enquiry);
            }, 300);
        });
    },
    update: async (updated: IEnquiry): Promise<IEnquiry> => {
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
export default enquiryService;
export type TEnquiryService = typeof enquiryService;