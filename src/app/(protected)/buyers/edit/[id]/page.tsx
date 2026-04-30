"use client";
import { AppBreadcrumb } from "@/components/common/AppBreadCrumb";
import AppDotLoader from "@/components/common/NavigationDotloader";
import AppSpinner from "@/components/common/Spinner";
import { useAppDispatch, useGlobalRedirect } from "@/lib/hooks";
import { selectBuyer } from "@/redux/slice";
import { fetchBuyerById, selectBuyerLoading } from "@/redux/slice/buyer.slice";
import { IBuyer, IBuyerFields } from "@/types";
import { RedirectButtonClass } from "@/utils/tailwindCssClassConstant";
import {
    Button
} from "@heroui/react";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BuyerForm from "../../_form/Form";
export default function Page() {
    const dispatch = useAppDispatch();
    const buyer = useSelector(selectBuyer);
    const { id } = useParams();
    const { navigate, isRedirecting } = useGlobalRedirect();
    const loading = useSelector(selectBuyerLoading)
    useEffect(() => {
        if (!id) {
            navigate({ action: "back" });
            return;
        }
        dispatch(fetchBuyerById(id as string))
    }, [id])
    const breadCrumbItems = [
        { label: "Dashboard", path: "/dashboard" },
        { label: "Buyers", path: "/buyers" },
        { label: "Edit", path: "/buyers/edit" },
    ];
    const defaultBuyer: IBuyer = buyer ?? {
        id: "",
        buyerName: "",
        contactPerson: "",
        buyerAddress: "",
        buyerType: "Misc",
        phone: "",
        email: "",
        status: "Active",
        requirementCategory: "",
    };
    const onSubmit = async (_values: IBuyer | IBuyerFields) => {
        await new Promise((res, rej) => setTimeout(() => res(""), 3000));
        return;
    }
    if (!defaultBuyer) {
        return <AppSpinner />
    }
    return (
        <div className="space-y-6 my-6 max-w-3xl ">
            <div className="flex items-center justify-between my-6">
                <div className="flex flex-col gap-3">
                    <AppBreadcrumb items={breadCrumbItems} />
                    <h1 className="text-2xl font-bold text-[#0040A1]">Edit Buyer</h1>
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
                <BuyerForm defaultValues={defaultBuyer} onSubmit={onSubmit} />
            )
            }
        </div >
    );
}
