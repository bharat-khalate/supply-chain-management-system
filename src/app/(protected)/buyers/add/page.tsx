"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useFormik } from "formik";
import toast from "react-hot-toast";

import { 
  Button, 
  FieldError, 
  Label, 
  ListBox, 
  Select, 
  TextField, 
  Input 
} from "@heroui/react";
import { AppBreadcrumb } from "@/components/common/AppBreadCrumb";
import Card from "@/components/common/AppCard";
import { addBuyer } from "@/redux/slice";
import { useAppDispatch } from "@/lib/hooks";
import { BuyerSchema } from "@/utils/validationSchemas";
import { IBuyer } from "@/utils/data";
import { shouldShowError } from "@/utils/validations";
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

    const breadCrumbItems = pathName
        .split("/")
        .filter(Boolean)
        .map((segment, index, arr) => ({
            label: segment,
            href: "/" + arr.slice(0, index + 1).join("/"),
        }));

    const formik = useFormik({
        initialValues: {
            buyerName: "",
            email: "",
            phone: "",
            buyerAddress: "",
            contactPerson: "",
            requirementCategory: "",
            buyerType: "Misc",
            status: "Active",
        },
        validationSchema: BuyerSchema,
        onSubmit: async (_values) => {
            const customerWithId = {
                ..._values,
                id: crypto.randomUUID()
            } as IBuyer;
            dispatch(addBuyer(customerWithId));
            toast.success("Buyer Added successfully");
            router.back();
        }
    });
    const isInvalid = (fieldName: string) => !!shouldShowError(fieldName, formik, showValidation);
    // Reusable Input className to match your working example exactly
    const inputClassName = "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors data-[invalid=true]:border-destructive data-[invalid=true]:focus-visible:ring-destructive focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50";
    return (
        <div className="space-y-6 my-6 max-w-3xl">
            <div className="flex items-center justify-start my-6">
                <div className="flex flex-col gap-3">
                    <AppBreadcrumb items={breadCrumbItems} />
                    <h1 className="text-2xl font-bold text-[#0040A1]">Add Buyer</h1>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
                <Card>
                    <Card.Header>
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold">i</div>
                            <span>Basic Information</span>
                        </div>
                    </Card.Header>
                    <Card.Content className="space-y-6 pt-4">
                        <TextField isRequired isInvalid={isInvalid("buyerName")} className="space-y-2">
                            <Label className="text-sm font-medium leading-none">Name</Label>
                            <Input
                                name="buyerName"
                                placeholder="Enter Buyer Name"
                                className={inputClassName}
                                value={formik.values.buyerName}
                                onChange={(e) => formik.setFieldValue("buyerName", e.target.value.trimStart())}
                                onBlur={formik.handleBlur}
                            />
                            {isInvalid("buyerName") && (
                                <FieldError className="text-[0.8rem] font-medium text-destructive">
                                    {formik.errors.buyerName as string}
                                </FieldError>
                            )}
                        </TextField>

                        <TextField isInvalid={isInvalid("contactPerson")} className="space-y-2">
                            <Label className="text-sm font-medium leading-none">Contact Person</Label>
                            <Input
                                name="contactPerson"
                                placeholder="Enter contact person name"
                                className={inputClassName}
                                value={formik.values.contactPerson}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {isInvalid("contactPerson") && (
                                <FieldError className="text-[0.8rem] font-medium text-destructive">
                                    {formik.errors.contactPerson as string}
                                </FieldError>
                            )}
                        </TextField>

                        <TextField isInvalid={isInvalid("buyerAddress")} className="space-y-2">
                            <Label className="text-sm font-medium leading-none">Address</Label>
                            <Input
                                name="buyerAddress"
                                placeholder="Enter address"
                                className={inputClassName}
                                value={formik.values.buyerAddress}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
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
                    <Card.Header>Production Specifications</Card.Header>
                    <Card.Content className="space-y-6 pt-4">
                        {/* Fixed Select Placeholder & Trigger styling */}
                        <Select 
                            className="w-full space-y-2" 
                            name="buyerType" 
                            onSelectionChange={(key) => formik.setFieldValue("buyerType", String(key))}
                        >
                            <Label className="text-sm font-medium leading-none">Buyer Type</Label>
                            <Select.Trigger className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring">
                                {/* Place placeholder directly in Select.Value */}
                                <Select.Value placeholder="Select one" />
                                <Select.Indicator className="ml-2 opacity-50" />
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
                        </Select>

                        <TextField isInvalid={isInvalid("phone")} className="space-y-2">
                            <Label className="text-sm font-medium leading-none">Phone</Label>
                            <Input
                                name="phone"
                                placeholder="Enter phone number"
                                className={inputClassName}
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {isInvalid("phone") && (
                                <FieldError className="text-[0.8rem] font-medium text-destructive">
                                    {formik.errors.phone as string}
                                </FieldError>
                            )}
                        </TextField>

                        <TextField isInvalid={isInvalid("email")} className="space-y-2">
                            <Label className="text-sm font-medium leading-none">Email</Label>
                            <Input
                                name="email"
                                placeholder="Enter email address"
                                className={inputClassName}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {isInvalid("email") && (
                                <FieldError className="text-[0.8rem] font-medium text-destructive">
                                    {formik.errors.email as string}
                                </FieldError>
                            )}
                        </TextField>
                    </Card.Content>
                </Card>

                <div className="flex justify-end gap-4">
                    <Button 
                        variant="flat" 
                        onPress={() => router.back()}
                        className="px-4 py-2 text-sm font-medium rounded-md border border-input hover:bg-accent"
                    >
                        Cancel
                    </Button>
                    <Button 
                        type="submit" 
                        className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-md shadow hover:bg-blue-700"
                        isLoading={formik.isSubmitting}
                        onPress={() => setShowValidation(true)}
                    >
                        Save Buyer
                    </Button>
                </div>
            </form>
        </div>
    );
}