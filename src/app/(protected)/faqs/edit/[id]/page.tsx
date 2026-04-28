"use client";
import { AppBreadcrumb } from "@/components/common/AppBreadCrumb";
import AppDotLoader from "@/components/common/NavigationDotloader";
import AppSpinner from "@/components/common/Spinner";
import { useAppDispatch, useGlobalRedirect } from "@/lib/hooks";
import { IFAQ } from "@/types";
import { RedirectButtonClass } from "@/utils/tailwindCssClassConstant";
import {
    Button
} from "@heroui/react";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import FaqForm from "../../_form/FaqForm";
import { useSelector } from "react-redux";
import { selectSelectedFaq } from "@/redux/slice";
import { fetchFaqById, updateFaq } from "@/redux/slice/faq.slice";
export default function Page() {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { navigate, isRedirecting } = useGlobalRedirect();
    const faq = useSelector(selectSelectedFaq);
    useEffect(() => {
        if (!id) {
            navigate({ action: "back" });
            return;
        }
        dispatch(fetchFaqById(id as string));
    }, [id])
    const breadCrumbItems = [
        { label: "Dashboard", path: "/dashboard" },
        { label: "FAQ", path: "/faqs" },
        { label: "Create", path: "/faqs/edit" },
    ];
    const defaultFaq: IFAQ = {
        id: "faq-10",
        question: "How to close an enquiry?",
        answer: "Open enquiry details and mark it as closed.",
        sequence: 10,
        category: "ENQUIRY",
        createdOn: "2024-01-10",
        status: "Inactive",
    };
    const { id: _id, ...initialValues } = faq || defaultFaq;
    const onSubmit = async (_values: Omit<IFAQ, "id">) => {
        await new Promise((res, rej) => setTimeout(() => res(""), 3000));
        dispatch(updateFaq({ ..._values, id: id as string }));
        return;
    }
    if (!initialValues) {
        return <AppSpinner />
    }
    return (
        <div className="space-y-6 my-6 max-w-3xl ">
            <div className="flex items-center justify-between my-6">
                <div className="flex flex-col gap-3">
                    <AppBreadcrumb items={breadCrumbItems} />
                    <h1 className="text-2xl font-bold text-[#0040A1]">Edit FAQ</h1>
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
            {false ? (
                <AppSpinner />
            ) : (
                <FaqForm initialValues={initialValues} onSubmit={onSubmit} id={id as string} />
            )
            }
        </div >
    );
}
