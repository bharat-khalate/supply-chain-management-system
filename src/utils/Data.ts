export type IEnquiry = {
  enquiryId: string;
  date: string;
  customerName: string;
  contactPerson: string;
  qty: number;
  expPrice: number;
  status: "Active" | "Pending" | "Closed";
};


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



export type ISample = {
  sampleId: string;
  date: string;
  enquiryId: string;
  customerName: string;
  productCategory: string;
  status: "Active" | "Pending" | "Completed";
};




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


export type ITOrder = {
  orderId: string;
  date: string;
  qty: number;
  customerName: string;
  deliveryDate: string;
  status: "Active" | "Inactive";
};



export const orders: ITOrder[] = [
  {
    orderId: "ORD001",
    date: "25/3/2026",
    qty: 2000,
    customerName: "Amit Sharma",
    deliveryDate: "15/4/2026",
    status: "Active",
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
    status: "Active",
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