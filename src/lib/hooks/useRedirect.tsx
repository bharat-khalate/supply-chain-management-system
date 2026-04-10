// context/LoadingContext.tsx
"use client";

import React, { createContext, useContext, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

const LoadingContext = createContext({
    isRedirecting: false,
    navigate: (href: string) => { },
});

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
    const [isRedirecting, startTransition] = useTransition();
    const router = useRouter();

    const navigate = (href: string) => {
        startTransition(() => {
            router.push(href);
        });
    };

    return (
        <LoadingContext.Provider value={{ isRedirecting, navigate }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useGlobalRedirect = () => useContext(LoadingContext);