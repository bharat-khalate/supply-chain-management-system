import { configSettingService } from "@/service";
import { ISetting, ISettingState } from "@/types/settings";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";
const initialState: ISettingState = {
    data: null,
    loading: true,
    error: null,
    selected: null
}
export const fetchConfigSetting = createAsyncThunk<ISetting, void, { rejectValue: string }>("configSettings/fetchAll", async (_, { rejectWithValue }) => {
    try {
        return await configSettingService.getAll();
    } catch (error: any) {
        return rejectWithValue(error.message || "Failed to fetch setting")
    }
});
export const updateConfigSetting = createAsyncThunk<ISetting, ISetting, { rejectValue: string }>("configSetting/update", async (data: ISetting, { rejectWithValue }) => {
    try {
        return await configSettingService.updateAll(data);
    } catch (error: any) {
        return rejectWithValue(error.message || "Failed to update settings");
    }
})
const slice = createSlice({
    name: "configSetting",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchConfigSetting.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchConfigSetting.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
                state.selected = action.payload;
            })
            .addCase(updateConfigSetting.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateConfigSetting.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
                state.selected = action.payload;
            })
            .addMatcher((action) => action.type.startsWith("configSettings/") && action.type.endsWith("/rejected"), (state, action) => {
                state.loading = false;
                const errorMessage = "error" in action && typeof action.error === "object" && action.error != null && "message" in action.error ? (action.error as { message?: string }).message : "Something went wrong";
                state.error = errorMessage || "Something went wrong";
            })

    }
})
export default slice.reducer;
export const selectConfigSettings = (state: RootState) => state.configSettingSlice.data;
export const selectConfigSettingLoader = (state: RootState) => state.configSettingSlice.loading;
export const selectConfigSettingError = (state: RootState) => state.configSettingSlice.error;
export const selectSelectedConfigSetting = (state: RootState) => state.configSettingSlice.selected;
