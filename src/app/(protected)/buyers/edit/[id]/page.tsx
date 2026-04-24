"use client";
import { AppBreadcrumb } from "@/components/common/AppBreadCrumb";
import Card from "@/components/common/AppCard";
import InputField from "@/components/common/InputField";
import AppDotLoader from "@/components/common/NavigationDotloader";
import AppSpinner from "@/components/common/Spinner";
import { BUYER_TYPES, BuyerFormConfig } from "@/configs/forms";
import { useAppDispatch, useGlobalRedirect } from "@/lib/hooks";
import { selectBuyer } from "@/redux/slice";
import { fetchBuyerById, selectBuyerLoading, updateBuyer } from "@/redux/slice/buyer.slice";
import { IBuyer } from "@/types";
import { InputFieldClass, InputFieldErrorMessageClass, InputLabelClass, RedirectButtonClass } from "@/utils/tailwindCssClassConstant";
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
import { useParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { statusOptions } from "../../create/page";
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
    const defaultBuyer: IBuyer = {
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
    const formik = useFormik({
        initialValues: buyer ?? defaultBuyer,
        enableReinitialize: true,
        validationSchema: BuyerSchema,
        onSubmit: async (_values) => {
            await new Promise((res, rej) => setTimeout(() => res(""), 3000));
            const customerWithId = {
                ..._values,
                id: buyer?.id,
            } as IBuyer;
            console.log(customerWithId);
            dispatch(updateBuyer(customerWithId));
            toast.success("Buyer Added successfully");
        },
    });
    const isInvalid = shouldShowError(formik);
    if (!formik.values) {
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
                <form onSubmit={formik.handleSubmit} className="space-y-6 ">
                    <Card>
                        <Card.Header className="p-3">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold">
                                    <BasicInformationIcon />
                                </div>
                                <span>Basic Information <span className="text-gray-400 italic text-sm mb-1">{`#${formik.values.id}`}</span></span>
                            </div>
                        </Card.Header>
                        <Card.Content className="space-y-6  p-6">
                            <div className="flex flex-row w-full gap-2">
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
                                    value={formik.values?.buyerType}
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
                                            {formik.errors?.buyerType as string}
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
                                        value={formik.values?.status}
                                        className="flex flex-col sm:flex-row gap-2 w-full"
                                        aria-label="Status"
                                    >
                                        {statusOptions.map((item) => (
                                            <div
                                                key={item.value}
                                                onClick={() => formik.setFieldValue("status", item.value)}
                                                className={`flex flex-col items-center justify-center gap-2 
                                            w-full sm:basis-1/2 h-20 rounded-lg border cursor-pointer transition-all
                                             ${formik.values?.status ===
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

                </form>
            )}

        </div>
    );
}
