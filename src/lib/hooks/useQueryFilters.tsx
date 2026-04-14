'use client'
import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useAppDispatch } from "@hooks/index"
import { UnknownAction } from "@reduxjs/toolkit";

type AsyncActionCreator<T = unknown> = (
    params: Record<string, string | string[]>
) => T;
type SimpleActionCreator<T = unknown, A = void> =
    A extends void ? () => T : (args: A) => T;
/**
 * @description
 * Custom hook to manage query-based filters synced with the URL.
 * - Reads filters from URL query params and stores them in state
 * - Automatically triggers fetchAction when filters exist
 * - Calls clearAction when no filters are present
 * - Supports both single and multi-value filters (comma-separated in URL)
 * - Keeps URL as the single source of truth (refresh-safe)
 *
 * @param fetchAction - Async action to fetch data based on filters
 * @param clearAction - Action to reset/clear data when no filters are applied
 *
 * @returns
 * {
 *   filterValues: Current filter state synced with URL
 *   handleInputChange: Function to update a filter value
 *   applyFilters: Updates URL with filters (triggers fetch)
 *   clearFilters: Clears all filters and resets URL
 *   setFilterValues: Manually set filter state if needed
 * }
 */
export const useQueryFilters = (
    fetchAction: AsyncActionCreator,
    clearAction: SimpleActionCreator
) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();
    const [filterValues, setFilterValues] = useState<Record<string, string | string[]>>({});
    // parsing url and syncing with state
    useEffect(() => {
        const paramsObj: Record<string, string | string[]> = {};
        searchParams.forEach((value, key) => {
            paramsObj[key] = value.includes(",") ? value.split(",") : value;
        });
        (async () => setFilterValues(paramsObj))();
        if (Object.keys(paramsObj).length > 0) {
            dispatch(fetchAction(paramsObj) as UnknownAction);
        } else {
            dispatch(clearAction() as UnknownAction);
        }
    }, [searchParams, dispatch, fetchAction, clearAction]);
    // updating url
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