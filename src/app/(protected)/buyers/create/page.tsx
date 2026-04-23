"use client";
import { AppBreadcrumb } from "@/components/common/AppBreadCrumb";
import Card from "@/components/common/AppCard";
import { BuyerFormConfig } from "@/configs/forms";
import InputField from "@/components/common/InputField";
import AppDotLoader from "@/components/common/NavigationDotloader";
import { useAppDispatch, useGlobalRedirect } from "@/lib/hooks";
import { addBuyer } from "@/redux/slice";
import { IBuyer } from "@/types";
import { FormButtonDivClass, InputFieldClass, InputFieldErrorMessageClass, InputLabelClass, RedirectButtonClass, ResetFormButtonClass, SubmitButtonClass } from "@/utils/tailwindCssClassConstant";
import { shouldShowError } from "@/utils/validations";
import { BuyerSchema } from "@/validations";
import {
  Button,
  FieldError, Label,
  ListBox, RadioGroup, Select
} from "@heroui/react";
import {
  BasicInformationIcon,
  ConfigurationIcon,
  ProductionSpecificationIcon,
  ProductStatusIcon,
} from "@icons/form-icons";
import { useFormik } from "formik";
import { Ban, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
export const BUYER_TYPES = [
  { id: "Retailer", name: "Retailer" },
  { id: "Wholesaler", name: "Wholesaler" },
  { id: "Brand", name: "Brand" },
  { id: "Corporate", name: "Corporate" },
  { id: "Institutional", name: "Institutional" },
  { id: "Enterprise", name: "Enterprise" },
  { id: "Misc", name: "Misc" },
];
export const statusOptions = [
  { value: "Active", label: "Active", icon: <CheckCircle size={18} /> },
  { value: "Inactive", label: "Inactive", icon: <Ban size={18} /> },
];
export default function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [showValidation, setShowValidation] = useState(false);
  const breadCrumbItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Buyers", path: "/buyers" },
    { label: "Add", path: "/buyers/create" },
  ];
  const { navigate, isRedirecting } = useGlobalRedirect();
  const initialValues = {
    buyerName: "",
    email: "",
    phone: "",
    buyerAddress: "",
    contactPerson: "",
    requirementCategory: "",
    buyerType: "",
    status: "Active" as "Active" | "Inactive",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: BuyerSchema,
    onSubmit: async (_values) => {
      await new Promise((res, rej) => setTimeout(() => res(""), 3000));
      const customerWithId = {
        ..._values,
        id: crypto.randomUUID(),
      } as IBuyer;
      dispatch(addBuyer(customerWithId));
      toast.success("Buyer Added successfully");
      router.back();
    },
  });
  const isInvalid = shouldShowError(formik);
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
      <form onSubmit={formik.handleSubmit} className="space-y-6 ">
        <Card>
          <Card.Header className="p-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold">
                <BasicInformationIcon />
              </div>
              <span>Basic Information</span>
            </div>
          </Card.Header>
          <Card.Content className="space-y-6  p-6">
            <div className="flex flex-row w-full gap-1">
              <InputField formik={formik} fieldConstant={BuyerFormConfig.buyerName} />
              <InputField formik={formik} fieldConstant={BuyerFormConfig.contactPerson} />
            </div>
            <InputField formik={formik} fieldConstant={BuyerFormConfig.buyerAddress} />
          </Card.Content>
        </Card>
        <Card>
          <Card.Header className="p-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold">
                <ProductionSpecificationIcon />
              </div>
              <span>Production Specifications</span>
            </div>
          </Card.Header>
          <Card.Content className="space-y-6  p-6">
            <div className="flex flex-row gap-2">
              {/* Fixed Select Placeholder & Trigger styling */}
              <Select
                isRequired
                className={` w-full space-y-2 basis-1/3 `}
                value={formik.values.buyerType}
                name="buyerType"
                placeholder="Select one"
                onChange={(key) => {
                  formik.setFieldValue("buyerType", String(key));
                  formik.setFieldTouched("buyerType", true);
                }}
                aria-label="Type"
                onOpenChange={(isOpen) => {
                  if (!isOpen) {
                    formik.setFieldTouched("buyerType", true);
                  }
                }}
                isInvalid={isInvalid("buyerType")}
              >
                <Label className={InputLabelClass}>
                  Buyer Type
                </Label>
                <Select.Trigger className={InputFieldClass}>
                  {/* Place placeholder directly in Select.Value */}
                  <Select.Value className="placeholder:text-gray-400 text-gray-700 " />
                  <Select.Indicator className="ml-2 text-gray-400" />
                </Select.Trigger>
                <Select.Popover className="min-w-[var(--trigger-width)]">
                  <ListBox className="bg-white border rounded-md shadow-lg p-1">
                    {BUYER_TYPES.map((type) => (
                      <ListBox.Item
                        key={type.id}
                        id={type.id}
                        textValue={type.name}
                        className="px-2 py-1.5 text-sm rounded-sm cursor-pointer outline-none hover:bg-slate-100 focus:bg-slate-100"
                      >
                        {type.name}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
                {isInvalid("buyerType") && (
                  <FieldError className={InputFieldErrorMessageClass}>
                    {formik.errors.buyerType as string}
                  </FieldError>
                )}
              </Select>
              <InputField formik={formik} fieldConstant={BuyerFormConfig.phone} />
              <InputField formik={formik} fieldConstant={BuyerFormConfig.email} />
            </div>
          </Card.Content>
        </Card>
        <div className="flex flex-row gap-3">
          <Card className="w-1/2">
            <Card.Header className="p-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold">
                  <ProductStatusIcon />
                </div>
                <span>Product Status</span>
              </div>
            </Card.Header>
            <Card.Content className="space-y-6  p-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <RadioGroup
                  value={formik.values.status}
                  className="flex flex-col sm:flex-row gap-2 w-full"
                  aria-label="Status"
                >
                  {statusOptions.map((item) => (
                    <div
                      key={item.value}
                      onClick={() => formik.setFieldValue("status", item.value)}
                      className={`flex flex-col items-center justify-center gap-2 
                                            w-full sm:basis-1/2 h-20 rounded-lg border cursor-pointer transition-all
                                             ${formik.values.status ===
                          item.value
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                        }`}
                    >
                      <div>{item.icon}</div>
                      <span className="text-sm font-medium w-full text-center">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </Card.Content>
          </Card>
          <Card className="w-1/2">
            <Card.Header className="p-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold">
                  <ConfigurationIcon />
                </div>
                <span>Configuration</span>
              </div>
            </Card.Header>
            <Card.Content className="space-y-6  p-6">
              <InputField formik={formik} fieldConstant={BuyerFormConfig.requirementCategory} />
            </Card.Content>
          </Card>
        </div>
        <div className={FormButtonDivClass}>
          <Button
            variant="ghost"
            onPress={() => formik.resetForm()}
            className={ResetFormButtonClass}
          >
            Reset
          </Button>
          <Button
            type="submit"
            className={SubmitButtonClass}
            isPending={formik.isSubmitting}
            onPress={() => setShowValidation(true)}
          >
            {formik.isSubmitting ? <AppDotLoader /> : "Save Buyer"}
          </Button>
        </div>
      </form>
    </div>
  );
}
