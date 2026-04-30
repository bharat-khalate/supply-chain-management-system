import { searchFieldValidator } from "@/utils/formFieldValidators"
import * as Yup from "yup"
export const SearchBarValidationSchema = Yup.object({
    query: searchFieldValidator
})