"use client"

import React, { useState } from 'react';
import SettingShell from "@/components/common/settings-layout/SettingsShell";

export default function ManageTermsConditions() {
    const [distributorTerms, setDistributorTerms] = useState("Terms & Conditions Distributor content...");
    const [retailerTerms, setRetailerTerms] = useState("Terms & Conditions Retailer content...");

    return (
        <SettingShell title="Manage Terms & Conditions">
            <div className="flex flex-col w-full bg-white rounded-lg shadow-sm border border-gray-200 p-6 relative">
                
                <button className="absolute top-4 right-6 px-4 py-1 border border-gray-300 rounded text-xs text-gray-600 hover:bg-gray-50 flex items-center gap-1">
                    <span className="text-[10px]">←</span> Back
                </button>

                <div className="border-b border-gray-200 mb-6">
                    <button className="border-b-2 border-blue-500 pb-2 px-4 text-sm font-medium text-blue-600">
                        Details
                    </button>
                </div>

                <div className="space-y-8">
                    {/* Distributor Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-gray-700 uppercase">
                            Terms & Conditions for Distributor<span className="text-red-500">*</span>
                        </label>
                        <div className="border border-blue-400 rounded-md overflow-hidden flex flex-col bg-white">
                            <div className="flex items-center gap-4 px-3 py-2 border-b border-gray-200 bg-[#F9FAFB] text-gray-400 text-xs">
                                <span className="font-bold">B</span> <i>I</i> <u>U</u> <span className="line-through">S</span>
                                <div className="h-4 w-[1px] bg-gray-300 mx-1" />
                                <span>Normal ▾</span>
                            </div>
                            <textarea 
                                className="p-4 min-h-[220px] w-full outline-none resize-none text-sm text-gray-700 leading-relaxed"
                                value={distributorTerms}
                                onChange={(e) => setDistributorTerms(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Retailer Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-gray-700 uppercase">
                            Terms & Conditions for Retailer<span className="text-red-500">*</span>
                        </label>
                        <div className="border border-blue-400 rounded-md overflow-hidden flex flex-col bg-white">
                            <div className="flex items-center gap-4 px-3 py-2 border-b border-gray-200 bg-[#F9FAFB] text-gray-400 text-xs">
                                <span className="font-bold">B</span> <i>I</i> <u>U</u> <span className="line-through">S</span>
                                <div className="h-4 w-[1px] bg-gray-300 mx-1" />
                                <span>Normal ▾</span>
                            </div>
                            <textarea 
                                className="p-4 min-h-[220px] w-full outline-none resize-none text-sm text-gray-700 leading-relaxed"
                                value={retailerTerms}
                                onChange={(e) => setRetailerTerms(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3 mt-10">
                    <button className="px-5 py-1.5 border border-gray-300 text-xs font-medium text-gray-600 rounded">Reset</button>
                    <button className="px-6 py-1.5 bg-[#52668D] text-xs font-medium text-white rounded shadow-sm">Save</button>
                </div>
            </div>
        </SettingShell>
    );
}