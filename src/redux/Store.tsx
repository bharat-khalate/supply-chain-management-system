'use client'
import { configureStore } from "@reduxjs/toolkit";
import { buyerSlice, enquirySlice, configSettingSlice, orderSlice, pageSettingSlice, sampleSlice, vendorSlice, searchSlice } from "@/redux/slice";
import { Provider } from "react-redux"
const store = configureStore({
    reducer: {
        buyerSlice: buyerSlice,
        enquirySlice: enquirySlice,
        orderSlice: orderSlice,
        sampleSlice: sampleSlice,
        vendorSlice: vendorSlice,
        configSettingSlice: configSettingSlice,
        pageSettingSlice: pageSettingSlice,
        searchSlice: searchSlice
    }
})
export default function StoreProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}> {children} </Provider>
}
export type RootState = ReturnType<typeof store.getState>
export type IDispatch = typeof store.dispatch;
