export type IEnquiry = {
  enquiryId: string;
  date: string;
  customerName: string;
  contactPerson: string;
  qty: number;
  expPrice: number;
  status: "Active" | "Pending" | "Closed";
};
export type ISample = {
  sampleId: string;
  date: string;
  enquiryId: string;
  customerName: string;
  productCategory: string;
  status: "Active" | "Pending" | "Completed";
};
export type ITOrder = {
  orderId: string;
  date: string;
  qty: number;
  customerName: string;
  deliveryDate: string;
  status: "Active" | "Inactive";
};
export interface ICustomer {
  vendorAndOrigin: string;
  location: string;
  code: string;
  type: "ENTERPRISE" | "RETAIL";
  contactPerson: string;
  isActive: boolean;
}


export interface IBuyer {
  id: string;
  buyerName: string,
  buyerAddress: string;
  phone: string;
  email: string;
  contactPerson: string;
  buyerType: "Retailer" | "Wholesaler" | "Brand" | "Corporate" | "Institutional" | "Enterprise" | "Misc";
  requirementCategory: string;
  status: "Active" | "Inactive";
}


export interface IVendor {
  id: string;
  name: string;
  origin: string;
  code: string;
  type: "Manufacturer" | "Supplier";
  category: string;
  status: "Active" | "Inactive";
}

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

export const orders: ITOrder[] = [
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

export const BuyersData: ICustomer[] = [
  {
    vendorAndOrigin: "Reliance Retail",
    location: "Portugal, EU",
    code: "CUST001",
    type: "ENTERPRISE",
    contactPerson: "Amit Sharma",
    isActive: false,
  },
  {
    vendorAndOrigin: "Tata Consumer Products",
    location: "Mumbai, India",
    code: "CUST002",
    type: "ENTERPRISE",
    contactPerson: "Rahul Mehta",
    isActive: true,
  },
  {
    vendorAndOrigin: "ITC Limited",
    location: "Kolkata, India",
    code: "CUST003",
    type: "ENTERPRISE",
    contactPerson: "Sneha Verma",
    isActive: true,
  },
  {
    vendorAndOrigin: "Nestle",
    location: "Vevey, Switzerland",
    code: "CUST004",
    type: "ENTERPRISE",
    contactPerson: "Daniel Costa",
    isActive: false,
  },
  {
    vendorAndOrigin: "Unilever",
    location: "London, UK",
    code: "CUST005",
    type: "ENTERPRISE",
    contactPerson: "Priya Nair",
    isActive: false,
  },
  {
    vendorAndOrigin: "Adani Wilmar",
    location: "Ahmedabad, India",
    code: "CUST006",
    type: "ENTERPRISE",
    contactPerson: "Karan Patel",
    isActive: true,
  },
  {
    vendorAndOrigin: "PepsiCo",
    location: "New York, USA",
    code: "CUST007",
    type: "ENTERPRISE",
    contactPerson: "Emily Johnson",
    isActive: false,
  },
  {
    vendorAndOrigin: "Britannia Industries",
    location: "Bangalore, India",
    code: "CUST008",
    type: "ENTERPRISE",
    contactPerson: "Ankit Gupta",
    isActive: true,
  },
  {
    vendorAndOrigin: "Amul",
    location: "Anand, India",
    code: "CUST009",
    type: "ENTERPRISE",
    contactPerson: "Rohit Shah",
    isActive: true,
  },
  {
    vendorAndOrigin: "Danone",
    location: "Paris, France",
    code: "CUST010",
    type: "ENTERPRISE",
    contactPerson: "Claire Dubois",
    isActive: false,
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
    status: "inActive",
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
    status: "inActive",
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