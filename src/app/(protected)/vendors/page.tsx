"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { Modal } from "@/components/ui/Modal";
import DashboardHeader from "@/components/ui/Header";
import TableHeader from "@/components/ui/TableHeader";
import TableFooter from "@/components/ui/TableFooter";

interface ICategory {
  _id: string;
  name: string;
  category_code: string;
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

export default function ProductsPage() {
  const router = useRouter();

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "0",
    category_id: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const authHeader = () => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : "";
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };







  const openCreate = () => {
    
    setForm({
      name: "",
      description: "",
      price: "",
      stock: "0",
      category_id: categories[0]?._id ?? "",
    });
    setError("");
    setFieldErrors({});
    setModalOpen(true);
  };







  interface ICustomer {
    vendorAndOrigin: string;
    location: string;
    code: string;
    type: "ENTERPRISE" | "RETAIL";
    contactPerson: string;
    isActive: boolean;
  }

  const vendors: IVendor[] = [
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
      status: "Active",
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
      status: "Active",
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

  const columns: Column<IVendor>[] = [
    {
      key: "vendorAndOrigin",
      header: "Vendor & Origin",
      render: (r) => {
        const initials = r.name
          .split(" ")
          .map((w) => w[0])
          .join("")
          .slice(0, 2)
          .toUpperCase();

        return (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold">
              {initials}
            </div>

            <div className="flex flex-col">
              <span className="font-medium">{r.name}</span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                📍 {r.origin}
              </span>
            </div>
          </div>
        );
      },
    },

    {
      key: "code",
      header: "Code",
    },

    {
      key: "type",
      header: "Type",
      render: (r) => <span className="capitalize">{r.type.toLowerCase()}</span>,
    },

    {
      key: "contactPerson",
      header: "Contact Person",
    },

    {
      key: "isActive",
      header: "Active",
      render: (r) => (
        <span
          className={`px-2 py-1 text-sm rounded ${r.status ? "text-green-600" : "text-gray-400"
            }`}
        >
          {r.status ? "Active" : "Inactive"}
        </span>
      ),
    },

    {
      key: "actions",
      header: "Actions",
      render: () => (
        <div className="flex gap-3 text-blue-600 cursor-pointer">
          <span title="View">
            <svg
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99998 12.5C3.45733 12.5 0.213576 6.79625 0.0787323 6.55359C0.0270977 6.46071 0 6.35619 0 6.24992C0 6.14365 0.0270977 6.03913 0.0787323 5.94625C0.213576 5.70375 3.45733 0 9.99998 0C16.5426 0 19.7864 5.70375 19.9212 5.94641C19.9729 6.03929 20 6.14381 20 6.25008C20 6.35635 19.9729 6.46087 19.9212 6.55375C19.7864 6.79625 16.5426 12.5 9.99998 12.5ZM1.36045 6.24906C2.10389 7.37578 5.02279 11.25 9.99998 11.25C14.993 11.25 17.8989 7.37891 18.6395 6.25094C17.8961 5.12422 14.9772 1.25 9.99998 1.25C5.00701 1.25 2.10108 5.12109 1.36045 6.24906ZM9.99998 10C7.93217 10 6.24998 8.31781 6.24998 6.25C6.24998 4.18219 7.93217 2.5 9.99998 2.5C12.0678 2.5 13.75 4.18219 13.75 6.25C13.75 8.31781 12.0678 10 9.99998 10ZM9.99998 3.75C8.62154 3.75 7.49998 4.87156 7.49998 6.25C7.49998 7.62844 8.62154 8.75 9.99998 8.75C11.3784 8.75 12.5 7.62844 12.5 6.25C12.5 4.87156 11.3784 3.75 9.99998 3.75Z"
                fill="#0040A1"
              />
            </svg>
          </span>
          <span title="Edit">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.59044 11.7394C1.46685 11.7394 1.34604 11.7027 1.24328 11.634C1.14053 11.5653 1.06044 11.4677 1.01314 11.3536C0.96585 11.2394 0.953474 11.1137 0.977578 10.9925C1.00168 10.8713 1.06119 10.7599 1.14857 10.6725L10.9154 0.905649C10.9731 0.845955 11.0421 0.798341 11.1183 0.765585C11.1946 0.73283 11.2766 0.715588 11.3596 0.714867C11.4426 0.714146 11.5249 0.72996 11.6017 0.761385C11.6785 0.792811 11.7483 0.839219 11.8069 0.897902C11.8656 0.956585 11.912 1.02637 11.9435 1.10318C11.9749 1.17999 11.9907 1.26229 11.99 1.34527C11.9893 1.42826 11.972 1.51027 11.9393 1.58653C11.9065 1.66278 11.8589 1.73174 11.7992 1.7894L2.03232 11.5563C1.91044 11.6781 1.75044 11.7394 1.59044 11.7394Z"
                fill="#0040A1"
              />
              <path
                d="M0.625499 16.2399C0.532239 16.2399 0.440145 16.2191 0.355967 16.179C0.27179 16.1389 0.197663 16.0804 0.139021 16.0079C0.080379 15.9354 0.0387088 15.8506 0.0170649 15.7599C-0.00457906 15.6692 -0.00564796 15.5748 0.0139367 15.4836L0.979562 10.9827C0.996559 10.9022 1.02927 10.8259 1.07582 10.7581C1.12237 10.6903 1.18184 10.6323 1.25083 10.5876C1.31982 10.5428 1.39696 10.5121 1.47784 10.4972C1.55872 10.4823 1.64175 10.4835 1.72216 10.5008C1.80257 10.518 1.87879 10.551 1.94644 10.5977C2.0141 10.6445 2.07185 10.7041 2.11641 10.7733C2.16096 10.8424 2.19143 10.9196 2.20608 11.0006C2.22072 11.0815 2.21925 11.1645 2.20175 11.2449L1.23612 15.7458C1.20618 15.8856 1.12924 16.0108 1.01812 16.1007C0.907005 16.1906 0.768431 16.2398 0.625499 16.2399ZM5.12581 15.2742C5.00222 15.2742 4.88141 15.2375 4.77865 15.1689C4.67589 15.1002 4.59581 15.0026 4.54851 14.8884C4.50122 14.7742 4.48884 14.6486 4.51295 14.5273C4.53705 14.4061 4.59656 14.2948 4.68394 14.2074L14.4508 4.4408C14.5085 4.38111 14.5774 4.3335 14.6537 4.30074C14.7299 4.26799 14.8119 4.25074 14.8949 4.25002C14.9779 4.2493 15.0602 4.26512 15.137 4.29654C15.2138 4.32797 15.2836 4.37438 15.3423 4.43306C15.401 4.49174 15.4474 4.56152 15.4788 4.63833C15.5103 4.71514 15.5261 4.79744 15.5253 4.88043C15.5246 4.96342 15.5074 5.04543 15.4746 5.12168C15.4419 5.19794 15.3943 5.2669 15.3346 5.32455L5.568 15.0911C5.51 15.1493 5.44108 15.1954 5.36519 15.2268C5.2893 15.2583 5.20795 15.2744 5.12581 15.2742Z"
                fill="#0040A1"
              />
              <path
                d="M0.624365 16.2403C0.470358 16.2397 0.322009 16.1822 0.207749 16.0789C0.0934886 15.9757 0.0213549 15.8339 0.0051721 15.6807C-0.0110107 15.5276 0.0298956 15.3738 0.120051 15.249C0.210207 15.1241 0.343271 15.0369 0.49374 15.0041L4.99468 14.0384C5.15653 14.0042 5.32533 14.0356 5.46409 14.1257C5.60285 14.2157 5.70025 14.3571 5.73495 14.5189C5.76965 14.6806 5.73881 14.8495 5.64919 14.9885C5.55958 15.1276 5.4185 15.2254 5.25687 15.2606L0.755928 16.2263C0.712711 16.2357 0.668599 16.2404 0.624365 16.2403ZM13.125 7.27562C13.0429 7.27578 12.9616 7.25968 12.8857 7.22825C12.8099 7.19682 12.741 7.15068 12.6831 7.0925L9.1478 3.55719C9.08811 3.49953 9.0405 3.43057 9.00774 3.35432C8.97498 3.27806 8.95774 3.19605 8.95702 3.11306C8.9563 3.03008 8.97211 2.94778 9.00354 2.87097C9.03496 2.79416 9.08137 2.72437 9.14006 2.66569C9.19874 2.60701 9.26852 2.5606 9.34533 2.52917C9.42214 2.49775 9.50444 2.48193 9.58743 2.48266C9.67042 2.48338 9.75243 2.50062 9.82868 2.53337C9.90493 2.56613 9.9739 2.61374 10.0316 2.67344L13.5669 6.20875C13.6542 6.29616 13.7137 6.40751 13.7379 6.52873C13.762 6.64995 13.7496 6.7756 13.7023 6.88978C13.655 7.00397 13.5749 7.10157 13.4722 7.17025C13.3694 7.23893 13.2486 7.2756 13.125 7.27562ZM14.8928 5.50812C14.7691 5.50822 14.6482 5.47162 14.5453 5.40295C14.4424 5.33428 14.3623 5.23663 14.3149 5.12237C14.2676 5.0081 14.2552 4.88236 14.2793 4.76106C14.3035 4.63976 14.3631 4.52835 14.4506 4.44094C14.7984 4.09313 14.99 3.62219 14.99 3.11531C14.99 2.60844 14.7984 2.1375 14.4506 1.78969C14.1025 1.44156 13.6316 1.25 13.1247 1.25C12.6178 1.25 12.1469 1.44156 11.7991 1.78969C11.741 1.84774 11.6721 1.89378 11.5962 1.9252C11.5204 1.95661 11.4391 1.97278 11.357 1.97278C11.2749 1.97278 11.1936 1.95661 11.1178 1.9252C11.042 1.89378 10.973 1.84774 10.915 1.78969C10.8569 1.73164 10.8109 1.66273 10.7795 1.58688C10.7481 1.51104 10.7319 1.42975 10.7319 1.34766C10.7319 1.26556 10.7481 1.18427 10.7795 1.10843C10.8109 1.03259 10.8569 0.963673 10.915 0.905625C11.4987 0.321562 12.2834 0 13.1247 0C13.9656 0 14.7506 0.321562 15.3344 0.905625C15.9184 1.48937 16.24 2.27406 16.24 3.11531C16.24 3.95656 15.9184 4.74125 15.3344 5.325C15.2765 5.38314 15.2077 5.42926 15.1319 5.46068C15.0561 5.49211 14.9748 5.50824 14.8928 5.50812Z"
                fill="#0040A1"
              />
            </svg>
          </span>
          <span title="Delete">
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8852 7.24609C10.6265 7.24609 10.4168 7.45579 10.4168 7.71448V16.5669C10.4168 16.8255 10.6265 17.0353 10.8852 17.0353C11.1439 17.0353 11.3536 16.8255 11.3536 16.5669V7.71448C11.3536 7.45579 11.1439 7.24609 10.8852 7.24609ZM5.35828 7.24609C5.09959 7.24609 4.88989 7.45579 4.88989 7.71448V16.5669C4.88989 16.8255 5.09959 17.0353 5.35828 17.0353C5.61701 17.0353 5.82666 16.8255 5.82666 16.5669V7.71448C5.82666 7.45579 5.61701 7.24609 5.35828 7.24609Z"
                fill="#0040A1"
              />
              <path
                d="M1.33027 5.95419V17.4942C1.33027 18.1763 1.58039 18.8168 2.0173 19.2764C2.23243 19.5044 2.49179 19.6861 2.77953 19.8106C3.06726 19.935 3.37734 19.9994 3.69083 20H12.5528C12.8663 19.9995 13.1764 19.935 13.4641 19.8106C13.7519 19.6862 14.0112 19.5044 14.2264 19.2764C14.6633 18.8168 14.9134 18.1763 14.9134 17.4942V5.95419C15.7819 5.72365 16.3447 4.88459 16.2286 3.9934C16.1122 3.10235 15.3531 2.43584 14.4543 2.43565H12.0562V1.85017C12.0576 1.60644 12.0105 1.36487 11.9177 1.13949C11.825 0.914104 11.6883 0.709396 11.5158 0.537249C11.3432 0.365119 11.1381 0.228993 10.9125 0.136776C10.6869 0.0445581 10.4451 -0.0019131 10.2014 6.07144e-05H6.0423C5.79855 -0.00191931 5.55683 0.0445489 5.33119 0.136767C5.10554 0.228984 4.90047 0.365114 4.72788 0.537249C4.55533 0.709396 4.4187 0.914104 4.32592 1.13949C4.23314 1.36487 4.18606 1.60644 4.18741 1.85017V2.43565H1.78938C0.890649 2.43584 0.131541 3.10235 0.0151478 3.9934C-0.101011 4.88459 0.461751 5.72365 1.33027 5.95419ZM12.5528 19.0632H3.69088C2.89004 19.0632 2.26704 18.3753 2.26704 17.4942V5.99536H13.9766V17.4942C13.9766 18.3753 13.3537 19.0632 12.5528 19.0632ZM5.12418 1.85017C5.12265 1.72942 5.14539 1.60958 5.19106 1.49779C5.23673 1.38599 5.30439 1.2845 5.39003 1.19936C5.47564 1.11416 5.57749 1.04702 5.68953 1.00193C5.80158 0.95683 5.92154 0.934693 6.0423 0.936827H10.2014C10.3222 0.934693 10.4421 0.95683 10.5542 1.00193C10.6662 1.04702 10.7681 1.11416 10.8537 1.19936C10.9393 1.2845 11.007 1.38598 11.0526 1.49778C11.0983 1.60958 11.121 1.72942 11.1195 1.85017V2.43565H5.12418V1.85017ZM1.78938 3.37242H14.4544C14.92 3.37242 15.2975 3.74989 15.2975 4.21551C15.2975 4.68113 14.92 5.0586 14.4544 5.0586H1.78934C1.32372 5.0586 0.946246 4.68113 0.946246 4.21551C0.946246 3.74989 1.32376 3.37242 1.78938 3.37242Z"
                fill="#0040A1"
              />
              <path
                d="M8.12195 7.24609C7.86326 7.24609 7.65356 7.45579 7.65356 7.71448V16.5669C7.65356 16.8255 7.86326 17.0353 8.12195 17.0353C8.38068 17.0353 8.59033 16.8255 8.59033 16.5669V7.71448C8.59033 7.45579 8.38068 7.24609 8.12195 7.24609Z"
                fill="#0040A1"
              />
            </svg>
          </span>
        </div>
      ),
    },
  ];

  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between my-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Buyers Overview</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your product catalog
          </p>
        </div>
        <button
          onClick={openCreate}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm font-medium"
        >
          + OnBoard Buyer
        </button>
      </div>

      <DataTable
        columns={columns}
        data={vendors}
        loading={loading}
        emptyMessage="No Buyers yet."
        Header={TableHeader}
        Footer={TableFooter}
      // onEdit={openEdit}
      // onDelete={handleDelete}
      />

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={"New Product"}
        size="lg"
      >
        <form onSubmit={() => { }} className="space-y-4">
          {error && (
            <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none ${fieldErrors.name ? "border-red-400" : "border-gray-300"}`}
                placeholder="Product name"
              />
              {fieldErrors.name && (
                <p className="text-xs text-red-500 mt-1">{fieldErrors.name}</p>
              )}
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                rows={2}
                className={`w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none ${fieldErrors.description ? "border-red-400" : "border-gray-300"}`}
                placeholder="Short product description"
              />
              {fieldErrors.description && (
                <p className="text-xs text-red-500 mt-1">
                  {fieldErrors.description}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price ($)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className={`w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none ${fieldErrors.price ? "border-red-400" : "border-gray-300"}`}
                placeholder="0.00"
              />
              {fieldErrors.price && (
                <p className="text-xs text-red-500 mt-1">{fieldErrors.price}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock
              </label>
              <input
                type="number"
                min="0"
                value={form.stock}
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
                className={`w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none ${fieldErrors.stock ? "border-red-400" : "border-gray-300"}`}
                placeholder="0"
              />
              {fieldErrors.stock && (
                <p className="text-xs text-red-500 mt-1">{fieldErrors.stock}</p>
              )}
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={form.category_id}
                onChange={(e) =>
                  setForm({ ...form, category_id: e.target.value })
                }
                className={`w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none ${fieldErrors.category_id ? "border-red-400" : "border-gray-300"}`}
              >
                <option value="">— Select category —</option>
                {categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name} ({c.category_code})
                  </option>
                ))}
              </select>
              {fieldErrors.category_id && (
                <p className="text-xs text-red-500 mt-1">
                  {fieldErrors.category_id}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 bg-indigo-600 text-white py-2 rounded-lg text-sm hover:bg-indigo-700 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Create"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
