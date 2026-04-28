import buyerService, { TBuyerService } from "./buyer.service";
import enquiryService, { TEnquiryService } from "./enquiry.service";
import orderService, { TOrderService } from "./order.service";
import sampleService, { TSampleService } from "./sample.service";
import vendorService, { TVendorService } from "./vendor.service";
import configSettingService, { TSettingService } from "./config.setting.service";
import pageSettingService, { TPageSettingService } from "./page.setting.service";
import { searchService, TSearchService } from "@/service/search.service"
import { faqService, TFaqService } from "./faq.service";
export { buyerService };
export { enquiryService }
export { orderService }
export { sampleService }
export { vendorService }
export { configSettingService }
export { pageSettingService }
export { searchService }
export { faqService }
//types export
export type { TSettingService };
export type { TBuyerService }
export type { TEnquiryService }
export type { TOrderService }
export type { TSampleService }
export type { TVendorService }
export type { TPageSettingService }
export type { TSearchService }
export type { TFaqService }