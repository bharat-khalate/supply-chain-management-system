    import { createSlice, createAsyncThunk, PayloadAction, UnknownAction } from "@reduxjs/toolkit";
    import { buyers, IBuyer } from "@/utils/data";
    import { RootState } from "../Store";
    export const fetchBuyers = createAsyncThunk<IBuyer[]>(
        "buyers/fetchAll",
        async () => {
            await new Promise((r) => setTimeout(r, 500));
            return buyers;
        }
    );
    export const fetchBuyerById = createAsyncThunk<IBuyer, string>(
        "buyers/fetchById",
        async (id) => {
            await new Promise((r) => setTimeout(r, 300));
            return buyers.find((b) => b.id === id)!;
        }
    );
    export const addBuyer = createAsyncThunk<IBuyer, IBuyer>(
        "buyers/add",
        async (newBuyer) => {
            return newBuyer;
        }
    );
    export const updateBuyer = createAsyncThunk<IBuyer, IBuyer>(
        "buyers/update",
        async (updatedBuyer) => {
            return updatedBuyer;
        }
    );

    export const removeBuyer = createAsyncThunk<string, string>(
        "buyers/remove",
        async (id) => id
    );
    export const filterBuyer = createAsyncThunk<
        IBuyer[],
        Record<string, string | string[]>
    >("buyers/filter", async (query) => {
        return buyers.filter(() => true);
    });
    interface BuyerState {
        data: IBuyer[];
        selected: IBuyer | null;
        loading: boolean;
        error: string | null;
        page: number;
        limit: number;
        total: number;
    }
    const initialState: BuyerState = {
        data: [],
        selected: null,
        loading: false,
        error: null,
        page: 1,
        limit: 10,
        total: 0,
    };
    const buyerSlice = createSlice({
        name: "buyers",
        initialState,
        reducers: {
            resetBuyerState: () => initialState,
            setPagination: (state, action: PayloadAction<{ page: number; limit: number }>) => {
                state.page = action.payload.page;
                state.limit = action.payload.limit;
            },
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchBuyers.pending, (state) => {
                    state.loading = true;
                })
                .addCase(fetchBuyers.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data = action.payload;
                    state.total = action.payload.length;
                })
                .addCase(fetchBuyerById.fulfilled, (state, action) => {
                    state.selected = action.payload;
                })
                .addCase(addBuyer.fulfilled, (state, action) => {
                    state.data.push(action.payload);
                    console.log(state.data)
                    state.total += 1;
                })
                .addCase(updateBuyer.fulfilled, (state, action) => {
                    const index = state.data.findIndex((b) => b.id === action.payload.id);
                    if (index !== -1) state.data[index] = action.payload;
                })
                .addCase(removeBuyer.fulfilled, (state, action) => {
                    state.data = state.data.filter((b) => b.id !== action.payload);
                    state.total -= 1;
                })
                .addCase(filterBuyer.pending, (state) => {
                    state.loading = true;
                })
                .addCase(filterBuyer.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data = action.payload;
                })
                .addMatcher(
                    (action): action is UnknownAction => action.type.endsWith("/rejected"),
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
    export const { resetBuyerState, setPagination } = buyerSlice.actions;
    export const selectBuyers = (state: RootState) => state.buyerSlice.data;
    export const selectBuyer = (state: RootState) => state.buyerSlice.selected;
    export const selectBuyerLoading = (state: RootState) => state.buyerSlice.loading;
    export const selectBuyerError = (state: RootState) => state.buyerSlice.error;
    export const selectPagination = (state: RootState) => ({
        page: state.buyerSlice.page,
        limit: state.buyerSlice.limit,
        total: state.buyerSlice.total,
    });

    export default buyerSlice.reducer;