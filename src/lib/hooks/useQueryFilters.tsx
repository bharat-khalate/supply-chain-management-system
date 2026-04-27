'use client'
import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useAppDispatch } from "@hooks/index"
import { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit";
import { IPaginatedData } from "@/types";
import { IFetchServiceParams } from "@/types/service/service.types";
import { buildSearchParams, getSanitizedPagination, parseSearchParams } from "@/utils/helpers/queryParams.helper";


type TFetchAction<T> = AsyncThunk<
    IPaginatedData<T>,
    IFetchServiceParams,
    AsyncThunkConfig
>;

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
export const useQueryFilters = <T,>(
    fetchAction: TFetchAction<T>
) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();
    const [filterValues, setFilterValues] = useState<Record<string, string | string[]>>({});
    useEffect(() => {
        const rawParams = parseSearchParams(searchParams);
        const params = getSanitizedPagination(rawParams);
        const { page, limit, ...filters } = params;
        (async () => setFilterValues(params))();
        dispatch(fetchAction({
            page: Number(page),
            limit: Number(limit),
            ...(Object.keys(filters).length > 0 && { query: filters })
        }));
    }, [searchParams, dispatch, fetchAction]);
    const applyFilters = useCallback((values?: Record<string, string | string[]>) => {
        const dataToApply = values || filterValues;
        const paginationValues = getSanitizedPagination({ ...dataToApply, page: "0", limit: "0" });
        const query = buildSearchParams(paginationValues);
        router.push(query ? `${pathname}?${query}` : pathname);
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
        setFilterValues,
    };
};