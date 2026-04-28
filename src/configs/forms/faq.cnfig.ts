import { IFAQ, TEntities, TFormFieldConfig } from "@/types";

export const FaqConfig: TFormFieldConfig<Omit<IFAQ, "id">> = {
    question: {
        label: "Question",
        key: "question",
        length: 52
    },
    answer: {
        label: "Answer",
        key: "answer",
        length: 52,
    },
    sequence: {
        label: "Sequence",
        key: "sequence",
        length: 10
    },
    status: {
        label: "Status",
        key: "status",
        length: 52,
    },
    category: {
        label: "Category",
        key: "category",
        length: 52
    },
    createdOn: {
        label: "Created On",
        key: "createdOn",
        length: 52
    }
}

export const FAQ_CATEGORY: { label: string, value: TEntities }[] = [
    { label: "Buyer", value: "BUYER" },
    { label: "Wholesaler", value: "VENDOR" },
    { label: "Brand", value: "SAMPLE" },
    { label: "Corporate", value: "ENQUIRY" },
    { label: "Institutional", value: "ORDER" },
];
