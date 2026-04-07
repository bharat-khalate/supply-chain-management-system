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