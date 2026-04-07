import { createSlice } from "@reduxjs/toolkit"
import { BuyersData, ICustomer } from "@/utils/Data"

const initialState: ICustomer[] = BuyersData;
interface IPayload { payload: ICustomer, type: string }

const slice = createSlice({
    name: "customers",
    initialState: initialState,
    reducers: {
        addCustomer: (state, action: IPayload) => {
            state.push(action.payload);
        },
        removeCustomer: (state, action: { payload: string, type: string }) => {
            return state.filter(customer => customer.code != action.payload)
        }
    }
})

export default slice.reducer;
export const { addCustomer, removeCustomer } = slice.actions;