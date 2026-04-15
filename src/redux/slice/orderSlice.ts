import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
    isRejected,
} from "@reduxjs/toolkit";
import { ITOrder, orders } from "@/utils/data";
import { RootState } from "../Store";
export const getAllOrders = createAsyncThunk<ITOrder[]>(
    "orders/getAll",
    async () => {
        await new Promise((r) => setTimeout(r, 500));
        return orders;
    }
);
export const getOrderById = createAsyncThunk<ITOrder, string>(
    "orders/getById",
    async (id) => {
        await new Promise((r) => setTimeout(r, 300));
        return orders.find((o) => o.orderId === id)!;
    }
);
export const addOrder = createAsyncThunk<ITOrder, ITOrder>(
    "orders/add",
    async (order) => order
);
export const updateOrder = createAsyncThunk<ITOrder, ITOrder>(
    "orders/update",
    async (updated) => updated
);
export const removeOrder = createAsyncThunk<string, string>(
    "orders/remove",
    async (id) => id
);
export const filterOrders = createAsyncThunk<
    ITOrder[],
    Record<string, string | string[]>
>("orders/filter", async (query) => {
    return orders.filter(() => true);
});
interface OrderState {
    data: ITOrder[];
    selected: ITOrder | null;
    loading: boolean;
    error: string | null;
    page: number;
    limit: number;
    total: number;
}
const initialState: OrderState = {
    data: [],
    selected: null,
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    total: 0,
};
const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        resetOrderState: () => initialState,
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
            .addCase(getAllOrders.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.total = action.payload.length;
            })
            .addCase(getOrderById.fulfilled, (state, action) => {
                state.selected = action.payload;
            })
            .addCase(addOrder.fulfilled, (state, action) => {
                state.data.push(action.payload);
                state.total += 1;
            })
            .addCase(updateOrder.fulfilled, (state, action) => {
                const index = state.data.findIndex(
                    (o) => o.orderId === action.payload.orderId
                );
                if (index !== -1) state.data[index] = action.payload;
            })
            .addCase(removeOrder.fulfilled, (state, action) => {
                state.data = state.data.filter(
                    (o) => o.orderId !== action.payload
                );
                state.total -= 1;
            })
            .addCase(filterOrders.pending, (state) => {
                state.loading = true;
            })
            .addCase(filterOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addMatcher(isRejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message || "Something went wrong";
            });
    },
});
export const { resetOrderState, setPagination } = orderSlice.actions;
export const selectOrders = (state: RootState) => state.orderSlice.data;
export const selectOrder = (state: RootState) => state.orderSlice.selected;
export const selectOrderLoading = (state: RootState) => state.orderSlice.loading;
export const selectOrderError = (state: RootState) => state.orderSlice.error;
export const selectOrderPagination = (state: RootState) => ({
    page: state.orderSlice.page,
    limit: state.orderSlice.limit,
    total: state.orderSlice.total,
});

export default orderSlice.reducer;