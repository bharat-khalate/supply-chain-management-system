'use client'
import { DataTable } from "@/components/common/table/DataTable";
import { IBuyer } from "@/types";
import { ISearchType } from "@/types/search.type";
import { SearchResult } from "@/utils/data";
import { Chip } from "@heroui/react";
import { useState } from "react";
import { BuyerColumns } from "../buyers/page";
export default function Page() {
    const type: Record<ISearchType, ISearchType> = {
        buyer: "buyer",
        enquiry: "enquiry",
        vendor: "vendor",
        sample: "sample",
        order: "order"
    }
    const [categoryType, setCategoryType] = useState<ISearchType>(type.buyer);
    const selected = SearchResult.find(
        (res) => res.type === "buyer"
    );
    return (
        <div className="p-5 mt-5  ">
            <div className="flex flex-row gap-2 mb-5">
                {SearchResult.map(({ type, result }, idx) => {
                    return <Chip key={type + idx} className={categoryType == type ? "text-green-500 bg-green-100 cursor-pointer" : "cursor-pointer"} onClick={() => setCategoryType(type)}>{type}</Chip>
                })}
            </div>
            <DataTable
                columns={BuyerColumns()}
                data={(selected?.result.data ?? []) as IBuyer[]}
                loading={false}
                emptyMessage="No Buyers yet."
            />
        </div>
    )
}

