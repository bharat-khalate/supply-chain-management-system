import buyerSlice, { fetchBuyers, addBuyer, removeBuyer, selectBuyers, selectBuyer, selectBuyerError, selectBuyerLoading, selectBuyerPagination } from "@/redux/slice/buyer.slice"
import enquirySlice, { addEnquiry, removeEnquiry, getAllEnquiries } from "@/redux/slice/enquiry.slice"
import orderSlice, { addOrder, removeOrder, getAllOrders } from "@/redux/slice/order.slice"
import sampleSlice, { addSample, removeSample, getAllSample } from "@/redux/slice/sample.slice"
import vendorSlice, { addVendor, getAllVendors, removeVendor } from "@/redux/slice/vendor.slice"
import configSettingSlice, { fetchConfigSetting, updateConfigSetting, selectConfigSettingError, selectConfigSettingLoader, selectConfigSettings, selectSelectedConfigSetting } from "./config.setting.slice"
import pageSettingSlice, { selectPageSetting, selectPageSettingError, selectPageSettingLoader, selectSelectedPageSetting } from "./page.setting"
export { buyerSlice, fetchBuyers, addBuyer, removeBuyer, selectBuyers, selectBuyer, selectBuyerError, selectBuyerLoading, selectBuyerPagination };
export { enquirySlice, addEnquiry, removeEnquiry, getAllEnquiries }
export { orderSlice, addOrder, removeOrder, getAllOrders }
export { sampleSlice, removeSample, addSample, getAllSample }
export { vendorSlice, addVendor, getAllVendors, removeVendor }
export { configSettingSlice, fetchConfigSetting, updateConfigSetting, selectConfigSettingError, selectConfigSettingLoader, selectConfigSettings, selectSelectedConfigSetting }
export { pageSettingSlice, selectPageSetting, selectPageSettingError, selectPageSettingLoader, selectSelectedPageSetting }
