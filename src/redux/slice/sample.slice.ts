import {
  createAsyncThunk,
  createSlice,
  
} from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { IPaginatedState, ISample } from "@/types";
import { sampleService } from "@/service";
import { IFetchServiceParams } from "@/types/service/service.types";
export const getAllSample = createAsyncThunk(
  "sample/getAll",
  async (props: IFetchServiceParams, { rejectWithValue }) => {
    try {
      return await sampleService.getAll(props);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch samples");
    }
  }
);
export const getSampleById = createAsyncThunk(
  "sample/getById",
  async (id: string, { rejectWithValue }) => {
    try {
      return await sampleService.getById(id);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch sample");
    }
  }
);
export const addSample = createAsyncThunk(
  "sample/add",
  async (sample: ISample, { rejectWithValue }) => {
    try {
      return await sampleService.add(sample);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to add sample");
    }
  }
);
export const updateSample = createAsyncThunk(
  "sample/update",
  async (updated: ISample, { rejectWithValue }) => {
    try {
      return await sampleService.update(updated);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to update sample");
    }
  }
);
export const removeSample = createAsyncThunk(
  "sample/remove",
  async (id: string, { rejectWithValue }) => {
    try {
      return await sampleService.remove(id);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to remove sample");
    }
  }
);
const initialState: IPaginatedState<ISample> = {
  data: [],
  selected: null,
  loading: false,
  error: null,
  pagination: {
    currentPage: 0,
    lastPage: 0,
    totalCount: 0,
    canNextPage: false,
    canPreviousPage: false
  }
};
const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSample.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllSample.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.pagination = action.payload.pagination
      })
      .addCase(getSampleById.fulfilled, (state, action) => {
        state.selected = action.payload;
      })
      .addCase(addSample.fulfilled, (state, action) => {
        state.loading = false;
        state.selected = action.payload; 
      })
      .addCase(updateSample.fulfilled, (state, action) => {
        state.loading = false;
        state.selected = action.payload;
      })
      .addCase(removeSample.fulfilled, (state) => {
        state.loading = false;
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("sample/") &&
          action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          const errorMessage =
            "error" in action &&
              typeof action.error === "object" &&
              action.error !== null &&
              "message" in action.error
              ? (action.error as { message?: string }).message
              : "Something went wrong";
          state.error = errorMessage || "Something went wrong";
        }
      )
  },
});
export const selectSamples = (state: RootState) => state.sampleSlice.data;
export const selectSample = (state: RootState) => state.sampleSlice.selected;
export const selectSampleLoading = (state: RootState) => state.sampleSlice.loading;
export const selectSampleError = (state: RootState) => state.sampleSlice.error;
export const selectSamplePagination = (state: RootState) => state.sampleSlice.pagination;

export default sampleSlice.reducer;