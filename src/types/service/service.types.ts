import { ISearchType } from "../search.type";

export interface IFetchServiceParams {
    page: number;
    limit: number;
    query?: Record<string, string | string[]>
}
export interface ISearchServiceParam {
    query: string,
    type?: ISearchType
}


