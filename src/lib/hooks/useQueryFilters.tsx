'use client'
import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useAppDispatch } from "@hooks/index"
// import { Action, ThunkAction } from "@reduxjs/toolkit";



// Define a generic type for the action creators
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncActionCreator = (params: Record<string, string | string[]>) => any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SimpleActionCreator = (args?: any) => any;

export const useQueryFilters = (
    fetchAction: AsyncActionCreator,
    clearAction: SimpleActionCreator
) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();

    const [filterValues, setFilterValues] = useState<Record<string, string | string[]>>({});

    // 1. Parse URL and Sync with Redux (Standard URL-first logic)
    useEffect(() => {
        const paramsObj: Record<string, string | string[]> = {};
        searchParams.forEach((value, key) => {
            paramsObj[key] = value.includes(",") ? value.split(",") : value;
        });

        (async () => setFilterValues(paramsObj))();

        if (Object.keys(paramsObj).length > 0) {
            dispatch(fetchAction(paramsObj));
        } else {
            dispatch(clearAction()); // Or fetchAllAction()
        }
    }, [searchParams, dispatch, fetchAction, clearAction]);

    // 2. Function to update URL
    const applyFilters = useCallback((values?: Record<string, string | string[]>) => {
        const dataToApply = values || filterValues;
        const params = new URLSearchParams();

        Object.entries(dataToApply).forEach(([key, value]) => {
            if (Array.isArray(value) && value.length > 0) {
                params.set(key, value.join(","));
            } else if (typeof value === "string" && value.trim() !== "") {
                params.set(key, value);
            }
        });

        const query = params.toString();
        console.log(query)
        if (query) {
            router.push(`${pathname}?${query}`);
        }
    }, [filterValues, pathname, router]);

    const handleInputChange = (key: string, value: string | string[]) => {
        setFilterValues((prev) => {
            const next = { ...prev, [key]: value };
            if (!value || (Array.isArray(value) && value.length === 0)) {
                delete next[key];
            }
            return next;
        });
    };

    const clearFilters = () => {
        if (Object.keys(filterValues).length != 0) {
            setFilterValues({});
            router.push(pathname);
        }
    };

    return {
        filterValues,
        handleInputChange,
        applyFilters,
        clearFilters,
        setFilterValues
    };
};