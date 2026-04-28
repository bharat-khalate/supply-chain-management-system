"use client";
import { AppBreadcrumb } from "@/components/common/AppBreadCrumb";
import AppDotLoader from "@/components/common/NavigationDotloader";
import AppSpinner from "@/components/common/Spinner";
import { useAppDispatch, useGlobalRedirect } from "@/lib/hooks";
import { selectFaqLoading, selectSelectedFaq } from "@/redux/slice";
import { fetchFaqById } from "@/redux/slice/faq.slice";
import { IFAQ } from "@/types";
import { DataDetails } from "@/types/components/DataDeatail";
import { RedirectButtonClass } from "@/utils/tailwindCssClassConstant";
import {
    Button
} from "@heroui/react";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function Page() {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { navigate, isRedirecting } = useGlobalRedirect();
    const breadCrumbItems = [
        { label: "Dashboard", path: "/dashboard" },
        { label: "FAQ", path: "/faqs" },
        { label: "View", path: "/faqs/view" },
    ];
    const FAQ: IFAQ | null = useSelector(selectSelectedFaq);
    const loading: boolean = useSelector(selectFaqLoading);
    useEffect(() => {
        if (!id) {
            navigate({ action: "back" });
            return;
        }
        dispatch(fetchFaqById(id as string));
    }, [id])
    const columns = [
        { key: "question", header: "Question" },
        { key: "answer", header: "Answer" },
        { key: "category", header: "Category" },
        { key: "sequence", header: "Sequence" },
        {
            key: "createdOn",
            header: "Created On",
            render: (row: IFAQ) =>
                new Date(row.createdOn).toLocaleDateString(),
        },
        {
            key: "status",
            header: "Status",
            render: (row: IFAQ) => (
                <span
                    className={`px-2 py-1 rounded text-xs font-medium ${row.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                        }`}
                >
                    {row.status}
                </span>
            ),
        },
    ];

    if (!FAQ) {
        return <AppSpinner />
    }
    return (
        <div className="space-y-6 my-6 max-w-3xl ">
            <div className="flex items-center justify-between my-6">
                <div className="flex flex-col gap-3">
                    <AppBreadcrumb items={breadCrumbItems} />
                    <h1 className="text-2xl font-bold text-[#0040A1]">View FAQ</h1>
                </div>
                <Button
                    onPress={() => navigate({ action: "back" })}
                    isDisabled={isRedirecting}
                    className={RedirectButtonClass}
                >
                    {isRedirecting ? (
                        <AppDotLoader />
                    ) : (
                        <span>Back</span>
                    )}
                </Button>
            </div>
            {loading ? (
                <AppSpinner />
            ) : (
                <DataDetails
                    data={[FAQ]}
                    columns={columns}
                />

            )
            }
        </div >
    );
}
