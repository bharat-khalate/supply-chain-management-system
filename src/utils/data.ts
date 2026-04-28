import { IFAQ, IPaginatedData } from "@/types";
import { IBuyer } from "@/types/buyer.types";
import { IEnquiry } from "@/types/enquiry.types";
import { IOrder } from "@/types/orders.types";
import { ISample } from "@/types/sample.types";
import { ISearchResult } from "@/types/search.type";
import { IPageSetting, ISetting } from "@/types/settings";
import { IVendor } from "@/types/vendor.types";

export const enquiries: IEnquiry[] = [
  {
    enquiryId: "ENQ001",
    date: "25/3/2026",
    customerName: "Aniket Patil",
    contactPerson: "Amit Sharma",
    qty: 10000,
    expPrice: 10000,
    status: "Active"
  },
  {
    enquiryId: "ENQ002",
    date: "26/3/2026",
    customerName: "Rahul Deshmukh",
    contactPerson: "Neha Joshi",
    qty: 5000,
    expPrice: 7500,
    status: "Pending"
  },
  {
    enquiryId: "ENQ003",
    date: "27/3/2026",
    customerName: "Vikas Kulkarni",
    contactPerson: "Rohit Mehta",
    qty: 8000,
    expPrice: 12000,
    status: "Active"
  },
  {
    enquiryId: "ENQ004",
    date: "28/3/2026",
    customerName: "Sneha Patwardhan",
    contactPerson: "Priya Shah",
    qty: 3000,
    expPrice: 4500,
    status: "Closed"
  },
  {
    enquiryId: "ENQ005",
    date: "29/3/2026",
    customerName: "Ajay Chavan",
    contactPerson: "Kunal Verma",
    qty: 12000,
    expPrice: 15000,
    status: "Active"
  },
  {
    enquiryId: "ENQ006",
    date: "30/3/2026",
    customerName: "Meera Nair",
    contactPerson: "Anil Kumar",
    qty: 6500,
    expPrice: 9000,
    status: "Pending"
  },
  {
    enquiryId: "ENQ007",
    date: "31/3/2026",
    customerName: "Suresh Reddy",
    contactPerson: "Pooja Singh",
    qty: 4000,
    expPrice: 6000,
    status: "Active"
  },
  {
    enquiryId: "ENQ008",
    date: "1/4/2026",
    customerName: "Deepak Gupta",
    contactPerson: "Rahul Jain",
    qty: 9500,
    expPrice: 11000,
    status: "Pending"
  },
  {
    enquiryId: "ENQ009",
    date: "2/4/2026",
    customerName: "Kavita Iyer",
    contactPerson: "Sanjay Mishra",
    qty: 7200,
    expPrice: 9800,
    status: "Closed"
  },
  {
    enquiryId: "ENQ010",
    date: "3/4/2026",
    customerName: "Manish Agarwal",
    contactPerson: "Arjun Kapoor",
    qty: 15000,
    expPrice: 20000,
    status: "Active"
  }
];
export const sampleRecords: ISample[] = [
  {
    sampleId: "SMPE001",
    date: "25/3/2026",
    enquiryId: "ENQ001",
    customerName: "Amit Sharma",
    productCategory: "T-shirt",
    status: "Active"
  },
  {
    sampleId: "SMPE002",
    date: "15/3/2026",
    enquiryId: "ENQ002",
    customerName: "Karan Mehta",
    productCategory: "Packaging",
    status: "Active"
  },
  {
    sampleId: "SMPE003",
    date: "18/3/2026",
    enquiryId: "ENQ003",
    customerName: "Rahul Deshmukh",
    productCategory: "Hoodie",
    status: "Pending"
  },
  {
    sampleId: "SMPE004",
    date: "19/3/2026",
    enquiryId: "ENQ004",
    customerName: "Sneha Patil",
    productCategory: "Label Printing",
    status: "Completed"
  },
  {
    sampleId: "SMPE005",
    date: "20/3/2026",
    enquiryId: "ENQ005",
    customerName: "Vikas Kulkarni",
    productCategory: "T-shirt",
    status: "Active"
  },
  {
    sampleId: "SMPE006",
    date: "21/3/2026",
    enquiryId: "ENQ006",
    customerName: "Priya Shah",
    productCategory: "Poly Bag",
    status: "Pending"
  },
  {
    sampleId: "SMPE007",
    date: "22/3/2026",
    enquiryId: "ENQ007",
    customerName: "Ajay Chavan",
    productCategory: "Carton Box",
    status: "Active"
  },
  {
    sampleId: "SMPE008",
    date: "23/3/2026",
    enquiryId: "ENQ008",
    customerName: "Meera Nair",
    productCategory: "Hoodie",
    status: "Completed"
  },
  {
    sampleId: "SMPE009",
    date: "24/3/2026",
    enquiryId: "ENQ009",
    customerName: "Deepak Gupta",
    productCategory: "Sticker",
    status: "Active"
  },
  {
    sampleId: "SMPE010",
    date: "26/3/2026",
    enquiryId: "ENQ010",
    customerName: "Kavita Iyer",
    productCategory: "Packaging",
    status: "Pending"
  }
];
export const orders: IOrder[] = [
  {
    orderId: "ORD001",
    date: "25/3/2026",
    qty: 2000,
    customerName: "Amit Sharma",
    deliveryDate: "15/4/2026",
    status: "Inactive",
  },
  {
    orderId: "ORD002",
    date: "20/3/2026",
    qty: 10000,
    customerName: "Karan Mehta",
    deliveryDate: "10/4/2026",
    status: "Inactive",
  },
  {
    orderId: "ORD003",
    date: "18/3/2026",
    qty: 3500,
    customerName: "Rahul Verma",
    deliveryDate: "12/4/2026",
    status: "Active",
  },
  {
    orderId: "ORD004",
    date: "15/3/2026",
    qty: 7200,
    customerName: "Sneha Patil",
    deliveryDate: "08/4/2026",
    status: "Active",
  },
  {
    orderId: "ORD005",
    date: "10/3/2026",
    qty: 1500,
    customerName: "Vikram Joshi",
    deliveryDate: "05/4/2026",
    status: "Inactive",
  },
  {
    orderId: "ORD006",
    date: "08/3/2026",
    qty: 9000,
    customerName: "Anjali Gupta",
    deliveryDate: "02/4/2026",
    status: "Active",
  },
  {
    orderId: "ORD007",
    date: "05/3/2026",
    qty: 4800,
    customerName: "Rohit Kulkarni",
    deliveryDate: "30/3/2026",
    status: "Inactive",
  },
  {
    orderId: "ORD008",
    date: "02/3/2026",
    qty: 6200,
    customerName: "Neha Kapoor",
    deliveryDate: "28/3/2026",
    status: "Inactive",
  },
  {
    orderId: "ORD009",
    date: "28/2/2026",
    qty: 3100,
    customerName: "Suresh Reddy",
    deliveryDate: "25/3/2026",
    status: "Active",
  },
  {
    orderId: "ORD010",
    date: "25/2/2026",
    qty: 8700,
    customerName: "Priya Nair",
    deliveryDate: "22/3/2026",
    status: "Inactive",
  },
];
export const vendors: IVendor[] = [
  {
    id: "1",
    name: "Nordic Velour Co.",
    origin: "Portugal, EU",
    code: "VND001",
    type: "Manufacturer",
    category: "Fabric",
    status: "Active",
  },
  {
    id: "2",
    name: "Apex Manufacturing",
    origin: "Ho Chi Minh, VN",
    code: "VND002",
    type: "Supplier",
    category: "Uniforms",
    status: "Inactive",
  },
  {
    id: "3",
    name: "BlueWeave Textiles",
    origin: "Istanbul, TR",
    code: "VND003",
    type: "Manufacturer",
    category: "Fabric",
    status: "Active",
  },
  {
    id: "4",
    name: "Urban Stitch Ltd.",
    origin: "London, UK",
    code: "VND004",
    type: "Supplier",
    category: "Garments",
    status: "Inactive",
  },
  {
    id: "5",
    name: "Golden Loom Mills",
    origin: "Surat, IN",
    code: "VND005",
    type: "Manufacturer",
    category: "Silk Fabric",
    status: "Active",
  },
  {
    id: "6",
    name: "Pacific Apparel",
    origin: "Bangkok, TH",
    code: "VND006",
    type: "Supplier",
    category: "Uniforms",
    status: "Inactive",
  },
  {
    id: "7",
    name: "CottonCraft Industries",
    origin: "Karachi, PK",
    code: "VND007",
    type: "Manufacturer",
    category: "Cotton Fabric",
    status: "Active",
  },
  {
    id: "8",
    name: "EverThread Corp.",
    origin: "Shanghai, CN",
    code: "VND008",
    type: "Supplier",
    category: "Workwear",
    status: "Inactive",
  },
  {
    id: "9",
    name: "Heritage Looms",
    origin: "Milan, IT",
    code: "VND009",
    type: "Manufacturer",
    category: "Luxury Fabric",
    status: "Active",
  },
  {
    id: "10",
    name: "Prime Uniform Supply",
    origin: "Dubai, UAE",
    code: "VND010",
    type: "Supplier",
    category: "Uniforms",
    status: "Active",
  },
];
export const buyers: IBuyer[] = [
  {
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    buyerName: "Global Logistics Partners",
    buyerAddress: "123 Supply Chain Way, Chicago, IL",
    phone: "9123456780",
    email: "procurement@globallogistics.com",
    contactPerson: "Sarah Jenkins",
    buyerType: "Enterprise",
    requirementCategory: "Shipping Supplies",
    status: "Active",
  },
  {
    id: "a4f23e12-8c9d-4e5f-b6a1-d7c8e9f0a1b2",
    buyerName: "Urban Threads Boutique",
    buyerAddress: "456 Fashion Ave, New York, NY",
    phone: "8234567891",
    email: "hello@urbanthreads.io",
    contactPerson: "Marcus Vane",
    buyerType: "Retailer",
    requirementCategory: "Apparel",
    status: "Active",
  },
  {
    id: "c7d8e9f0-b1a2-4d3c-8e9f-0a1b2c3d4e5f",
    buyerName: "Summit Tech Solutions",
    buyerAddress: "888 Silicon Drive, Austin, TX",
    phone: "7345678912",
    email: "ops@summittech.net",
    contactPerson: "Elena Rodriguez",
    buyerType: "Corporate",
    requirementCategory: "IT Hardware",
    status: "Inactive",
  },
  {
    id: "e1b2c3d4-a5b6-4c7d-8e9f-0a1b2c3d4e5f",
    buyerName: "Midwest Wholesale Goods",
    buyerAddress: "202 Industrial Pkwy, Columbus, OH",
    phone: "8456789123",
    email: "bulk@midwestgoods.com",
    contactPerson: "Gary Thompson",
    buyerType: "Wholesaler",
    requirementCategory: "Consumer Electronics",
    status: "Active",
  },
  {
    id: "f0a1b2c3-d4e5-4f6a-b7c8-d9e0f1a2b3c4",
    buyerName: "St. Jude's Medical Center",
    buyerAddress: "777 Healthcare Blvd, Boston, MA",
    phone: "9567891234",
    email: "supplies@stjudes.org",
    contactPerson: "Dr. Linda Wu",
    buyerType: "Institutional",
    requirementCategory: "Medical Equipment",
    status: "Active",
  },
  {
    id: "d9e0f1a2-b3c4-4d5e-6f7a-8b9c0d1e2f3a",
    buyerName: "North Star Outdoors",
    buyerAddress: "333 Alpine Road, Denver, CO",
    phone: "8678912345",
    email: "inventory@northstar.com",
    contactPerson: "Kevin Miller",
    buyerType: "Brand",
    requirementCategory: "Camping Gear",
    status: "Active",
  },
  {
    id: "b7c8d9e0-f1a2-4b3c-d4e5-6f7a8b9c0d1e",
    buyerName: "Metro City Council",
    buyerAddress: "101 Civic Center, Seattle, WA",
    phone: "9789123456",
    email: "purchasing@seattle.gov",
    contactPerson: "Janet Yellen",
    buyerType: "Institutional",
    requirementCategory: "Office Stationery",
    status: "Inactive",
  },
  {
    id: "a5b6c7d8-e9f0-4a1b-2c3d-4e5f6a7b8c9d",
    buyerName: "Pacific Coast Imports",
    buyerAddress: "555 Harbor Blvd, Long Beach, CA",
    phone: "6891234567",
    email: "info@pacificimports.com",
    contactPerson: "Hitoshi Tanaka",
    buyerType: "Wholesaler",
    requirementCategory: "Raw Materials",
    status: "Active",
  },
  {
    id: "9d8c7b6a-5e4f-4d3c-2b1a-0f9e8d7c6b5a",
    buyerName: "Green Earth Organics",
    buyerAddress: "12 Nature Lane, Portland, OR",
    phone: "7981234567",
    email: "orders@greenearth.org",
    contactPerson: "Chloe Green",
    buyerType: "Retailer",
    requirementCategory: "Organic Food",
    status: "Active",
  },
  {
    id: "8c7b6a5e-4f3d-4c2b-1a0f-9e8d7c6b5a4f",
    buyerName: "Alpha Omega Misc Services",
    buyerAddress: "909 Variety St, Phoenix, AZ",
    phone: "9098765432",
    email: "contact@alphaomega.biz",
    contactPerson: "Robert Paulson",
    buyerType: "Misc",
    requirementCategory: "General Maintenance",
    status: "Active",
  },
];
export const getPaginatedData = <T>(
  data: T[]
): IPaginatedData<T> => ({
  data,
  pagination: {
    currentPage: 1,
    lastPage: 3,
    totalCount: 30,
    canNextPage: true,
    canPreviousPage: false,
  },
});
export const configSetting: ISetting = {
  systemEmail: "admin@example.com",
  phone: "+919876543210",
  websiteVideoUrl: "https://example.com/video",
  twitterLink: "https://twitter.com/example",
  instagramLink: "https://instagram.com/example",
  facebookLink: "https://facebook.com/example",
  androidVersion: 1,
  iosVersion: 1,
  androidLink: "https://play.google.com/store/apps/details?id=com.example.app",
  iosLink: "https://apps.apple.com/app/id1234567890",
};
export const pageSetting: IPageSetting = {
  termsAndConditions: `
    <h2>Terms & Conditions</h2>
    <p>Welcome to our platform. By accessing or using our services, you agree to be bound by these terms.</p>
    
    <h3>1. Usage</h3>
    <p>You agree to use the application only for lawful purposes and in a way that does not infringe the rights of others.</p>
    
    <h3>2. Account Responsibility</h3>
    <p>You are responsible for maintaining the confidentiality of your account credentials.</p>
    
    <h3>3. Limitation of Liability</h3>
    <p>We are not liable for any damages arising from the use or inability to use the service.</p>
    
    <p><strong>Note:</strong> These terms may be updated from time to time.</p>
  `,

  aboutUs: `
    <h2>About Us</h2>
    <p>We are a technology-driven company focused on delivering high-quality digital solutions.</p>
    
    <p>Our mission is to create reliable, scalable, and user-friendly applications that solve real-world problems.</p>
    
    <ul>
      <li>Innovative solutions</li>
      <li>Customer-centric approach</li>
      <li>Continuous improvement</li>
    </ul>
    
    <p>We strive to maintain excellence in everything we build.</p>
  `,

  privacyPolicy: `
    <h2>Privacy Policy</h2>
    <p>Your privacy is important to us. This policy explains how we collect and use your data.</p>
    
    <h3>1. Information Collection</h3>
    <p>We may collect personal information such as name, email address, and usage data.</p>
    
    <h3>2. Usage of Information</h3>
    <p>We use your data to improve our services and provide a better user experience.</p>
    
    <h3>3. Data Protection</h3>
    <p>We implement appropriate security measures to protect your data.</p>
    
    <p><strong>Contact:</strong> For any questions, please reach out to our support team.</p>
  `,
};
export const SearchResult: ISearchResult = [
  {
    "type": "buyer",
    "result": {
      "data": buyers,
      "pagination": { "currentPage": 1, "lastPage": 1, "totalCount": 10, "canNextPage": false, "canPreviousPage": false }
    }
  },

  {
    "type": "vendor",
    "result": {
      "data": vendors,
      "pagination": { "currentPage": 1, "lastPage": 1, "totalCount": 10, "canNextPage": false, "canPreviousPage": false }
    }
  },

  {
    "type": "enquiry",
    "result": {
      "data": enquiries,
      "pagination": { "currentPage": 1, "lastPage": 1, "totalCount": 10, "canNextPage": false, "canPreviousPage": false }
    }
  },

  {
    "type": "order",
    "result": {
      "data": orders,
      "pagination": { "currentPage": 1, "lastPage": 1, "totalCount": 10, "canNextPage": false, "canPreviousPage": false }
    }
  },

  {
    "type": "sample",
    "result": {
      "data": sampleRecords,
      "pagination": { "currentPage": 1, "lastPage": 1, "totalCount": 10, "canNextPage": false, "canPreviousPage": false }
    }
  }
]
export const FAQ: IFAQ[] = [
  {
    id: "faq-1",
    question: "How to create a new buyer?",
    answer: "Navigate to buyer section and click on create buyer.",
    sequence: 1,
    category: "BUYER",
    createdOn:"2024-01-01",
    status: "Active",
  },
  {
    id: "faq-2",
    question: "How to update buyer details?",
    answer: "Go to buyer list, select a buyer and click edit.",
    sequence: 2,
    category: "BUYER",
    createdOn:  "2024-01-02",
    status: "Active",
  },
  {
    id: "faq-3",
    question: "How to delete a vendor?",
    answer: "Select vendor and click delete button.",
    sequence: 3,
    category: "VENDOR",
    createdOn:  "2024-01-03",
    status: "Inactive",
  },
  {
    id: "faq-4",
    question: "How to create a vendor?",
    answer: "Go to vendor page and fill the create form.",
    sequence: 4,
    category: "VENDOR",
    createdOn:  "2024-01-04",
    status: "Active",
  },
  {
    id: "faq-5",
    question: "How to place an order?",
    answer: "Navigate to order section and click create order.",
    sequence: 5,
    category: "ORDER",
    createdOn:  "2024-01-05",
    status: "Active",
  },
  {
    id: "faq-6",
    question: "How to cancel an order?",
    answer: "Open the order details and click cancel.",
    sequence: 6,
    category: "ORDER",
    createdOn:  "2024-01-06",
    status: "Inactive",
  },
  {
    id: "faq-7",
    question: "What is a sample request?",
    answer: "Sample request is used to request product samples.",
    sequence: 7,
    category: "SAMPLE",
    createdOn:  "2024-01-07",
    status: "Active",
  },
  {
    id: "faq-8",
    question: "How to create a sample?",
    answer: "Go to sample section and create a new sample.",
    sequence: 8,
    category: "SAMPLE",
    createdOn:  "2024-01-08",
    status: "Active",
  },
  {
    id: "faq-9",
    question: "How to raise an enquiry?",
    answer: "Navigate to enquiry and fill the enquiry form.",
    sequence: 9,
    category: "ENQUIRY",
    createdOn:  "2024-01-09",
    status: "Active",
  },
  {
    id: "faq-10",
    question: "How to close an enquiry?",
    answer: "Open enquiry details and mark it as closed.",
    sequence: 10,
    category: "ENQUIRY",
    createdOn:  "2024-01-10",
    status: "Inactive",
  },
  
];