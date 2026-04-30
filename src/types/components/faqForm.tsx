import { IFAQ } from "../faq.types";
export interface IFaqFormProps {
    id?: string,
    initialValues: Omit<IFAQ, "id">;
    onSubmit: (_params: Omit<IFAQ, "id">) => Promise<void>
}