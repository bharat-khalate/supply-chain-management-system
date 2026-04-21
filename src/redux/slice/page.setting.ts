import { pageSettingService } from "@/service";
import { IPageSetting, IPageSettingState } from "@/types/settings";
import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { RootState } from "../Store";

const initialState: IPageSettingState = {
    data: null,
    loading: true,
    error: null,
    selected: null
}
export const fetchAllPageSetting = createAsyncThunk<IPageSetting, void, { rejectValue: string }>("pageSetting/fetchAll", async (_, { rejectWithValue }) => {
    try {
        return await pageSettingService.fetchAll();
    } catch (error: any) {
        return rejectWithValue(error.message || "Failed to fetch page setting")
    }
})
export const updateAllPageSetting = createAsyncThunk<IPageSetting, IPageSetting, { rejectValue: string }>("pageSetting/updateAll", async (data: IPageSetting, { rejectWithValue }) => {
    try {
        return await pageSettingService.updateAll(data);
    } catch (error: any) {
        return rejectWithValue(error.message || "Failed to update page settings");
    }
})
const slice = createSlice({
    name: "pageSetting",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchAllPageSetting.pending, (state) => { state.loading = true })
            .addCase(fetchAllPageSetting.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
                state.selected = action.payload;
            })
            .addCase(updateAllPageSetting.pending, (state) => { state.loading = true })
            .addCase(updateAllPageSetting.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
                state.selected = action.payload;
            })
            .addMatcher((action) => action.type.startsWith("pageSetting/") && action.type.endsWith("/rejected"), (state, action) => {
                const errorMessage = "error" in action && typeof action.error === "object" && action.error != null && "message" in action.error ? (action.error as { message?: string }).message : "Something went wrong";
                state.error = errorMessage || "Something went wrong";
                state.loading = false;
            })
})
export default slice.reducer;
export const selectPageSetting = (state: RootState) => state.pageSettingSlice.data;
export const selectPageSettingLoader = (state: RootState) => state.pageSettingSlice.loading;
export const selectPageSettingError = (state: RootState) => state.pageSettingSlice.error;
export const selectSelectedPageSetting = (state: RootState) => state.pageSettingSlice.selected;