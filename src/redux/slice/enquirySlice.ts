import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { IEnquiry, IPaginatedState } from "@/types";
import { enquiryService } from "@/service";
import { IFetchServiceParams } from "@/types/service/service.types";
export const getAllEnquiries = createAsyncThunk(
    "enquiries/getAll",
    async (props: IFetchServiceParams, { rejectWithValue }) => {
        try {
            return await enquiryService.getAll(props);
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch enquiries");
        }
    }
);
export const getEnquiryById = createAsyncThunk(
    "enquiries/getById",
    async (id: string, { rejectWithValue }) => {
        try {
            return await enquiryService.getById(id);
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to fetch enquiry");
        }
    }
);
export const addEnquiry = createAsyncThunk(
    "enquiries/add",
    async (enquiry: IEnquiry, { rejectWithValue }) => {
        try {
            return await enquiryService.add(enquiry);
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to add enquiry");
        }
    }
);
export const updateEnquiry = createAsyncThunk(
    "enquiries/update",
    async (updated: IEnquiry, { rejectWithValue }) => {
        try {
            return await enquiryService.update(updated);
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to update enquiry");
        }
    }
);
export const removeEnquiry = createAsyncThunk(
    "enquiries/remove",
    async (id: string, { rejectWithValue }) => {
        try {
            return await enquiryService.remove(id);
        } catch (error: any) {
            return rejectWithValue(error.message || "Failed to remove enquiry");
        }
    }
);
const initialState: IPaginatedState<IEnquiry> = {
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
const enquirySlice = createSlice({
    name: "enquiries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllEnquiries.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllEnquiries.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.pagination = action.payload.pagination
            })
            .addCase(getEnquiryById.fulfilled, (state, action) => {
                state.selected = action.payload;
            })
            .addCase(addEnquiry.fulfilled, (state, action) => {
                state.loading = false;
                state.selected = action.payload; // optionalF
            })
            .addCase(updateEnquiry.fulfilled, (state, action) => {
                state.loading = false;
                state.selected = action.payload;
            })
            .addCase(removeEnquiry.fulfilled, (state) => {
                state.loading = false;
            })
            .addMatcher(
                (action) => action.type.startsWith("enquiries/") && action.type.endsWith("/rejected"),
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
    },
});

export const selectEnquiries = (state: RootState) => state.enquirySlice.data;
export const selectEnquiry = (state: RootState) => state.enquirySlice.selected;
export const selectEnquiryLoading = (state: RootState) => state.enquirySlice.loading;
export const selectEnquiryError = (state: RootState) => state.enquirySlice.error;
export const selectEnquiryPagination = (state: RootState) => state.enquirySlice.pagination;

export default enquirySlice.reducer;