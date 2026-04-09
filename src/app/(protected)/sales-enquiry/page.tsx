"use client";

import { useRouter } from "next/navigation";
import { DataTable, type Column } from "@/components/ui/DataTable";
import DashboardHeader from "@/components/ui/Header";
import TableHeader from "@/components/ui/TableHeader";
import { EditIcon, DeleteIcon, ViewIcon } from "@icons/table-icons/actions"
import { IEnquiry } from "@/utils/Data";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/Store";
import { addEnquiry, getAllEnquiries, removeEnquiry } from "@/store/slice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function ProductsPage() {
  const router = useRouter();

  const { loading, enquiries } = useSelector((store: RootState) => store.enquirySlice);
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(getAllEnquiries())
  }, [])

  const openCreate = () => {
    const enquiry: IEnquiry = {
      enquiryId: "ENQ001",
      date: "25/3/2026",
      customerName: "Aniket Patil",
      contactPerson: "Amit Sharma",
      qty: 10000,
      expPrice: 10000,
      status: "Active"
    }
    dispatch(addEnquiry(enquiry))
    toast.success("Added Enquiry.")
  };

  const deleteEnquiry = (enquiryId: string) => {
    dispatch(removeEnquiry(enquiryId))
    toast.success("Deleted Enquiry.")
  }

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
      render: (r) => (
        <div className="flex gap-3 text-blue-600 cursor-pointer">
          <span title="View">
            <ViewIcon />
          </span>
          <span title="Edit">
            <EditIcon />
          </span>
          <span title="Delete">
            <DeleteIcon onClick={() => deleteEnquiry(r.enquiryId)} />
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
      // Header={TableHeader}
      // onEdit={openEdit}
      // onDelete={handleDelete}
      />
    </div>
  );
}
