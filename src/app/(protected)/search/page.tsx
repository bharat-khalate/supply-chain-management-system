'use client'
import { DataTable } from "@/components/common/table/DataTable";
import { useAppDispatch, useGlobalRedirect } from "@/lib/hooks";
import { getSearchResult, selectSearchData, selectSearchDataLoading } from "@/redux/slice";
import { IBuyer, IEnquiry, IOrder } from "@/types";
import { ISearchType } from "@/types/search.type";
import { buildSearchParams, isValidUrlCategory, parseSearchParams } from "@/utils/helpers/queryParams.helper";
import { Chip } from "@heroui/react";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { BuyerColumns } from "../buyers/page";
import { OrdersColumn } from "../orders-overview/page";
import { SalesColumns } from "../sales-enquiry/page";
export function Search() {
    const searchParam = useSearchParams();
    const searchResult = useSelector(selectSearchData)
    const loading = useSelector(selectSearchDataLoading)
    const pathName = usePathname();
    const dispatch = useAppDispatch();
    const { navigate, isRedirecting } = useGlobalRedirect();
    const type: Record<ISearchType, ISearchType> = useMemo(() => ({
        buyer: "buyer",
        enquiry: "enquiry",
        vendor: "vendor",
        sample: "sample",
        order: "order"
    }), [])
    const tables = {
        buyer: <DataTable
            loading={loading}
            columns={BuyerColumns()}
            data={searchResult?.filter((res) => res.type == "buyer")[0]?.result.data as IBuyer[] || [] as IBuyer[]}
            emptyMessage="No Buyers yet."
        />
        ,
        order: <DataTable
            loading={loading}
            columns={OrdersColumn()}
            data={searchResult?.filter((res) => res.type == "order")[0]?.result.data as IOrder[] || [] as IOrder[]}
            emptyMessage="No Buyers yet."
        />
        ,
        enquiry: <DataTable
            loading={loading}
            columns={SalesColumns()}
            data={searchResult?.filter((res) => res.type == "enquiry")[0]?.result.data as IEnquiry[] || [] as IEnquiry[]}
            emptyMessage="No Buyers yet."
        />
        ,
        sample: null,
        vendor: null,
    }
    const categoryType = useMemo<ISearchType>(() => {
        const params = parseSearchParams(searchParam);
        let category = params["category"];
        if (category instanceof Array) category = category[0];
        if (isValidUrlCategory(category, type)) {
            return category as ISearchType;
        }
        return "buyer"; // default
    }, [searchParam, type]);
    useEffect(() => {
        const params = parseSearchParams(searchParam);
        const normalizedParams = { ...params };
        if (normalizedParams["query"] instanceof Array) {
            normalizedParams["query"] = normalizedParams["query"][0];
        }
        normalizedParams["category"] = categoryType;
        const oldParam = buildSearchParams(params);
        const newParam = buildSearchParams(normalizedParams);
        if (oldParam !== newParam) {
            navigate({ href: `${pathName}?${newParam}` });
        } else if (normalizedParams["query"] && normalizedParams.query.length > 5)
            dispatch(getSearchResult({ query: normalizedParams.query }))
    }, [searchParam, pathName, categoryType, dispatch, navigate]);
    const handleCategoryChange = (type: ISearchType) => {
        const params = parseSearchParams(searchParam);
        params["category"] = type;
        const updatedUrlParam = buildSearchParams(params);
        navigate({ href: `${pathName}?${updatedUrlParam}` })
    }
    const selected = searchResult.find(
        (res) => res.type === categoryType
    );
    return (
        <div className="p-5 mt-5  ">
            <div className="flex flex-row gap-2 mb-5">
                {searchResult && searchResult.map(({ type, result }, idx) => {
                    return <Chip key={type + idx} className={categoryType == type ? "text-green-500 bg-green-100 cursor-pointer" : "cursor-pointer"} onClick={() => handleCategoryChange(type)}>{type}</Chip>
                })}
            </div>
            {tables[categoryType] ? tables[categoryType] : <div>coming soon</div>}
        </div>
    )
}

export default function Page() {
    return (
        <Suspense fallback={<p>...Loading</p>}>
            <Search />
        </Suspense>
    )
}
