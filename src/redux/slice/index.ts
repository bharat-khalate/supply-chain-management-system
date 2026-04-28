import buyerSlice, { addBuyer, fetchBuyers, removeBuyer, selectBuyer, selectBuyerError, selectBuyerLoading, selectBuyerPagination, selectBuyers } from "@/redux/slice/buyer.slice"
import enquirySlice, { addEnquiry, getAllEnquiries, removeEnquiry } from "@/redux/slice/enquiry.slice"
import orderSlice, { addOrder, getAllOrders, removeOrder } from "@/redux/slice/order.slice"
import sampleSlice, { addSample, getAllSample, removeSample } from "@/redux/slice/sample.slice"
import vendorSlice, { addVendor, getAllVendors, removeVendor } from "@/redux/slice/vendor.slice"
import configSettingSlice, { fetchConfigSetting, selectConfigSettingError, selectConfigSettingLoader, selectConfigSettings, selectSelectedConfigSetting, updateConfigSetting } from "./config.setting.slice"
import pageSettingSlice, { selectPageSetting, selectPageSettingError, selectPageSettingLoader, selectSelectedPageSetting } from "./page.setting"
import searchSlice, { selectSearchData, selectSearchDataLoading, selectSearchError, selectSelectedSearch, getSearchResult } from "./search.slice"
import faqSlice, { selectFaqData, selectFaqError, selectFaqLoading, selectFaqPagination, selectSelectedFaq } from "./faq.slice"

export { addBuyer, addEnquiry, addOrder, addSample, addVendor, buyerSlice, configSettingSlice, enquirySlice, fetchBuyers, fetchConfigSetting, getAllEnquiries, getAllOrders, getAllSample, getAllVendors, orderSlice, pageSettingSlice, removeBuyer, removeEnquiry, removeOrder, removeSample, removeVendor, sampleSlice, selectBuyer, selectBuyerError, selectBuyerLoading, selectBuyerPagination, selectBuyers, selectConfigSettingError, selectConfigSettingLoader, selectConfigSettings, selectPageSetting, selectPageSettingError, selectPageSettingLoader, selectSelectedConfigSetting, selectSelectedPageSetting, updateConfigSetting, vendorSlice }
export { searchSlice, selectSearchData, selectSearchDataLoading, selectSearchError, selectSelectedSearch, getSearchResult }
export { faqSlice, selectFaqData, selectFaqError, selectFaqLoading, selectFaqPagination, selectSelectedFaq }

