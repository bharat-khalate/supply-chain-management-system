"use client";

import { AppBreadcrumb } from "@/components/common/AppBreadCrumb";
import Card from "@/components/common/AppCard";
import AppSpinner from "@/components/common/Spinner";
import { useAppDispatch, useGlobalRedirect } from "@/lib/hooks";
import { selectBuyer } from "@/redux/slice";
import { fetchBuyerById, selectBuyerLoading } from "@/redux/slice/buyer.slice";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AppDotLoader from "@/components/common/NavigationDotloader";
import { InfoItem } from "@/components/ui/Common";
import { RedirectButtonClass } from "@/utils/tailwindCssClassConstant";
import { Button } from "@heroui/react";
import {
    ConfigurationIcon,
    ProductionSpecificationIcon,
    ProductStatusIcon,
} from "@icons/form-icons";
import { Briefcase, Mail, MapPin, Phone, User } from "lucide-react";
export default function Page() {
    const dispatch = useAppDispatch();
    const buyer = useSelector(selectBuyer);
    const loading = useSelector(selectBuyerLoading);
    const { id } = useParams();
    const { navigate, isRedirecting } = useGlobalRedirect();

    useEffect(() => {
        if (!id) {
            navigate({ action: "back" });
            return;
        }
        dispatch(fetchBuyerById(id as string));
    }, [id, dispatch]);

    const breadCrumbItems = [
        { label: "Dashboard", path: "/dashboard" },
        { label: "Buyers", path: "/buyers" },
        { label: "View Details", path: "" },
    ];
    if (loading || !buyer) return <AppSpinner />;
    return (
        <div className="p-6 max-w-6xl mx-auto space-y-8">
            <div className="flex items-center justify-between my-6">
                <div className="flex flex-col gap-3">
                    <AppBreadcrumb items={breadCrumbItems} />
                    <h1 className="text-2xl font-bold text-[#0040A1]">Buyer Detail</h1>
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
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-blue-50 border-2 border-blue-100 flex items-center justify-center text-olive-500 shadow-inner">
                    <User className="h-full w-full text-xs" />
                </div>
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-slate-800">{buyer.buyerName}</h2>
                    <div className="flex items-center gap-4 text-slate-500 text-sm">
                        <span className="flex items-center gap-1.5">
                            <MapPin size={16} className="text-blue-500" /> {buyer.buyerAddress}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium text-xs uppercase tracking-wider">
                            {buyer.status}
                        </span>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs ms-1 text-olive-500 italic">
                        {buyer.id}
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                    <Card.Header className="border-b border-slate-50 p-5 flex items-center gap-2 font-semibold text-slate-700">
                        <ProductionSpecificationIcon />
                        Contact Information
                    </Card.Header>
                    <Card.Content className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                        <InfoItem icon={<User size={18} />} label="Primary Contact" value={buyer.contactPerson} />
                        <InfoItem icon={<Phone size={18} />} label="Phone Number" value={buyer.phone} />
                        <InfoItem icon={<Mail size={18} />} label="Email Address" value={buyer.email} />
                        <InfoItem icon={<Briefcase size={18} />} label="Requirement" value={buyer.requirementCategory} />
                    </Card.Content>
                </Card>
                <div className="space-y-6">
                    <Card>
                        <Card.Header className="border-b border-slate-50 p-5 flex items-center gap-2 font-semibold text-slate-700">
                            <ConfigurationIcon />
                            Status & Specs
                        </Card.Header>
                        <Card.Content className="p-6 space-y-4">
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Category</p>
                                <p className="text-slate-700 font-medium">{buyer.requirementCategory}</p>
                            </div>
                            <hr className="border-slate-50" />
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Current Status</p>
                                <div className="inline-flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-lg border border-green-100">
                                    <ProductStatusIcon />
                                    <span className="text-sm font-semibold">{buyer.status}</span>
                                </div>
                            </div>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        </div>
    );
}
