import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { IPaginatedState, IVendor } from "@/types";
import { vendorService } from "@/service";
import { IFetchServiceParams } from "@/types/service/service.types";
export const getAllVendors = createAsyncThunk(
  "vendors/getAll",
  async (props: IFetchServiceParams, { rejectWithValue }) => {
    try {
      return await vendorService.getAll(props);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch vendors");
    }
  }
);
export const getVendorById = createAsyncThunk(
  "vendors/getById",
  async (id: string, { rejectWithValue }) => {
    try {
      return await vendorService.getById(id);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch vendor");
    }
  }
);
export const addVendor = createAsyncThunk(
  "vendors/create",
  async (vendor: IVendor, { rejectWithValue }) => {
    try {
      return await vendorService.add(vendor);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to add vendor");
    }
  }
);
export const updateVendor = createAsyncThunk(
  "vendors/update",
  async (updated: IVendor, { rejectWithValue }) => {
    try {
      return await vendorService.update(updated);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to update vendor");
    }
  }
);
export const removeVendor = createAsyncThunk(
  "vendors/remove",
  async (id: string, { rejectWithValue }) => {
    try {
      return await vendorService.remove(id);
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to remove vendor");
    }
  }
);
const initialState: IPaginatedState<IVendor> = {
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
const vendorSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllVendors.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllVendors.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.pagination = action.payload.pagination
      })
      .addCase(getVendorById.fulfilled, (state, action) => {
        state.selected = action.payload;
      })
      .addCase(addVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.selected = action.payload; 
      })
      .addCase(updateVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.selected = action.payload;
      })
      .addCase(removeVendor.fulfilled, (state) => {
        state.loading = false;
      })    
      .addMatcher(
        (action) =>
          action.type.startsWith("vendors/") &&
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
export const selectVendors = (state: RootState) => state.vendorSlice.data;
export const selectVendor = (state: RootState) => state.vendorSlice.selected;
export const selectVendorLoading = (state: RootState) => state.vendorSlice.loading;
export const selectVendorError = (state: RootState) => state.vendorSlice.error;
export const selectVendorPagination = (state: RootState) => state.vendorSlice.pagination;

export default vendorSlice.reducer;