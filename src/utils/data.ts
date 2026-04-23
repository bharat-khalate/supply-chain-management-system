import { IPaginatedData } from "@/types";
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
    phone: "+1-555-010-1234",
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
    phone: "+1-555-012-3456",
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
    phone: "+1-555-015-7890",
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
    phone: "+1-555-018-2233",
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
    phone: "+1-555-020-4455",
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
    phone: "+1-555-022-6677",
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
    phone: "+1-555-025-8899",
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
    phone: "+1-555-028-1122",
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
    phone: "+1-555-030-3344",
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
    phone: "+1-555-033-5566",
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
      "data": [
        { "id": "B001", "buyerName": "Apex Retail", "buyerAddress": "Mumbai", "phone": "9876543210", "email": "apex@test.com", "contactPerson": "Rohit", "buyerType": "Retailer", "requirementCategory": "Textiles", "status": "Active" },
        { "id": "B002", "buyerName": "Global Mart", "buyerAddress": "Delhi", "phone": "9876543211", "email": "global@test.com", "contactPerson": "Ankit", "buyerType": "Wholesaler", "requirementCategory": "Electronics", "status": "Active" },
        { "id": "B003", "buyerName": "Urban Brand", "buyerAddress": "Bangalore", "phone": "9876543212", "email": "urban@test.com", "contactPerson": "Neha", "buyerType": "Brand", "requirementCategory": "Fashion", "status": "Inactive" },
        { "id": "B004", "buyerName": "Corp Hub", "buyerAddress": "Pune", "phone": "9876543213", "email": "corp@test.com", "contactPerson": "Amit", "buyerType": "Corporate", "requirementCategory": "Office", "status": "Active" },
        { "id": "B005", "buyerName": "Edu Supplies", "buyerAddress": "Chennai", "phone": "9876543214", "email": "edu@test.com", "contactPerson": "Priya", "buyerType": "Institutional", "requirementCategory": "Stationery", "status": "Active" },
        { "id": "B006", "buyerName": "Mega Ent", "buyerAddress": "Hyderabad", "phone": "9876543215", "email": "mega@test.com", "contactPerson": "Rahul", "buyerType": "Enterprise", "requirementCategory": "Machinery", "status": "Active" },
        { "id": "B007", "buyerName": "City Retail", "buyerAddress": "Ahmedabad", "phone": "9876543216", "email": "city@test.com", "contactPerson": "Mehul", "buyerType": "Retailer", "requirementCategory": "Groceries", "status": "Inactive" },
        { "id": "B008", "buyerName": "Quick Supply", "buyerAddress": "Kolkata", "phone": "9876543217", "email": "quick@test.com", "contactPerson": "Sourav", "buyerType": "Wholesaler", "requirementCategory": "FMCG", "status": "Active" },
        { "id": "B009", "buyerName": "Trendz", "buyerAddress": "Surat", "phone": "9876543218", "email": "trendz@test.com", "contactPerson": "Kiran", "buyerType": "Brand", "requirementCategory": "Clothing", "status": "Active" },
        { "id": "B010", "buyerName": "Misc Traders", "buyerAddress": "Jaipur", "phone": "9876543219", "email": "misc@test.com", "contactPerson": "Vikas", "buyerType": "Misc", "requirementCategory": "General", "status": "Inactive" }
      ],
      "pagination": { "currentPage": 1, "lastPage": 1, "totalCount": 10, "canNextPage": false, "canPreviousPage": false }
    }
  },

  {
    "type": "vendor",
    "result": {
      "data": [
        { "id": "V001", "name": "Steel Corp", "origin": "India", "code": "ST01", "type": "Manufacturer", "category": "Steel", "status": "Active" },
        { "id": "V002", "name": "TexFab", "origin": "India", "code": "TX02", "type": "Supplier", "category": "Textiles", "status": "Active" },
        { "id": "V003", "name": "ElectroHub", "origin": "China", "code": "EL03", "type": "Manufacturer", "category": "Electronics", "status": "Inactive" },
        { "id": "V004", "name": "ChemSource", "origin": "Germany", "code": "CH04", "type": "Supplier", "category": "Chemicals", "status": "Active" },
        { "id": "V005", "name": "AutoParts", "origin": "Japan", "code": "AP05", "type": "Manufacturer", "category": "Automobile", "status": "Active" },
        { "id": "V006", "name": "PaperWorks", "origin": "India", "code": "PW06", "type": "Supplier", "category": "Stationery", "status": "Active" },
        { "id": "V007", "name": "AgroFarm", "origin": "India", "code": "AF07", "type": "Manufacturer", "category": "Agri", "status": "Inactive" },
        { "id": "V008", "name": "PackRight", "origin": "USA", "code": "PK08", "type": "Supplier", "category": "Packaging", "status": "Active" },
        { "id": "V009", "name": "BuildMax", "origin": "UAE", "code": "BM09", "type": "Manufacturer", "category": "Construction", "status": "Active" },
        { "id": "V010", "name": "FoodChain", "origin": "India", "code": "FC10", "type": "Supplier", "category": "FMCG", "status": "Active" }
      ],
      "pagination": { "currentPage": 1, "lastPage": 1, "totalCount": 10, "canNextPage": false, "canPreviousPage": false }
    }
  },

  {
    "type": "enquiry",
    "result": {
      "data": [
        { "enquiryId": "E001", "date": "2026-04-01", "customerName": "Apex Retail", "contactPerson": "Rohit", "qty": 100, "expPrice": 500, "status": "Active" },
        { "enquiryId": "E002", "date": "2026-04-02", "customerName": "Global Mart", "contactPerson": "Ankit", "qty": 200, "expPrice": 300, "status": "Pending" },
        { "enquiryId": "E003", "date": "2026-04-03", "customerName": "Urban Brand", "contactPerson": "Neha", "qty": 150, "expPrice": 700, "status": "Closed" },
        { "enquiryId": "E004", "date": "2026-04-04", "customerName": "Corp Hub", "contactPerson": "Amit", "qty": 500, "expPrice": 250, "status": "Active" },
        { "enquiryId": "E005", "date": "2026-04-05", "customerName": "Edu Supplies", "contactPerson": "Priya", "qty": 300, "expPrice": 150, "status": "Pending" },
        { "enquiryId": "E006", "date": "2026-04-06", "customerName": "Mega Ent", "contactPerson": "Rahul", "qty": 1000, "expPrice": 900, "status": "Active" },
        { "enquiryId": "E007", "date": "2026-04-07", "customerName": "City Retail", "contactPerson": "Mehul", "qty": 120, "expPrice": 400, "status": "Closed" },
        { "enquiryId": "E008", "date": "2026-04-08", "customerName": "Quick Supply", "contactPerson": "Sourav", "qty": 250, "expPrice": 350, "status": "Active" },
        { "enquiryId": "E009", "date": "2026-04-09", "customerName": "Trendz", "contactPerson": "Kiran", "qty": 600, "expPrice": 800, "status": "Pending" },
        { "enquiryId": "E010", "date": "2026-04-10", "customerName": "Misc Traders", "contactPerson": "Vikas", "qty": 90, "expPrice": 200, "status": "Closed" }
      ],
      "pagination": { "currentPage": 1, "lastPage": 1, "totalCount": 10, "canNextPage": false, "canPreviousPage": false }
    }
  },

  {
    "type": "order",
    "result": {
      "data": [
        { "orderId": "O001", "date": "2026-04-01", "qty": 100, "customerName": "Apex Retail", "deliveryDate": "2026-04-10", "status": "Active" },
        { "orderId": "O002", "date": "2026-04-02", "qty": 200, "customerName": "Global Mart", "deliveryDate": "2026-04-12", "status": "Inactive" },
        { "orderId": "O003", "date": "2026-04-03", "qty": 150, "customerName": "Urban Brand", "deliveryDate": "2026-04-15", "status": "Active" },
        { "orderId": "O004", "date": "2026-04-04", "qty": 500, "customerName": "Corp Hub", "deliveryDate": "2026-04-20", "status": "Active" },
        { "orderId": "O005", "date": "2026-04-05", "qty": 300, "customerName": "Edu Supplies", "deliveryDate": "2026-04-18", "status": "Inactive" },
        { "orderId": "O006", "date": "2026-04-06", "qty": 1000, "customerName": "Mega Ent", "deliveryDate": "2026-04-25", "status": "Active" },
        { "orderId": "O007", "date": "2026-04-07", "qty": 120, "customerName": "City Retail", "deliveryDate": "2026-04-14", "status": "Inactive" },
        { "orderId": "O008", "date": "2026-04-08", "qty": 250, "customerName": "Quick Supply", "deliveryDate": "2026-04-16", "status": "Active" },
        { "orderId": "O009", "date": "2026-04-09", "qty": 600, "customerName": "Trendz", "deliveryDate": "2026-04-22", "status": "Active" },
        { "orderId": "O010", "date": "2026-04-10", "qty": 90, "customerName": "Misc Traders", "deliveryDate": "2026-04-13", "status": "Inactive" }
      ],
      "pagination": { "currentPage": 1, "lastPage": 1, "totalCount": 10, "canNextPage": false, "canPreviousPage": false }
    }
  },

  {
    "type": "sample",
    "result": {
      "data": [
        { "sampleId": "S001", "date": "2026-04-01", "enquiryId": "E001", "customerName": "Apex Retail", "productCategory": "Textiles", "status": "Active" },
        { "sampleId": "S002", "date": "2026-04-02", "enquiryId": "E002", "customerName": "Global Mart", "productCategory": "Electronics", "status": "Pending" },
        { "sampleId": "S003", "date": "2026-04-03", "enquiryId": "E003", "customerName": "Urban Brand", "productCategory": "Fashion", "status": "Completed" },
        { "sampleId": "S004", "date": "2026-04-04", "enquiryId": "E004", "customerName": "Corp Hub", "productCategory": "Office", "status": "Active" },
        { "sampleId": "S005", "date": "2026-04-05", "enquiryId": "E005", "customerName": "Edu Supplies", "productCategory": "Stationery", "status": "Pending" },
        { "sampleId": "S006", "date": "2026-04-06", "enquiryId": "E006", "customerName": "Mega Ent", "productCategory": "Machinery", "status": "Completed" },
        { "sampleId": "S007", "date": "2026-04-07", "enquiryId": "E007", "customerName": "City Retail", "productCategory": "Groceries", "status": "Active" },
        { "sampleId": "S008", "date": "2026-04-08", "enquiryId": "E008", "customerName": "Quick Supply", "productCategory": "FMCG", "status": "Pending" },
        { "sampleId": "S009", "date": "2026-04-09", "enquiryId": "E009", "customerName": "Trendz", "productCategory": "Clothing", "status": "Completed" },
        { "sampleId": "S010", "date": "2026-04-10", "enquiryId": "E010", "customerName": "Misc Traders", "productCategory": "General", "status": "Active" }
      ],
      "pagination": { "currentPage": 1, "lastPage": 1, "totalCount": 10, "canNextPage": false, "canPreviousPage": false }
    }
  }
]