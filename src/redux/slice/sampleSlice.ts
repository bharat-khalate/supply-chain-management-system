import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  isRejected,
} from "@reduxjs/toolkit";
import { ISample, sampleRecords } from "@/utils/data";
import { RootState } from "../Store";
export const getAllSample = createAsyncThunk<ISample[]>(
  "sample/getAll",
  async () => {
    await new Promise((r) => setTimeout(r, 500));
    return sampleRecords;
  }
);
export const getSampleById = createAsyncThunk<ISample, string>(
  "sample/getById",
  async (id) => {
    await new Promise((r) => setTimeout(r, 300));
    return sampleRecords.find((s) => s.sampleId === id)!;
  }
);
export const addSample = createAsyncThunk<ISample, ISample>(
  "sample/add",
  async (sample) => sample
);
export const updateSample = createAsyncThunk<ISample, ISample>(
  "sample/update",
  async (updated) => updated
);
export const removeSample = createAsyncThunk<string, string>(
  "sample/remove",
  async (id) => id
);
export const filterSamples = createAsyncThunk<
  ISample[],
  Record<string, string | string[]>
>("sample/filter", async (query) => {
  return sampleRecords.filter(() => true);
});
interface SampleState {
  data: ISample[];
  selected: ISample | null;
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
  total: number;
}
const initialState: SampleState = {
  data: [],
  selected: null,
  loading: false,
  error: null,
  page: 1,
  limit: 10,
  total: 0,
};
const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    resetSampleState: () => initialState,
    setPagination: (
      state,
      action: PayloadAction<{ page: number; limit: number }>
    ) => {
      state.page = action.payload.page;
      state.limit = action.payload.limit;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSample.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllSample.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.total = action.payload.length;
      })
      .addCase(getSampleById.fulfilled, (state, action) => {
        state.selected = action.payload;
      })
      .addCase(addSample.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.total += 1;
      })
      .addCase(updateSample.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (s) => s.sampleId === action.payload.sampleId
        );
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(removeSample.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (s) => s.sampleId !== action.payload
        );
        state.total -= 1;
      })
      .addCase(filterSamples.pending, (state) => {
        state.loading = true;
      })
      .addCase(filterSamples.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addMatcher(isRejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Something went wrong";
      });
  },
});
export const { resetSampleState, setPagination } = sampleSlice.actions;
export const selectSamples = (state: RootState) => state.sampleSlice.data;
export const selectSample = (state: RootState) => state.sampleSlice.selected;
export const selectSampleLoading = (state: RootState) => state.sampleSlice.loading;
export const selectSampleError = (state: RootState) => state.sampleSlice.error;
export const selectSamplePagination = (state: RootState) => ({
  page: state.sampleSlice.page,
  limit: state.sampleSlice.limit,
  total: state.sampleSlice.total,
});

export default sampleSlice.reducer;