"use client"
import AppDotLoader from "@/components/common/NavigationDotloader"
import AppBadge from "@/components/common/StatusBadge"
import { DataTable } from "@/components/common/table/DataTable"
import { useGlobalRedirect, useQueryFilters } from "@/lib/hooks"
import { selectFaqData, selectFaqLoading } from "@/redux/slice"
import { fetchAllFaq } from "@/redux/slice/faq.slice"
import { IColumn, IFAQ } from "@/types"
import { RedirectButtonClass } from "@/utils/tailwindCssClassConstant"
import { Button } from "@heroui/react"
import { DeleteIcon, EditIcon, ViewIcon } from "@icons/table-icons/actions"
import { usePathname } from "next/navigation"
import React, { Suspense } from "react"
import { useSelector } from "react-redux"


export function FAQPage(): React.ReactNode {
    const { navigate, isRedirecting } = useGlobalRedirect();
    const path = usePathname();
    const faq: IFAQ[] = useSelector(selectFaqData);
    const loading: boolean = useSelector(selectFaqLoading);
    const { } = useQueryFilters<IFAQ>(fetchAllFaq);
    const faqColumns: IColumn<IFAQ>[] = [
        {
            key: "id",
            header: "ID"
        },
        {
            key: "question",
            header: "Questions",
            render: (r) => (
                <div className="w-32 truncate" title={r.question}>{r.question}</div>
            )
        },
        {
            key: "answer",
            header: "Answer",
            render: (r) => (
                <div className="w-32 truncate" title={r.answer}>{r.answer}</div>
            )
        },
        {
            key: "sequence",
            header: "Sequence",
        },
        {
            key: "category",
            header: "Category"
        },
        {
            key: "createdOn",
            header: "Created On"
        },
        {
            key: "status",
            header: "Status",
            render: (r) => (
                r.status == "Active" ?
                    (
                        <AppBadge variant="success" >Active</AppBadge>
                    )
                    :
                    (
                        <AppBadge variant="destructive">InActive</AppBadge>
                    )
            ),
        },
        {
            key: "actions",
            header: "Actions",
            render: (r) => (
                <div className="flex items-center gap-2 ">
                    <ViewIcon className="cursor-pointer" onClick={() => navigate({ href: `${path}/view/${r.id}` })} />
                    <EditIcon className="cursor-pointer" onClick={() => navigate({ href: `${path}/edit/${r.id}` })} />
                    <DeleteIcon className="cursor-pointer" onClick={() => { }} />
                    {/* <Switch size="sm" isSelected={r.status == "Active"}>
                        {({ isSelected }) => (
                            <>
                                <Switch.Control
                                    className={`bg-red-200 ${isSelected ? "bg-blue-400 shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
                                >
                                    <Switch.Thumb
                                        className={` bg-white shadow-sm ${isSelected ? " shadow-lg" : ""}`}
                                    >
                                    </Switch.Thumb>
                                </Switch.Control>
                            </>
                        )}
                    </Switch> */}

                </div>
            )
        }
    ]
    return (
        <div className="">
            <div className="flex flex-row justify-between my-6">
                <h1 className="text-2xl font-bold text-[#0040A1]">FAQ</h1>
                <Button className={RedirectButtonClass} onPress={() => { navigate({ href: `${path}/create` }) }}>+ Add FAQ</Button>
            </div>
            <DataTable
                columns={faqColumns}
                data={faq}
                loading={loading}
                emptyMessage="No Faq's Added"
            />
        </div>
    )
}
export default function Page() {
    return (<Suspense fallback={<div className="flex justify-center p-8"><AppDotLoader /></div>}>
        <FAQPage />
    </Suspense>)
}