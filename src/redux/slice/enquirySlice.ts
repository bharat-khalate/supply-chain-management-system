import { createAsyncThunk, createSlice, PayloadAction, isRejected } from "@reduxjs/toolkit";
import { IEnquiry, enquiries } from "@/utils/data";
import { RootState } from "../Store";
export const getAllEnquiries = createAsyncThunk<IEnquiry[]>(
    "enquiries/getAll",
    async () => {
        await new Promise((r) => setTimeout(r, 500));
        return enquiries;
    }
);
export const getEnquiryById = createAsyncThunk<IEnquiry, string>(
    "enquiries/getById",
    async (id) => {
        await new Promise((r) => setTimeout(r, 300));
        return enquiries.find((e) => e.enquiryId === id)!;
    }
);
export const addEnquiry = createAsyncThunk<IEnquiry, IEnquiry>(
    "enquiries/add",
    async (enquiry) => enquiry
);
export const updateEnquiry = createAsyncThunk<IEnquiry, IEnquiry>(
    "enquiries/update",
    async (updated) => updated
);
export const removeEnquiry = createAsyncThunk<string, string>(
    "enquiries/remove",
    async (id) => id
);
export const filterEnquiries = createAsyncThunk<
    IEnquiry[],
    Record<string, string | string[]>
>("enquiries/filter", async (query) => {
    return enquiries.filter(() => true);
});
interface EnquiryState {
    data: IEnquiry[];
    selected: IEnquiry | null;
    loading: boolean;
    error: string | null;
    page: number;
    limit: number;
    total: number;
}
const initialState: EnquiryState = {
    data: [],
    selected: null,
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    total: 0,
};
const enquirySlice = createSlice({
    name: "enquiries",
    initialState,
    reducers: {
        resetEnquiryState: () => initialState,
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

            // 🔹 Get all
            .addCase(getAllEnquiries.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllEnquiries.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.total = action.payload.length;
            })

            // 🔹 Get single
            .addCase(getEnquiryById.fulfilled, (state, action) => {
                state.selected = action.payload;
            })

            // 🔹 Add
            .addCase(addEnquiry.fulfilled, (state, action) => {
                state.data.push(action.payload);
                state.total += 1;
            })

            // 🔹 Update
            .addCase(updateEnquiry.fulfilled, (state, action) => {
                const index = state.data.findIndex(
                    (e) => e.enquiryId === action.payload.enquiryId
                );
                if (index !== -1) state.data[index] = action.payload;
            })

            // 🔹 Delete
            .addCase(removeEnquiry.fulfilled, (state, action) => {
                state.data = state.data.filter(
                    (e) => e.enquiryId !== action.payload
                );
                state.total -= 1;
            })

            // 🔹 Filter
            .addCase(filterEnquiries.pending, (state) => {
                state.loading = true;
            })
            .addCase(filterEnquiries.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })

            // 🔹 Global error handler (no any)
            .addMatcher(isRejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message || "Something went wrong";
            });
    },
});
export const { resetEnquiryState, setPagination } = enquirySlice.actions;
export const selectEnquiries = (state: RootState) => state.enquirySlice.data;
export const selectEnquiry = (state: RootState) => state.enquirySlice.selected;
export const selectEnquiryLoading = (state: RootState) => state.enquirySlice.loading;
export const selectEnquiryError = (state: RootState) => state.enquirySlice.error;
export const selectEnquiryPagination = (state: RootState) => ({
    page: state.enquirySlice.page,
    limit: state.enquirySlice.limit,
    total: state.enquirySlice.total,
});

export default enquirySlice.reducer;