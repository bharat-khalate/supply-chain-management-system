import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { buyers, IBuyer } from "@/utils/Data";

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

// 2. Add Customer
export const addBuyer = createAsyncThunk(
    "buyers/addBuyer",
    async (newCustomer: IBuyer) => {
        // Replace with: const response = await api.post('/buyers', newCustomer)
        return newCustomer;
    }
);

// 3. Remove Customer
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
    data: buyers,
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
            // Error Handling
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action: any) => {
                    state.loading = false;
                    state.error = action.error.message || "Something went wrong";
                }
            );
    },
});

export default slice.reducer;