import { ISearchBar } from "@/types"
import { searchFieldValidator } from "@/utils/formFieldValidators"
import * as Yup from "yup"
export const SearchBarValidationSchema: Yup.ObjectSchema<ISearchBar> = Yup.object({
    query: searchFieldValidator
})