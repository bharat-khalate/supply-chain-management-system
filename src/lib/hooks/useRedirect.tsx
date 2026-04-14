// context/LoadingContext.tsx
"use client";
import React, { createContext, useContext, useTransition } from "react";
import { useRouter } from "next/navigation";
const LoadingContext = createContext({
    isRedirecting: false,
    navigate: (href: string) => { },
});
/**
 * @description
 * Global loading context to handle route navigation with transition state.
 * - Uses React `useTransition` to track navigation loading state
 * - Provides a `navigate` function for route changes
 * - Sets `isRedirecting` to true during route transitions
 * - Useful for showing loaders/spinners during page navigation
 *
 * @returns
 * {
 *   isRedirecting: Boolean indicating if navigation is in progress
 *   navigate: Function to programmatically navigate to a route
 * }
 */
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