import { createSlice, createAsyncThunk, UnknownAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { IBuyer, IPaginatedState } from "@/types";
import { buyerService } from "@/service";
import { IFetchServiceParams } from "@/types/service/service.types";
export const fetchBuyers = createAsyncThunk(
    "buyers/fetchAll",
    async (props: IFetchServiceParams, { rejectWithValue }) => {
        try {
            return await buyerService.fetchAll(props);
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch buyers");
        }
    }
);
export const fetchBuyerById = createAsyncThunk(
    "buyers/fetchById",
    async (id: string, { rejectWithValue }) => {
        try {
            return await buyerService.fetchById(id);
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch buyer");
        }
    }
);
export const addBuyer = createAsyncThunk(
    "buyers/add",
    async (newBuyer: IBuyer, { rejectWithValue }) => {
        try {
            return await buyerService.add(newBuyer);
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to add buyer");
        }
    }
);
export const updateBuyer = createAsyncThunk(
    "buyers/update",
    async (updatedBuyer: IBuyer, { rejectWithValue }) => {
        try {
            return await buyerService.update(updatedBuyer);
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to update buyer");
        }
    }
);
export const removeBuyer = createAsyncThunk(
    "buyers/remove",
    async (id: string, { rejectWithValue }) => {
        try {
            return await buyerService.remove(id);
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to remove buyer");
        }
    }
);
const initialState: IPaginatedState<IBuyer> = {
    data: [],
    selected: null,
    loading: true,
    error: null,
    pagination: {
        currentPage: 0,
        lastPage: 0,
        totalCount: 0,
        canNextPage: false,
        canPreviousPage: false
    }
};
const buyerSlice = createSlice({
    name: "buyers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBuyers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBuyers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.pagination = action.payload.pagination
            })
            .addCase(fetchBuyerById.fulfilled, (state, action) => {
                state.selected = action.payload;
                state.loading = false;
            })
            .addCase(addBuyer.fulfilled, (state, action) => {
                state.loading = false;
                state.selected = action.payload; 
            })
            .addCase(updateBuyer.fulfilled, (state, action) => {
                state.loading = false;
                state.selected = action.payload;
            })
            .addCase(removeBuyer.fulfilled, (state) => {
                state.loading = false;
            })
            .addMatcher(
                (action): action is UnknownAction =>
                    action.type.startsWith("buyers/") &&
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
            );
    }
});
export const selectBuyers = (state: RootState) => state.buyerSlice.data;
export const selectBuyer = (state: RootState) => state.buyerSlice.selected;
export const selectBuyerLoading = (state: RootState) => state.buyerSlice.loading;
export const selectBuyerError = (state: RootState) => state.buyerSlice.error;
export const selectBuyerPagination = (state: RootState) => state.buyerSlice.pagination;
export default buyerSlice.reducer;