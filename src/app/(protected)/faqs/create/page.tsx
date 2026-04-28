"use client";
import { AppBreadcrumb } from "@/components/common/AppBreadCrumb";
import AppDotLoader from "@/components/common/NavigationDotloader";
import { useAppDispatch, useGlobalRedirect } from "@/lib/hooks";
import { IFAQ } from "@/types";
import { RedirectButtonClass } from "@/utils/tailwindCssClassConstant";
import {
    Button
} from "@heroui/react";
import { Suspense } from "react";
import toast from "react-hot-toast";
import FaqForm from "../_form/FaqForm";
import { addFaq } from "@/redux/slice/faq.slice";
export function CreateBuyers() {
    const dispatch = useAppDispatch();
    const breadCrumbItems = [
        { label: "Dashboard", path: "/dashboard" },
        { label: "FAQ", path: "/faqs" },
        { label: "Create", path: "/faqs/create" },
    ];
    const { navigate, isRedirecting } = useGlobalRedirect();
    const initialValues: Omit<IFAQ, "id"> = {
        question: "",
        answer: "",
        sequence: 0,
        status: "Active",
        category: "BUYER",
        createdOn: "",
    };
    const onSubmit = async (_values: Omit<IFAQ, "id">) => {
        await new Promise((res) => setTimeout(() => res(""), 3000));
        dispatch(addFaq(_values));
        toast.success("FAQ Added successfully");
        navigate({ action: "back" })
    }
    return (
        <div className="space-y-6 my-6 max-w-3xl ">
            <div className="flex items-center justify-between my-6">
                <div className="flex flex-col gap-3">
                    <AppBreadcrumb items={breadCrumbItems} />
                    <h1 className="text-2xl font-bold text-[#0040A1]">Create FAQ</h1>
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
            <FaqForm initialValues={initialValues} onSubmit={onSubmit} />
        </div >
    );
}
export default function Page() {
    return (
        <Suspense fallback={<div className="flex justify-center p-8"><AppDotLoader /></div>}>
            <CreateBuyers />
        </Suspense>
    )
}
