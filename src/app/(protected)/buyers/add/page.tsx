"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useFormik } from "formik";
import { RadioGroup } from "@heroui/react";
import { CheckCircle, Ban } from "lucide-react";
import toast from "react-hot-toast";
import {
    Button,
    FieldError,
    Label,
    ListBox,
    Select,
    TextField,
    Input,
    TextArea
} from "@heroui/react";
import { AppBreadcrumb } from "@/components/common/AppBreadCrumb";
import Card from "@/components/common/AppCard";
import { addBuyer } from "@/redux/slice";
import { useAppDispatch } from "@/lib/hooks";
import { BuyerSchema } from "@/utils/validationSchemas";
import { IBuyer } from "@/utils/data";
import { shouldShowError } from "@/utils/validations";
import { BasicInformationIcon, ConfigurationIcon, ProductionSpecificationIcon, ProductStatusIcon } from "@icons/form-icons";
import AppDotLoader from "@/components/common/NavigationDotloader";
import path from "path";
const BUYER_TYPES = [
    { id: "Retailer", name: "Retailer" },
    { id: "Wholesaler", name: "Wholesaler" },
    { id: "Brand", name: "Brand" },
    { id: "Corporate", name: "Corporate" },
    { id: "Institutional", name: "Institutional" },
    { id: "Enterprise", name: "Enterprise" },
    { id: "Misc", name: "Misc" },
];
export default function OnBoardVendor() {
    const pathName = usePathname();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [showValidation, setShowValidation] = useState(false);
    const statusOptions = [
        { value: "Active", label: "Active", icon: <CheckCircle size={18} /> },
        { value: "Inactive", label: "Inactive", icon: <Ban size={18} /> },
    ];
    const breadCrumbItems = [{ label: "Dashboard", path: "/dashboard" }, { label: "Buyers", path: "/buyers" }, { label: "Add", path: "/buyers/add" }]
    const initialValues = {
        buyerName: "",
        email: "",
        phone: "",
        buyerAddress: "",
        contactPerson: "",
        requirementCategory: "",
        buyerType: "",
        status: "Active",
    }
    const formik = useFormik({
        initialValues,
        validationSchema: BuyerSchema,
        onSubmit: async (_values) => {
            await new Promise((res, rej) => setTimeout(() => res(""), 3000))
            const customerWithId = {
                ..._values,
                id: crypto.randomUUID()
            } as IBuyer;
            dispatch(addBuyer(customerWithId));
            toast.success("Buyer Added successfully");
            router.back();
        }
    });
    const isInvalid = (fieldName: keyof typeof initialValues) => !!(formik.touched[fieldName] && formik.errors[fieldName]);
    const inputClassName = `flex  w-full rounded-lg border border-gray-200 bg-gray-100 rounded-xs px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm transition-colors focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none data-[invalid=true]:border-red-500 data-[invalid=true]:bg-red-50 data-[invalid=true]:focus:ring-red-500/20 disabled:cursor-not-allowed disabled:opacity-60`;
    return (
        <div className="space-y-6 my-6 max-w-3xl ">
            <div className="flex items-center justify-start my-6">
                <div className="flex flex-col gap-3">
                    <AppBreadcrumb items={breadCrumbItems} />
                    <h1 className="text-2xl font-bold text-[#0040A1]">Add Buyer</h1>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit} className="space-y-6 ">
                <Card>
                    <Card.Header>
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold"><BasicInformationIcon /></div>
                            <span>Basic Information</span>
                        </div>
                    </Card.Header>
                    <Card.Content className="space-y-6 pt-4">
                        <div className="flex flex-row w-full gap-1">
                            <TextField isRequired isInvalid={isInvalid("buyerName")} className="space-y-2 basis-1/2">
                                <Label className="text-sm font-medium leading-none">Name</Label>
                                <Input
                                    name="buyerName"
                                    placeholder="Enter Buyer Name"
                                    className={inputClassName}
                                    value={formik.values.buyerName}
                                    onChange={(e) => formik.setFieldValue("buyerName", e.target.value.trimStart())}
                                    onBlur={formik.handleBlur}
                                    aria-label="Name"
                                />
                                {isInvalid("buyerName") && (
                                    <FieldError className="text-[0.8rem] font-medium text-destructive">
                                        {formik.errors.buyerName as string}
                                    </FieldError>
                                )}
                            </TextField>
                            <TextField isRequired isInvalid={isInvalid("contactPerson")} className="space-y-2 basis-1/2">
                                <Label className="text-sm font-medium leading-none">Contact Person</Label>
                                <Input
                                    name="contactPerson"
                                    placeholder="Enter contact person name"
                                    className={inputClassName}
                                    value={formik.values.contactPerson}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    aria-label="Contact Person"
                                />
                                {isInvalid("contactPerson") && (
                                    <FieldError className="text-[0.8rem] font-medium text-destructive">
                                        {formik.errors.contactPerson as string}
                                    </FieldError>
                                )}
                            </TextField>
                        </div>
                        <TextField isRequired isInvalid={isInvalid("buyerAddress")} className="space-y-2">
                            <Label className="text-sm font-medium leading-none">Address</Label>
                            <TextArea
                                name="buyerAddress"
                                placeholder="Enter address"
                                className={`${inputClassName}`}
                                value={formik.values.buyerAddress}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                rows={3}
                                aria-label="Address"
                            />
                            {isInvalid("buyerAddress") && (
                                <FieldError className="text-[0.8rem] font-medium text-destructive">
                                    {formik.errors.buyerAddress as string}
                                </FieldError>
                            )}
                        </TextField>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Header>
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold"><ProductionSpecificationIcon /></div>
                            <span>Production Specifications</span>
                        </div>
                    </Card.Header>
                    <Card.Content className="space-y-6 pt-4">
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
                                <Label className="text-sm font-medium leading-none">Buyer Type</Label>
                                <Select.Trigger className={inputClassName} >
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
                                    <FieldError className="text-[0.8rem] font-medium text-destructive">
                                        {formik.errors.buyerType as string}
                                    </FieldError>

                                )}
                            </Select>


                            <TextField isRequired isInvalid={isInvalid("phone")} className="space-y-2">
                                <Label className="text-sm font-medium leading-none">Phone</Label>
                                <Input
                                    name="phone"
                                    placeholder="Enter phone number"
                                    className={`${inputClassName} basis-1/3`}
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    aria-label="Phone"
                                />
                                {isInvalid("phone") && (
                                    <FieldError className="text-[0.8rem] font-medium text-destructive">
                                        {formik.errors.phone as string}
                                    </FieldError>

                                )}
                            </TextField>
                            <TextField isRequired isInvalid={isInvalid("email")} className="space-y-2">
                                <Label className="text-sm font-medium leading-none">Email</Label>
                                <Input
                                    name="email"
                                    placeholder="Enter email address"
                                    className={`${inputClassName} basis-1/3`}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    aria-label="Email"
                                />
                                {isInvalid("email") && (
                                    <FieldError className="text-[0.8rem] font-medium text-destructive">
                                        {formik.errors.email as string}
                                    </FieldError>
                                )}
                            </TextField>
                        </div>
                    </Card.Content>
                </Card>
                <div className="flex flex-row gap-3">
                    <Card className="w-1/2">
                        <Card.Header>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold"><ProductStatusIcon /></div>
                                <span>Product Status</span>
                            </div>
                        </Card.Header>
                        <Card.Content className="space-y-6 pt-4">
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
                                             ${formik.values.status === item.value
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
                        <Card.Header>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold"><ConfigurationIcon /></div>
                                <span>Configuration</span>
                            </div>
                        </Card.Header>
                        <Card.Content className="space-y-6 pt-4">
                            {/* Fixed Select Placeholder & Trigger styling */}
                            <TextField isRequired isInvalid={isInvalid("requirementCategory")} className="space-y-2">
                                <Label className="text-sm font-medium leading-none">Requirement Category</Label>
                                <Input
                                    name="requirementCategory"
                                    placeholder="Enter Category"
                                    className={`${inputClassName} `}
                                    value={formik.values.requirementCategory}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    aria-label="Requirement CategoryF"
                                />
                                {isInvalid("requirementCategory") && (
                                    <FieldError className="text-[0.8rem] font-medium text-destructive">
                                        {formik.errors.requirementCategory as string}
                                    </FieldError>
                                )}
                            </TextField>

                        </Card.Content>
                    </Card>
                </div>
                <div className="flex justify-end gap-4">
                    <Button
                        variant="ghost"
                        onPress={() => formik.resetForm()}
                        className="px-4 py-2 text-sm font-medium rounded-md border border-input hover:bg-accent"
                    >
                        Reset
                    </Button>
                    <Button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-md shadow hover:bg-blue-700"
                        isPending={formik.isSubmitting}
                        onPress={() => setShowValidation(true)}
                    >
                        {formik.isSubmitting ? <AppDotLoader /> : "Save Buyer"}
                        {/* Save Buyer */}
                    </Button>
                </div>
            </form>
        </div>
    );
}