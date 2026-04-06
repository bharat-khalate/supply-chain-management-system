"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { Modal } from "@/components/ui/Modal";
import DashboardHeader from "@/components/ui/Header";
import TableHeader from "@/components/ui/TableHeader";
import TableFooter from "@/components/ui/TableFooter";
import {EditIcon, DeleteIcon, ViewIcon} from "@icons/actions"
import { enquiries, IEnquiry } from "@/utils/Data";

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









  const columns: Column<IEnquiry>[] = [
    {
      key: "enquiryId",
      header: "Enquiry Id",
      render: (r) => {
        
        return (
          <div className="flex items-center gap-3">
            <span className="font-medium">{r.enquiryId}</span>
          </div>
        );
      },
    },

    {
      key: "date",
      header: "Date",
    },

    {
      key: "customerName",
      header: "Customer Name",
    },

    {
      key: "contactPerson",
      header: "Contact Person",
    },

    {
      key: "qty",
      header: "QTY",
    },
    {
      key: "expPrice",
      header: "EXP Price",
    },

    {
      key: "status",
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
          <h1 className="text-2xl font-bold text-[#0040A1]">Sales Enquiry</h1>
          
        </div>
        <button
          onClick={openCreate}
          className="bg-gradient-to-br from-[#0040A1] to-[#0056D2] text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm font-medium"
        >
          + Add Sales Enquiry
        </button>
      </div>

      <DataTable
        columns={columns}
        data={enquiries}
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
