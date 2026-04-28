"use client";
import { AppBreadcrumb } from "@/components/common/AppBreadCrumb";
import AppDotLoader from "@/components/common/NavigationDotloader";
import { useAppDispatch, useGlobalRedirect } from "@/lib/hooks";
import { addBuyer } from "@/redux/slice";
import { IBuyer, IBuyerFields } from "@/types";
import { RedirectButtonClass } from "@/utils/tailwindCssClassConstant";
import {
  Button
} from "@heroui/react";
import { Suspense } from "react";
import toast from "react-hot-toast";
import BuyerForm from "../_form/Form";
export function CreateBuyers() {
  const dispatch = useAppDispatch();

  const breadCrumbItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Buyers", path: "/buyers" },
    { label: "Add", path: "/buyers/create" },
  ];
  const { navigate, isRedirecting } = useGlobalRedirect();
  const initialValues: IBuyerFields = {
    buyerName: "",
    email: "",
    phone: "",
    buyerAddress: "",
    contactPerson: "",
    requirementCategory: "",
    buyerType: "",
    status: "Active" as "Active" | "Inactive",
  };
  const onSubmit = async (_values: IBuyerFields) => {
    await new Promise((res) => setTimeout(() => res(""), 3000));
    const customerWithId = {
      ..._values,
      id: crypto.randomUUID(),
    } as IBuyer;
    dispatch(addBuyer(customerWithId));
    toast.success("Buyer Added successfully");
    navigate({action:"back"})
  }
  return (
    <div className="space-y-6 my-6 max-w-3xl ">
      <div className="flex items-center justify-between my-6">
        <div className="flex flex-col gap-3">
          <AppBreadcrumb items={breadCrumbItems} />
          <h1 className="text-2xl font-bold text-[#0040A1]">Create Buyer</h1>
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
      <BuyerForm defaultValues={initialValues} onSubmit={onSubmit} />
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
