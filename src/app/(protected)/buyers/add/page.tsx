"use client";

import { AppBreadcrumb } from "@/components/common/AppBreadCrumb";
import Card from "@/components/common/AppCard";
import { usePathname } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { addBuyer } from "@/store/slice";
import { useAppDispatch } from "@/lib/hooks";

import * as z from "zod";

import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";

import { Input, TextField, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import toast from "react-hot-toast";

export const buyerSchema = z.object({
    buyerName: z.string().min(2, "Buyer name required"),
    buyerAddress: z.string().min(5),
    phone: z.string().min(10),
    email: z.email("Invalid email"),
    contactPerson: z.string().min(2),
    buyerType: z.enum([
        "Retailer",
        "Wholesaler",
        "Brand",
        "Corporate",
        "Institutional",
        "Enterprise",
        "Misc",
    ]),
    requirementCategory: z.string().min(2, "Category name required"),
    status: z.enum(["Active", "Inactive"]),
});





export interface AddBuyerType {
    buyerName: string,
    buyerAddress: string;
    phone: string;
    email: string;
    contactPerson: string;
    buyerType: "Retailer" | "Wholesaler" | "Brand" | "Corporate" | "Institutional" | "Enterprise" | "Misc";
    requirementCategory: string;
    status: "Active" | "Inctive";
}




export default function OnBoardVendor() {

    const pathName = usePathname();
    const router = useRouter();
    const dispatch = useAppDispatch();

    const breadCrumbItems = pathName
        .split("/")
        .filter(Boolean)
        .map((segment, index, arr) => ({
            label: segment,
            href: "/" + arr.slice(0, index + 1).join("/"),
        }));

    const form = useForm<z.infer<typeof buyerSchema>>({
        resolver: zodResolver(buyerSchema),
        defaultValues: {
            buyerName: "",
            buyerAddress: "",
            phone: "",
            email: "",
            contactPerson: "",
            requirementCategory: "",
            buyerType: "Misc",
            status: "Active",
        },
    });

    const onSubmit = (data: z.infer<typeof buyerSchema>) => {
        const customerWithId = {
            ...data,
            id: crypto.randomUUID() // Generates a unique 36-character string
        };
        dispatch(addBuyer(customerWithId))
        toast.success("Buyer Added successfully")
        router.back();
    };

    return (
        <div className="space-y-6 my-6 max-w-3xl">

            <div className="flex items-center justify-start my-6">
                <div className="flex flex-col gap-3">
                    <AppBreadcrumb items={breadCrumbItems} />
                    <h1 className="text-2xl font-bold text-[#0040A1]">Orders Overview</h1>

                </div>

            </div>



            <form onSubmit={form.handleSubmit(onSubmit, (errors) => {
                console.log("FORM ERRORS:", errors);
            })} className="space-y-6">

                {/* BASIC DETAILS */}
                <Card>
                    <Card.Header >
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold">
                                i
                            </div>
                            <span>Basic Information</span>
                        </div>
                    </Card.Header>

                    <Card.Content className="space-y-6">

                        <FieldGroup className="grid grid-cols-2 gap-4">

                            {/* Buyer Name */}
                            <Controller
                                name="buyerName"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel>Buyer Name</FieldLabel>

                                        <Input
                                            {...field}
                                            placeholder="Enter buyer name"
                                            fullWidth
                                        />

                                        {fieldState.error && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            {/* Contact Person */}
                            <Controller
                                name="contactPerson"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel>Contact Person</FieldLabel>

                                        <Input
                                            {...field}
                                            placeholder="Contact person"
                                            fullWidth
                                        />

                                        {fieldState.error && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                        </FieldGroup>

                        {/* Address */}
                        <Controller
                            name="buyerAddress"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Address</FieldLabel>

                                    <TextField
                                        {...field}
                                        multiline
                                        rows={3}
                                        fullWidth
                                    />

                                    {fieldState.error && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                    </Card.Content>
                </Card>

                {/* PRODUCTION SPECIFICATION */}
                <Card>
                    <Card.Header>Production Specifications</Card.Header>

                    <Card.Content>

                        <div className="grid grid-cols-3 gap-4">

                            <Controller
                                name="buyerType"
                                control={form.control}
                                defaultValue="Misc"
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel>Buyer Type</FieldLabel>
                                        <TextField
                                            {...field}
                                            label="Buyer Type"
                                            select
                                            fullWidth
                                        >
                                            <MenuItem value="Retailer">Retailer</MenuItem>
                                            <MenuItem value="Wholesaler">Wholesaler</MenuItem>
                                            <MenuItem value="Brand">Brand</MenuItem>
                                            <MenuItem value="Corporate">Corporate</MenuItem>
                                            <MenuItem value="Institutional">Institutional</MenuItem>
                                            <MenuItem value="Enterprise">Enterprise</MenuItem>
                                            <MenuItem value="Misc">Misc</MenuItem>
                                        </TextField>
                                        {fieldState.error && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="phone"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel>Phone</FieldLabel>
                                        <TextField
                                            {...field}
                                            label="Phone"
                                            fullWidth
                                        />
                                        {fieldState.error && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="email"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel>Email</FieldLabel>
                                        <TextField
                                            {...field}
                                            label="Email"
                                            fullWidth
                                        />
                                        {fieldState.error && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="requirementCategory"


                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid} className="col-span-3">
                                        <FieldLabel>Category</FieldLabel>
                                        <Input
                                            {...field}

                                            fullWidth
                                        />
                                        {fieldState.error && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />


                        </div>

                    </Card.Content>
                </Card>




                {/* ACTION BUTTONS */}
                <div className="flex justify-end gap-4">

                    <button
                        type="button"
                        className="px-6 py-2 border rounded"
                        onClick={() => router.back()}
                    >
                        Cancel
                    </button>


                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded"
                    >
                        Save Product
                    </button>

                </div>

            </form>
        </div>
    );
}