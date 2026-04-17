'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from './Sidebar';
import DashboardHeader from './Header';
import { PagesTopLoader } from 'nextjs-toploader/pages';
import { useGlobalRedirect } from '@/lib/hooks';
import NextTopLoader from 'nextjs-toploader';
export function AppShell({ children }: { children: React.ReactNode }) {

    const [open, setOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-[#F6FAFE]">
            <Sidebar open={open} setOpen={setOpen} />
            <main className="h-screen flex-1 overflow-y-auto scrollbar-hide md:ms-64">
                <div className="p-4 md:hidden flex items-center justify-between bg-white">
                    <button
                        onClick={() => setOpen(true)}
                        className="px-3 py-2 bg-green-50 shadow-md rounded-md text-gray-600 hover:bg-gray-50 transition"
                    >
                        ≡
                    </button>
                    <button
                        onClick={() => { }}
                        className="flex items-center gap-3  px-4 py-2.5 rounded-lg text-sm font-medium bg-red-50 shadow-md rounded-md text-gray-600 hover:bg-red-600 hover:text-white transition-colors "
                    >
                        <span>Logout</span>
                        <span>🚪</span>
                    </button>
                </div>
                <div className="md:max-w-7xl md:mx-auto px-6 py-8">
                    <DashboardHeader />
                    <NextTopLoader />
                    {children}
                </div>
            </main>
        </div>
    );
}
