import { FaqConfig } from "@/configs/forms";
import { commonNumberValidation, commonStringValidation, faqCategoryValidation } from "@/utils/formFieldValidators";
import * as Yup from "yup";

export const FaqSchema = Yup.object({
    question: commonStringValidation(FaqConfig.question.label || "", FaqConfig.question.length),
    answer: commonStringValidation(FaqConfig.answer.label || "", FaqConfig.answer.length),
    sequence: commonNumberValidation(FaqConfig.sequence.label || ""),
    category: faqCategoryValidation(FaqConfig.category.label || ""),
    createdOn: commonStringValidation(FaqConfig.createdOn.label || "", FaqConfig.createdOn.length),
    status: commonStringValidation(FaqConfig.status.label || "", FaqConfig.status.length),
});