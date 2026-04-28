import { IPaginatedData } from "./global.types";

export type TEntities = "BUYER" | "VENDOR" | "ORDER" | "SAMPLE" | "ENQUIRY";
export type TFAQStatus = "Active" | "Inactive";
export interface IFAQ {
    id: string;
    question: string;
    answer: string;
    sequence: number;
    category: TEntities;
    createdOn: string;
    status: TFAQStatus
}