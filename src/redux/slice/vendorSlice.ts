import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  isRejected,
} from "@reduxjs/toolkit";
import { IVendor, vendors } from "@/utils/data";
import { RootState } from "../Store";
export const getAllVendors = createAsyncThunk<IVendor[]>(
  "vendors/getAll",
  async () => {
    await new Promise((r) => setTimeout(r, 500));
    return vendors;
  }
);
export const getVendorById = createAsyncThunk<IVendor, string>(
  "vendors/getById",
  async (id) => {
    await new Promise((r) => setTimeout(r, 300));
    return vendors.find((v) => v.id === id)!;
  }
);
export const addVendor = createAsyncThunk<IVendor, IVendor>(
  "vendors/add",
  async (vendor) => vendor
);
export const updateVendor = createAsyncThunk<IVendor, IVendor>(
  "vendors/update",
  async (updated) => updated
);
export const removeVendor = createAsyncThunk<string, string>(
  "vendors/remove",
  async (id) => id
);
export const filterVendors = createAsyncThunk<
  IVendor[],
  Record<string, string | string[]>
>("vendors/filter", async (query) => {
  return vendors.filter(() => true);
});
interface VendorState {
  data: IVendor[];
  selected: IVendor | null;
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
  total: number;
}

const initialState: VendorState = {
  data: [],
  selected: null,
  loading: false,
  error: null,
  page: 1,
  limit: 10,
  total: 0,
};
const vendorSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    resetVendorState: () => initialState,
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
      .addCase(getAllVendors.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllVendors.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.total = action.payload.length;
      })
      .addCase(getVendorById.fulfilled, (state, action) => {
        state.selected = action.payload;
      })
      .addCase(addVendor.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.total += 1;
      })
      .addCase(updateVendor.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (v) => v.id === action.payload.id
        );
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(removeVendor.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (v) => v.id !== action.payload
        );
        state.total -= 1;
      })
      .addCase(filterVendors.pending, (state) => {
        state.loading = true;
      })
      .addCase(filterVendors.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addMatcher(isRejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Something went wrong";
      });
  },
});
export const { resetVendorState, setPagination } = vendorSlice.actions;
export const selectVendors = (state: RootState) => state.vendorSlice.data;
export const selectVendor = (state: RootState) => state.vendorSlice.selected;
export const selectVendorLoading = (state: RootState) => state.vendorSlice.loading;
export const selectVendorError = (state: RootState) => state.vendorSlice.error;
export const selectVendorPagination = (state: RootState) => ({
  page: state.vendorSlice.page,
  limit: state.vendorSlice.limit,
  total: state.vendorSlice.total,
});

export default vendorSlice.reducer;