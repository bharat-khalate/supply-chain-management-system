import buyerSlice, { addBuyer, removeBuyer   } from "@/store/slice/buyerSlice"
import enquirySlice, { addEnquiry, removeEnquiry, getAllEnquiries } from "@/store/slice/enquirySlice"
import orderSlice, { addOrder, removeOrder, getAllOrders } from "@/store/slice/orderSlice"
import sampleSlice, { addSample, removeSample, getAllSample } from "@/store/slice/sampleSlice"
import vendorSlice, { addVendor, getAllVendors, removeVendor } from "@/store/slice/vendorSlice"

export { buyerSlice, addBuyer, removeBuyer };
export { enquirySlice, addEnquiry, removeEnquiry, getAllEnquiries }
export { orderSlice, addOrder, removeOrder, getAllOrders }
export { sampleSlice, removeSample, addSample, getAllSample }
export { vendorSlice, addVendor, getAllVendors, removeVendor }
