"use client";


import { usePathname, useRouter } from "next/navigation";
import { DataTable, type Column } from "@/components/common/table/DataTable";
import TableHeader, { FilterFields } from "@/components/common/table/TableHeader";
import TableFooter from "@/components/common/table/TableFooter";
import { DeleteIcon, EditIcon, ViewIcon } from "@icons/table-icons/actions";
import { useSelector } from "react-redux";
import { IBuyer } from "@/utils/Data";
import toast from "react-hot-toast";
import { Badge } from "@mui/material";
import { useAppDispatch, useGlobalRedirect } from "@/lib/hooks";
import { fetchBuyers, filterBuyer, useBuyerData, useBuyerLoader, removeBuyer } from "@/store/slice";
import { useQueryFilters } from "@/lib/hooks";
import AppBadge from "@/components/common/AppBadge";
import AppDotLoader from "@/components/common/AppDotLoader";


export default function ProductsPage() {

  const dispatch = useAppDispatch();
  const buyersData: IBuyer[] = useSelector(useBuyerData);
  const loading = useSelector(useBuyerLoader);
  const { isRedirecting, navigate } = useGlobalRedirect();
  const pathname = usePathname();

  const {
    filterValues,
    handleInputChange,
    applyFilters,
    clearFilters } = useQueryFilters(filterBuyer, fetchBuyers);




  const filterFields: FilterFields[] = [
    //   {
    //   key: "name",
    //   type: "text",
    //   label: "Name"
    // },
    {
      key: "id",
      type: "select",
      label: "Code",
      options: Array.from(
        new Set(buyersData.map((b) => b.buyerType))
      ).map((type) => ({
        label: type,
        value: type,
      }))

    },
    {
      key: "status",
      type: "check",
      label: "Status",
      options: Array.from(new Set(buyersData.map((buyer) => buyer.status))).map((status) => ({ label: status.toUpperCase(), value: status }))
    },
    // {
    //   key: "available",
    //   type: "check",
    //   label: "Available",
    //   options: [{ label: "AVAILABLE", value: "available" }, { label: "UNAVAILABLE", value: "unAvailable" }]
    // }
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
            <AppBadge className="bg-green-100 text-green-700">Active</AppBadge>
          )
          :
          (
            <AppBadge className="bg-red-100 text-red-700">inActive</AppBadge>
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
          onClick={() => navigate(`${pathname}/add`)}
          disabled={isRedirecting}
          className="bg-gradient-to-br from-[#0040A1] to-[#0056D2] text-white px-4 py-2 rounded-lg hover:brightness-110 transition text-sm font-medium cursor-pointer min-w-32 min-h-10 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-90"
        >
          {isRedirecting ? (
            <AppDotLoader />
          ) : (
            <span>+ OnBoard Buyer</span>
          )}
        </button>
      </div>
      <DataTable
        columns={columns}
        data={buyersData}
        loading={loading}
        emptyMessage="No Buyers yet."
        Header={<TableHeader values={filterValues} onApply={applyFilters} onClear={clearFilters} onChange={handleInputChange} fields={filterFields} />}
        Footer={TableFooter}
      />

    </div>
  );
}
