import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ITOrder, orders } from "@/utils/Data";

export const getAllOrders = createAsyncThunk("orders/getAllOrders", async () => {
    try {
        //simulate api calls
        return orders;
    } catch (err) {
        //handle error
        throw err;
    }
})

export const removeOrder = createAsyncThunk("orders/removeOrder", async (orderId: string) => {
    try {
        //simulate api calls
        return orderId;
    } catch (err) {
        //handle error
        throw err;
    }
})

export const addOrder = createAsyncThunk<ITOrder, ITOrder>("orders/addOrder", async (order: ITOrder) => {
    try {
        //simulate api call
        return order;
    } catch (err) {
        //handle error
        throw err
    }
})

const initialState = {
    orders: orders as ITOrder[],
    loading: false,
    error: {}
}


const slice = createSlice({
    name: "orders",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllOrders.pending, (state, _) => { state.loading = true; })
            .addCase(getAllOrders.fulfilled, (state, action) => { state.orders = action.payload; state.loading = false })
            .addCase(getAllOrders.rejected, (state, action) => { state.loading = false })
            .addCase(addOrder.pending, (state, action) => { state.loading = true; })
            .addCase(addOrder.fulfilled, (state, action) => {
                state.orders.push(action.payload);
                state.loading = false
            })
            .addCase(addOrder.rejected, (state, action) => { state.loading = false })
            .addCase(removeOrder.pending, (state, _) => { state.loading = true })
            .addCase(removeOrder.fulfilled, (state, action) => {
                state.orders = state.orders.filter(order => order.orderId != action.payload);
                state.loading = false;
            })
            .addCase(removeOrder.rejected, (state, action) => { state.loading = false })
    }
})



export default slice.reducer;