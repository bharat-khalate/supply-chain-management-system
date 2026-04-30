import {
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { IOrder,  IPaginatedState } from "@/types";
import { orderService } from "@/service";
import { IFetchServiceParams } from "@/types/service/service.types";
export const getAllOrders = createAsyncThunk(
    "orders/getAll",
    async (props: IFetchServiceParams, { rejectWithValue }) => {
        try {
            return await orderService.getAll(props);
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch orders");
        }
    }
);
export const getOrderById = createAsyncThunk(
    "orders/getById",
    async (id: string, { rejectWithValue }) => {
        try {
            return await orderService.getById(id);
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch order");
        }
    }
);
export const addOrder = createAsyncThunk(
    "orders/createateate",
    async (order: IOrder, { rejectWithValue }) => {
        try {
            return await orderService.add(order);
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to add order");
        }
    }
);
export const updateOrder = createAsyncThunk(
    "orders/update",
    async (updated: IOrder, { rejectWithValue }) => {
        try {
            return await orderService.update(updated);
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to update order");
        }
    }
);
export const removeOrder = createAsyncThunk(
    "orders/remove",
    async (id: string, { rejectWithValue }) => {
        try {
            return await orderService.remove(id);
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to remove order");
        }
    }
);
const initialState: IPaginatedState<IOrder> = {
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
const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllOrders.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.pagination = action.payload.pagination
            })
            .addCase(getOrderById.fulfilled, (state, action) => {
                state.selected = action.payload;
            })
            .addCase(addOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.selected = action.payload;
            })
            .addCase(updateOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.selected = action.payload;
            })
            .addCase(removeOrder.fulfilled, (state) => {
                state.loading = false;
            })
            .addMatcher(
                (action) =>
                    action.type.startsWith("orders/") &&
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

export const selectOrders = (state: RootState) => state.orderSlice.data;
export const selectOrder = (state: RootState) => state.orderSlice.selected;
export const selectOrderLoading = (state: RootState) => state.orderSlice.loading;
export const selectOrderError = (state: RootState) => state.orderSlice.error;
export const selectOrderPagination = (state: RootState) => state.orderSlice.pagination;

export default orderSlice.reducer;