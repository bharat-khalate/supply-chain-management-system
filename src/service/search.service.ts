import { ISearchResult, ISearchServiceParam } from "@/types";
import { SearchResult } from "@/utils/data";

export const searchService = {
    getSearchResult: async (data: ISearchServiceParam): Promise<ISearchResult> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(SearchResult), 300)
        })
    }
}

export type TSearchService = typeof searchService;