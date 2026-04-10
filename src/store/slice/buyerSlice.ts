import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { buyers, IBuyer } from "@/utils/Data";
import { RootState } from "../Store";

// --- Thunks ---

// 1. Fetch buyer
export const fetchBuyers = createAsyncThunk<
    IBuyer[],        // return type
    void,            // argument type
    { rejectValue: string }
>(
    "buyers/fetchBuyers",
    async (_, { rejectWithValue }) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            return buyers;
        } catch (error) {
            return rejectWithValue("Failed to fetch buyers");
        }
    }
);

// 2. Add Buyer
export const addBuyer = createAsyncThunk(
    "buyers/addBuyer",
    async (newBuyer: IBuyer) => {
        // Replace with: const response = await api.post('/buyers', newBuyer)
        return newBuyer;
    }
);



export const filterBuyer = createAsyncThunk<IBuyer[], Record<string, string | string[]>>("buyer/filterBuyer", async (query: Record<string, string | string[]>) => {
    // replace with: const response=await api.post(`buyers/filter/`,query);
    return [{
        id: "Filtered data",
        buyerName: "Filtered data",
        buyerAddress: "Filtered Data",
        buyerType: "Misc",
        phone: "Filtered Data",
        email: "Filtered Data",
        status: "Active"
    }] as IBuyer[]
})

// 3. Remove Buyer
export const removeBuyer = createAsyncThunk(
    "buyers/removeBuyer",
    async (id: string) => {
        // Replace with: await api.delete(`/buyers/${id}`)
        return id;
    }
);

// --- Slice ---

interface BuyerState {
    data: IBuyer[];
    loading: boolean;
    error: string | null;
}

const initialState: BuyerState = {
    data: [],
    loading: false,
    error: null,
};

const slice = createSlice({
    name: "buyers",
    initialState,
    reducers: {
        // You can keep standard reducers for local-only state changes
    },
    extraReducers: (builder) => {
        builder
            // Fetching
            .addCase(fetchBuyers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBuyers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            // Creating
            .addCase(addBuyer.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            // Deleting
            .addCase(removeBuyer.fulfilled, (state, action) => {
                state.data = state.data.filter((c) => c.id !== action.payload);
            })
            //filterCase
            .addCase(filterBuyer.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(filterBuyer.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            // Error Handling
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (state, action: any) => {
                    state.loading = false;
                    state.error = action.error.message || "Something went wrong";
                }
            );
    },
});

export const useBuyerData = (store: RootState) => store.buyerSlice.data;
export const useBuyerLoader = (store: RootState) => store.buyerSlice.loading;
export const useBuyerError = (store: RootState) => store.buyerSlice.error;

export default slice.reducer;