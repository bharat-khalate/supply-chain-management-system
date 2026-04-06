"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { Modal } from "@/components/ui/Modal";
import DashboardHeader from "@/components/ui/Header";

import TableHeader from "@/components/ui/TableHeader";
import TableFooter from "@/components/ui/TableFooter";
import { DeleteIcon, EditIcon, ViewIcon } from "@icons/actions";

interface ICategory {
  _id: string;
  name: string;
  category_code: string;
}
interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id: string;
  createdAt: string;
}

export default function ProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<IProduct | null>(null);
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

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [prodRes, catRes] = await Promise.all([
        fetch("/api/v1/products", { headers: authHeader() }),
        fetch("/api/v1/categories", { headers: authHeader() }),
      ]);
      if (prodRes.status === 401) {
        router.push("/login");
        return;
      }
      const [prodData, catData] = await Promise.all([
        prodRes.json(),
        catRes.json(),
      ]);
      setProducts(prodData.data ?? []);
      setCategories(catData.data ?? []);
    } finally {
      setLoading(false);
    }
  }, [router]);




  const openCreate = () => {
    setEditTarget(null);
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

 



  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setFieldErrors({});
    setSaving(true);
    try {
      const url = editTarget
        ? `/api/v1/products/${editTarget._id}`
        : "/api/v1/products";
      const method = editTarget ? "PUT" : "POST";
      const payload = {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      };
      const res = await fetch(url, {
        method,
        headers: authHeader(),
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.errors) setFieldErrors(data.errors);
        else setError(data.message || "Something went wrong");
        return;
      }
      setModalOpen(false);
      fetchData();
    } finally {
      setSaving(false);
    }
  };

  interface ICustomer {
    vendorAndOrigin: string;
    location: string;
    code: string;
    type: "ENTERPRISE" | "RETAIL";
    contactPerson: string;
    isActive: boolean;
  }

  const BuyersData: ICustomer[] = [
    {
      vendorAndOrigin: "Reliance Retail",
      location: "Portugal, EU",
      code: "CUST001",
      type: "ENTERPRISE",
      contactPerson: "Amit Sharma",
      isActive: true,
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
      isActive: true,
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
      isActive: true,
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

  const columns: Column<ICustomer>[] = [
    {
      key: "vendorAndOrigin",
      header: "Vendor & Origin",
      render: (r) => {
        const initials = r.vendorAndOrigin
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
              <span className="font-medium">{r.vendorAndOrigin}</span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                📍 {r.location}
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
          className={`px-2 py-1 text-sm rounded ${r.isActive ? "text-green-600" : "text-gray-400"
            }`}
        >
          {r.isActive ? "Active" : "Inactive"}
        </span>
      ),
    },

    {
      key: "actions",
      header: "Actions",
      render: () => (
        <div className="flex gap-3 text-blue-600 cursor-pointer">
          <span title="View">
            <ViewIcon />
          </span>
          <span title="Edit">
            <EditIcon/>
          </span>
          <span title="Delete">
            <DeleteIcon/>
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
          <h1 className="text-2xl font-bold text-[#0040A1]">Buyers Overview</h1>
          
        </div>
        <button
          onClick={openCreate}
          className="bg-gradient-to-br from-[#0040A1] to-[#0056D2] text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm font-medium"
        >
          + OnBoard Buyer
        </button>
      </div>

      <DataTable
        columns={columns}
        data={BuyersData}
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
        title={editTarget ? "Edit Product" : "New Product"}
        size="lg"
      >
        <form onSubmit={handleSave} className="space-y-4">
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
              {saving ? "Saving..." : editTarget ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
