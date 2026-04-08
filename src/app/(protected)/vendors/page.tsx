"use client";


import { DataTable, type Column } from "@/components/ui/DataTable";
import DashboardHeader from "@/components/ui/Header";
import TableHeader from "@/components/ui/TableHeader";
import TableFooter from "@/components/ui/TableFooter";
import { EditIcon, DeleteIcon, ViewIcon } from "@icons/table-icons/actions"
import { IVendor, vendors } from "@/utils/Data";
import { useAppDispatch } from "@/lib/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { addVendor, getAllVendors, removeVendor } from "@/store/slice";
import { useEffect } from "react";
import toast from "react-hot-toast";





export default function ProductsPage() {

  const { vendor, loading } = useSelector((store: RootState) => store.vendorSlice)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllVendors())
  }, [])





  const openCreate = () => {
    const vendor: IVendor = {
      id: "1",
      name: "Nordic Velour Co.",
      origin: "Portugal, EU",
      code: "VND001",
      type: "Manufacturer",
      category: "Fabric",
      status: "Active",
    }
    dispatch(addVendor(vendor));
    toast.success("Vendor Created.")

  };

  const handleRemove = (vendorId: string) => {
    dispatch(removeVendor(vendorId))
    toast.success("Vendor Deleted.")
  }

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
      render: (r) => (
        <div className="flex gap-3 text-blue-600 cursor-pointer">
          <span title="View">
            <ViewIcon />
          </span>
          <span title="Edit">
            <EditIcon />
          </span>
          <span title="Delete">
            <DeleteIcon onClick={() => handleRemove(r.id)} />
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
          <h1 className="text-2xl font-bold text-[#0040A1]">Vendors Overview</h1>

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
        data={vendor}
        loading={loading}
        emptyMessage="No Buyers yet."
        // Header={TableHeader}
        Footer={TableFooter}
      // onEdit={openEdit}
      // onDelete={handleDelete}
      />


    </div>
  );
}
