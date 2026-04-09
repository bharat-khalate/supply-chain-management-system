"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { DataTable, type Column } from "@/components/common/DataTable";
import { Modal } from "@/components/common/Modal";
import DashboardHeader from "@/components/common/Header";
import TableHeader from "@/components/common/TableHeader";
import TableFooter from "@/components/common/TableFooter";
import { EditIcon, DeleteIcon, ViewIcon } from "@icons/table-icons/actions"
import { ISample, sampleRecords } from "@/utils/Data";
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/lib/hooks"
import { addSample, getAllSample, removeSample } from "@/store/slice";
import { RootState } from "@/store/Store";
import toast from "react-hot-toast";




export default function ProductsPage() {

  const { sample, loading } = useSelector((store: RootState) => store.sampleSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllSample());
  }, [])

  const openCreate = () => {
    const sample: ISample = {
      sampleId: "SMPE001",
      date: "25/3/2026",
      enquiryId: "ENQ001",
      customerName: "Amit Sharma",
      productCategory: "T-shirt",
      status: "Active"
    }
    dispatch(addSample(sample));
    toast.success("Sample Created.")
  };


  const handleDelete = (sampleId: string) => {
    dispatch(removeSample(sampleId))
    toast.success("Sample Deleted.")
  }


  const columns: Column<ISample>[] = [
    {
      key: "sampleId",
      header: "Sample Id",
      render: (r) => {

        return (
          <div className="flex items-center gap-3">
            <span className="font-medium">{r.sampleId}</span>
          </div>
        );
      },
    },

    {
      key: "date",
      header: "Date",
    },
    {
      key: "enquiryId",
      header: "Enquiry Id",
    },

    {
      key: "customerName",
      header: "Customer Name",
    },



    {
      key: "productCategory",
      header: "Product Category",
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
            <DeleteIcon onClick={() => { handleDelete(r.sampleId) }} />
          </span>
        </div>
      ),
    },
  ];

  return (
    <div>
     
      <div className="flex items-center justify-between my-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0040A1]">Sampling Overview</h1>

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
        data={sample}
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
