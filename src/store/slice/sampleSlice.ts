import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { ISample, sampleRecords } from "@/utils/Data"

export const getAllSample = createAsyncThunk<ISample[], void>("sample/getAllSample", async () => {
    try {
        //simulate api calls
        return sampleRecords;
    } catch (err) {
        //handle error
        throw err;
    }
})

export const removeSample = createAsyncThunk<string, string>("sample/removeSample", async (sampleId: string) => {
    try {
        //simulate api calls
        return sampleId;
    } catch (err) {
        //handling the error
        throw err
    }
})

export const addSample = createAsyncThunk<ISample, ISample>("sample/addSample", async (sample: ISample) => {
    try {
        //simulate api call
        return sample;
    } catch (err) {
        //handle error
        throw err;
    }
})

const initialState = {
    sample: [] as ISample[],
    loading: false,
    error: {}
}

const slice = createSlice({
    name: "sample",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllSample.pending, (state, action) => { state.loading = true })
            .addCase(getAllSample.fulfilled, (state, action) => {
                state.sample = action.payload;
                state.loading = false;
            })
            .addCase(getAllSample.rejected, (state, action) => { state.loading = false })
            .addCase(addSample.pending, (state, action) => { state.loading = false })
            .addCase(addSample.fulfilled, (state, action) => {
                state.sample.push(action.payload);
                state.loading = false;
            })
            .addCase(addSample.rejected, (state, action) => { state.loading = false })
            .addCase(removeSample.pending, (state, action) => { state.loading = true })
            .addCase(removeSample.fulfilled, (state, action) => {
                state.sample = state.sample.filter((sample) => sample.sampleId != action.payload);
                state.loading = false;
            })
            .addCase(removeSample.rejected, (state, action) => { state.loading = false });
    }
})


export default slice.reducer;
