import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IEnquiry, enquiries } from "@/utils/Data";



/**
 * function returning array of enquiry object i.e. IEnquiry
 */
export const getAllEnquiries = createAsyncThunk("enquiries/getAllEnquiries", async () => {
    try {
        //simulate api calls
        return enquiries;
    } catch (err) {
        throw err;
    }
})

/**
 * function to hit the remove enquiry api
 * @param enquiryId is a id of enquiry you want to delete
 * @returns id of removed record
 */
export const removeEnquiry = createAsyncThunk("enquiries/deleteEnquiry", async (enquiryId: string) => {
    try {
        //simulate api call
        return enquiryId;
    } catch (err) {
        //handle error
        throw err;
    }
});

/**
 * function to hit the create enquiry api
 * @param enquiry is an object of enquiry type
 * @returns created enquiry object
 */
export const addEnquiry = createAsyncThunk("enquiries/addEnquiry", async (enquiry: IEnquiry) => {
    try {
        // simulate api call and return the response
        return enquiry;
    } catch (err) {
        //handle error
        throw err;
    }
})


/**
 * initial state involves data and loading field 
 * loading can be used to display the spinner 
 */
const initialState = {
    enquiries: enquiries,
    loading: false
}


const slice = createSlice({
    name: "enquirySlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllEnquiries.fulfilled, (state, action) => {
                return {
                    enquiries: [...action.payload],
                    loading: false
                }
            })
            .addCase(getAllEnquiries.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getAllEnquiries.rejected, (state, action) => {
                state.loading = false
            })
            .addCase(addEnquiry.pending, (state, action) => {
                state.loading = true
            })
            .addCase(addEnquiry.fulfilled, (state, action) => {
                return {
                    enquiries: [...state.enquiries, action.payload],
                    loading: false
                }
            })
            .addCase(addEnquiry.rejected, (state, action) => {
                state.loading = false
            })
            .addCase(removeEnquiry.pending, (state, action) => {
                state.loading = true
            })
            .addCase(removeEnquiry.fulfilled, (state, action) => {
                return {
                    enquiries: [...state.enquiries.filter(enquiry => enquiry.enquiryId != action.payload)],
                    loading: false
                }
            })
            .addCase(removeEnquiry.rejected, (state, action) => {
                state.loading = false
            })
    }
})


export default slice.reducer;