import { ISearchBar, TFormFieldConfig } from "@/types";

export const SearchBarConfig: TFormFieldConfig<ISearchBar> = {
    query: {
        key: "query",
        length: 256,
        placeHolder: "Search buyers, regions, or segments...",
        min:6
    }
}