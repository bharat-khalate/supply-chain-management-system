import { ISearchResult, ISearchServiceParam, ISearchState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchService } from "@/service"
import { stat } from "fs";
import { RootState } from "../Store";

export const getSearchResult = createAsyncThunk<ISearchResult, ISearchServiceParam, { rejectValue: string }>(
    "search/getSearchResult",
    async (param: ISearchServiceParam, { rejectWithValue }) => {
        try {
            return await searchService.getSearchResult(param);
        } catch (error: any) {
            return rejectWithValue(error?.message || "Something Went wrong")
        }
    }
)
const initialState: ISearchState = {
    data: [],
    selected: null,
    loading: false,
    error: ""
}
const slice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getSearchResult.pending, (state) => { state.loading = true; })
            .addCase(getSearchResult.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addMatcher((action) => action.type.startsWith("search") && action.type.endsWith("/rejected"), (state, action) => {
                const message = "error" in action && typeof action.error == "object" && action.error != null && "message" in action.error ? (action.error as { message: string }).message : "Something went wrong"
                state.error = message;
                state.loading = false;
            })
})

export default slice.reducer;
export const selectSearchData = (state: RootState) => state.searchSlice.data
export const selectSelectedSearch = (state: RootState) => state.searchSlice.selected
export const selectSearchDataLoading = (state: RootState) => state.searchSlice.loading
export const selectSearchError = (state: RootState) => state.searchSlice.error