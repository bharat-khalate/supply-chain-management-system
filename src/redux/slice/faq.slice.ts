import { faqService } from "@/service";
import { IFAQ, IPaginatedData, IPaginatedState } from "@/types";
import { IFetchServiceParams } from "@/types/service/service.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";

export const fetchAllFaq = createAsyncThunk<IPaginatedData<IFAQ>, IFetchServiceParams, { rejectValue: string }>("faqs/fetchAllFaq", async (params: IFetchServiceParams, { rejectWithValue }) => {
    try {
        return await faqService.fetchAll(params);
    } catch (error: any) {
        return rejectWithValue(error.message || "Something Went Wrong");
    }
})
export const fetchFaqById = createAsyncThunk<IFAQ, string, { rejectValue: string }>("faqs/fetchById", async (id: string, { rejectWithValue }) => {
    try {
        return await faqService.fetchById(id);
    } catch (error: any) {
        return rejectWithValue(error.message || "Something Went wrong");
    }
})
export const addFaq = createAsyncThunk<IFAQ, Omit<IFAQ, "id">, { rejectValue: string }>("faqs/addFaq", async (data: Omit<IFAQ, "id">, { rejectWithValue }) => {
    try {
        return await faqService.add(data);
    } catch (error: any) {
        return rejectWithValue(error.message || "Something went wrong");
    }
})
export const updateFaq = createAsyncThunk<IFAQ, IFAQ, { rejectValue: string }>("faqs/updateFaq", async (data: IFAQ, { rejectWithValue }) => {
    try {
        return await faqService.update(data);
    } catch (error: any) {
        return rejectWithValue(error.message || "Something wnt wrong")
    }
})
export const removeFaq = createAsyncThunk<IFAQ, string, { rejectValue: string }>("faqs/removeFaq", async (id: string, { rejectWithValue }) => {
    try {
        return await faqService.remove(id);
    } catch (error: any) {
        return rejectWithValue(error.message || "Something went wrong");
    }
})
const initialState: IPaginatedState<IFAQ> = {
    data: [],
    loading: true,
    error: null,
    selected: null,
    pagination: {
        currentPage: 0,
        lastPage: 0,
        totalCount: 0,
        canNextPage: false,
        canPreviousPage: false
    }
}
const slice = createSlice({
    name: "faqs",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchAllFaq.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllFaq.fulfilled, (state, action) => {
                state.data = action.payload.data;
                state.pagination = action.payload.pagination;
                state.loading = false;
            })
            .addCase(updateFaq.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateFaq.fulfilled, (state, action) => {
                state.selected = action.payload;
                state.loading = false;
            })
            .addCase(addFaq.pending, (state) => {
                state.loading = true;
            })
            .addCase(addFaq.fulfilled, (state, action) => {
                state.data.push(action.payload);
                state.loading = false;
            })
            .addCase(fetchFaqById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFaqById.fulfilled, (state, action) => {
                state.selected = action.payload;
                state.loading = false;
            })
            .addCase(removeFaq.pending, (state) => {
                state.loading = true;
            })
            .addCase(removeFaq.fulfilled, (state, action) => {
                state.selected = action.payload;
                state.loading = false;
            })
            .addMatcher((action) => action.type.startsWith("faqs") && action.type.endsWith("rejected"), (state, action) => {
                const message: string = "error" in action && typeof action.error == "object" && action.error != null && "message" in action.error && (action.error as { message: string }).message || "Something went wrong";
                state.error = message || "Something went wrong";
                state.loading = false;
            })
})
export default slice.reducer;
export const selectFaqData = (state: RootState) => state.faqSlice.data;
export const selectFaqPagination = (state: RootState) => state.faqSlice.pagination
export const selectSelectedFaq = (state: RootState) => state.faqSlice.selected
export const selectFaqLoading = (state: RootState) => state.faqSlice.loading
export const selectFaqError = (state: RootState) => state.faqSlice.error