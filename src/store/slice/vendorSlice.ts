import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IVendor, vendors } from "@/utils/Data"


export const getAllVendors = createAsyncThunk<IVendor[]>("vendors/getAllVendors", async () => {
    try {
        //simulate api calls
        return vendors;
    } catch (err) {
        //handle error
        throw err;
    }
})

export const removeVendor = createAsyncThunk<string, string>("vendors/removeVendor", async (vendorId: string) => {
    try {
        //simulate api calls
        return vendorId;
    } catch (err) {
        //handle errors
        throw err;
    }
})

export const addVendor = createAsyncThunk<IVendor, IVendor>("vendors/addVendor", async (vendor: IVendor) => {
    try {
        //simulate api call
        return vendor;
    } catch (err) {
        //handle error
        throw err;
    }
})

const initialState = {
    vendor: [] as IVendor[],
    loading: false,
    error: {}
}


const slice = createSlice({
    name: "vendor",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllVendors.pending, (state, _) => { state.loading = true })
            .addCase(getAllVendors.fulfilled, (state, action) => {
                state.vendor = action.payload
                state.loading = false
            })
            .addCase(getAllVendors.rejected, (state, action) => { state.loading = false })
            .addCase(addVendor.pending, (state, _) => { state.loading = true })
            .addCase(addVendor.fulfilled, (state, action) => {
                state.vendor.push(action.payload)
                state.loading = false
            })
            .addCase(addVendor.rejected, (state, action) => { state.loading = false })
            .addCase(removeVendor.pending, (state, _) => { state.loading = true })
            .addCase(removeVendor.fulfilled, (state, action) => {
                state.vendor = state.vendor.filter(vendor => vendor.id != action.payload)
                state.loading = false
            })
            .addCase(removeVendor.rejected, (state, action) => { state.loading = false })
    }
})



export default slice.reducer;
