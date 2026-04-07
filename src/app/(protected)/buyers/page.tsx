"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { Modal } from "@/components/ui/Modal";
import DashboardHeader from "@/components/ui/Header";

import TableHeader from "@/components/ui/TableHeader";
import TableFooter from "@/components/ui/TableFooter";
import { DeleteIcon, EditIcon, ViewIcon } from "@icons/actions";
import { useSelector, useDispatch } from "react-redux";
import { addCustomer, removeCustomer } from '@/store/slice';
import { ICustomer } from "@/utils/Data";
import { RootState } from "@/store/Store";
import toast from "react-hot-toast";


export default function ProductsPage() {

  const dispatch = useDispatch();

  const buyersData = useSelector((store: RootState) => store.customerSlice);

  const openCreate = () => {
    dispatch(addCustomer({
      vendorAndOrigin: "Reliance Retail",
      location: "Portugal, EU",
      code: "CUST001",
      type: "ENTERPRISE",
      contactPerson: "Amit Sharma",
      isActive: true,
    }));
    toast.success("Booyah! Onboarded Customer")
  };

  const deleteCustomer = (customerId: string) => {
    dispatch(removeCustomer(customerId));
    toast.success("Customer removed")
  }
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
      render: (r) => (
        <div className="flex gap-3 text-blue-600 cursor-pointer">
          <span title="View">
            <ViewIcon />
          </span>
          <span title="Edit">
            <EditIcon />
          </span>
          <span title="Delete">
            <DeleteIcon onClick={() => deleteCustomer(r.code)} />
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
        data={buyersData}
        loading={false}
        emptyMessage="No Buyers yet."
        Header={TableHeader}
        Footer={TableFooter}
      // onEdit={openEdit}
      // onDelete={handleDelete}
      />

    </div>
  );
}
