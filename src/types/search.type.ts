import { IBuyer } from "./buyer.types"
import { IEnquiry } from "./enquiry.types";
import { IPaginatedData } from "./global.types"
import { IOrder } from "./orders.types";
import { ISample } from "./sample.types";
import { IVendor } from "./vendor.types";


export type ISearchType = "buyer" | "vendor" | "enquiry" | "sample" | "order";
export interface ISearchResultItem<T> {
    type: ISearchType;
    result: IPaginatedData<T>;
}

export type ISearchResult = ISearchResultItem<
    IBuyer | IVendor | ISample | IEnquiry | IOrder
>[];