"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DataTable, type Column } from "@/components/common/DataTable";
import { Modal } from "@/components/common/Modal";
import DashboardHeader from "@/components/common/Header";

import TableHeader, { FilterFields } from "@/components/common/TableHeader";
import TableFooter from "@/components/common/TableFooter";
import { DeleteIcon, EditIcon, ViewIcon } from "@icons/table-icons/actions";
import { useSelector } from "react-redux";
import { addBuyer, removeBuyer } from '@/store/slice';
import { buyers, IBuyer } from "@/utils/Data";
import { RootState } from "@/store/Store";
import toast from "react-hot-toast";
import { Badge } from "@mui/material";
import { useAppDispatch } from "@/lib/hooks";


export default function ProductsPage() {

  const dispatch = useAppDispatch();

  const buyersData: IBuyer[] = useSelector((store: RootState) => store.buyerSlice.data);
  const [filterValues, setFilterValues] = useState<Record<string, string | string[]>>({});
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();


  const updateURL = (filters: Record<string, string | string[]>) => {

    const params = new URLSearchParams(searchParams.toString());

    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (value.length === 0) {
          params.delete(key);
        } else {
          params.set(key, value.join(",")); // checkbox array
        }
      } else {
        if (!value) {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      }
    });

    router.push(`${pathname}?${params.toString()}`);
  };





  const onChange = (key: string, value: string | string[]) => {





    setFilterValues((prev) => {

      const isEmptyString = value === "";
      const isEmptyArray = Array.isArray(value) && value.length === 0;

      if (isEmptyString || isEmptyArray) {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      }

      return { ...prev, [key]: value };
    });
  };

  const onApply = () => { console.log(filterValues); updateURL(filterValues); }

  useEffect(() => {
    const values: Record<string, string | string[]> = {};

    searchParams.forEach((value, key) => {
      if (value.includes(",")) {
        values[key] = value.split(",");
      } else {
        values[key] = value;
      }
    });

    (async () => { setFilterValues(values); onApply(); })();
  }, []);






  const onClear = () => { setFilterValues({}); router.replace(pathname) };

  const filterFields: FilterFields[] = [{
    key: "name",
    type: "text",
    label: "Name"
  },
  {
    key: "id",
    type: "select",
    label: "Code",
    options: [{ label: "CUST0001", value: "CUST0001" }]

  },
  {
    key: "status",
    type: "check",
    label: "Status",
    options: [{ label: "ACTIVE", value: "active" }, { label: "INACTIVE", value: "inActive" }]
  },
  {
    key: "available",
    type: "check",
    label: "Available",
    options: [{ label: "AVAILABLE", value: "available" }, { label: "UNAVAILABLE", value: "unAvailable" }]
  }
  ]


  const deleteCustomer = (customerId: string) => {
    dispatch(removeBuyer(customerId));
    toast.success("Customer removed")
  }
  const columns: Column<IBuyer>[] = [
    {
      key: "vendorAndOrigin",
      header: "Vendor & Origin",
      render: (r) => {
        const initials = r.buyerName
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
              <span className="font-medium">{r.buyerName}</span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                📍 {r.buyerAddress}
              </span>
            </div>
          </div>
        );
      },
    },

    {
      key: "id",
      header: "Code",
      render: (r) => <div className="truncate w-32" title={r.id}>
        {r.id}
      </div>
    },

    {
      key: "type",
      header: "Type",
      render: (r) => <span className="capitalize">{r.buyerType.toLowerCase()}</span>,
    },

    {
      key: "contactPerson",
      header: "Contact Person",
    },

    {
      key: "isActive",
      header: "Active",
      render: (r) => (
        r.status == "Active" ?
          (
            <Badge className="bg-green-100 text-green-700">Active</Badge>
          )
          :
          (
            <Badge className="bg-red-100 text-red-700">inActive</Badge>
          )
        // <span
        //   className={`px-2 py-1 text-sm rounded ${r.isActive ? "text-green-600" : "text-gray-400"
        //     }`}
        // >
        //   {r.isActive ? "Active" : "Inactive"}
        // </span>
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
            <DeleteIcon onClick={() => deleteCustomer(r.id)} />
          </span>
        </div>
      ),
    },
  ];

  return (
    <div >

      <div className="flex items-center justify-between my-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0040A1]">Buyers Overview</h1>

        </div>
        <button
          onClick={() => router.push(`${pathname}/add`)}
          className="bg-gradient-to-br from-[#0040A1] to-[#0056D2] text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm font-medium cursor-pointer"

        >
          + OnBoard Buyer
        </button>
      </div>

      <DataTable
        columns={columns}
        data={buyersData}
        loading={false}
        emptyMessage="No Buyers yet."
        Header={<TableHeader values={filterValues} onApply={onApply} onClear={onClear} onChange={onChange} filters={filterFields} />}
        Footer={TableFooter}
      // onEdit={openEdit}
      // onDelete={handleDelete}
      />

    </div>
  );
}
