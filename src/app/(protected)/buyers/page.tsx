"use client";
import AppDotLoader from "@/components/common/NavigationDotloader";
import AppBadge from "@/components/common/StatusBadge";
import { DataTable } from "@/components/common/table/DataTable";
import TableHeader from "@/components/common/table/TableHeader";
import { defaultPaginationConfig } from "@/configs/feature/pagination.config";
import { useAppDispatch, useGlobalRedirect, useQueryFilters } from "@/lib/hooks";
import { fetchBuyers, removeBuyer, selectBuyerLoading, selectBuyerPagination, selectBuyers } from "@/redux/slice";
import { IBuyer, IColumn, IColumnDefProps, IFilterFields } from "@/types";
import { IPaginationResponse } from "@/types/global.types";
import { IFetchServiceParams } from "@/types/service/service.types";
import { RedirectButtonClass } from "@/utils/tailwindCssClassConstant";
import { Button } from "@heroui/react";
import { DeleteIcon, EditIcon, ViewIcon } from "@icons/table-icons/actions";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export const BuyerColumns: (props?: IColumnDefProps) => IColumn<IBuyer>[] = (props?: IColumnDefProps) => {
  const pathname = usePathname();
  return [
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
            <AppBadge variant="success" >Active</AppBadge>
          )
          :
          (
            <AppBadge variant="destructive">inActive</AppBadge>
          )
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (r) => (
        <div className="flex gap-3 text-blue-600 ">
          <span title="View" className="cursor-pointer">
            <ViewIcon onClick={() => {
              if (props?.navigate) props.navigate({ href: `${pathname}/view/${r.id}` })
            }} />
          </span>
          <span
            title="Edit"
            onClick={() => {
              if (props?.navigate) props.navigate({ href: `${pathname}/edit/${r.id}` })
            }}
            className="cursor-pointer"
          >
            <EditIcon className="pointer-events-none" />
          </span>
          <span title="Delete">
            <DeleteIcon onClick={() => props?.deleteCustomer && props.deleteCustomer(r.id)} />
          </span>
        </div>
      ),
    },
  ];
}
export function BuyersPageContent() {
  const dispatch = useAppDispatch();
  const buyersData: IBuyer[] = useSelector(selectBuyers);
  const loading = useSelector(selectBuyerLoading);
  const paginationConfig: IPaginationResponse = useSelector(selectBuyerPagination)
  const { isRedirecting, navigate } = useGlobalRedirect();
  const pathname = usePathname();
  const {
    filterValues,
    handleInputChange,
    applyFilters,
    clearFilters } = useQueryFilters<IBuyer>(fetchBuyers);
  const getNextPage = () => {
    if (!(paginationConfig.canNextPage)) return;
    const meta: IFetchServiceParams = {
      page: paginationConfig.currentPage + 1,
      limit: defaultPaginationConfig.limit
    }
    dispatch(fetchBuyers(meta));
  }
  const getPreviousPage = () => {
    if (!(paginationConfig.canPreviousPage)) return;
    const meta: IFetchServiceParams = {
      page: paginationConfig.currentPage - 1,
      limit: defaultPaginationConfig.limit
    }
    dispatch(fetchBuyers(meta));
  }
  const filterFields: IFilterFields[] = [
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
  ]
  const deleteCustomer = (customerId: string) => {
    dispatch(removeBuyer(customerId));
    toast.success("Customer removed")
  }
  return (
    <div >
      <div className="flex items-center justify-between my-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0040A1]">Buyers Overview</h1>
        </div>
        <Button
          onPress={() => navigate({ href: `${pathname}/create` })}
          isDisabled={isRedirecting}
          className={RedirectButtonClass}
        >
          {isRedirecting ? (
            <AppDotLoader />
          ) : (
            <span>+ OnBoard Buyer</span>
          )}
        </Button>
      </div>
      <DataTable
        columns={BuyerColumns({ deleteCustomer, navigate })}
        data={buyersData}
        loading={loading}
        emptyMessage="No Buyers yet."
        currentPage={paginationConfig.currentPage}
        lastPage={paginationConfig.lastPage}
        limit={defaultPaginationConfig.limit}
        totalCount={paginationConfig.totalCount}
        visiblePageCount={3}
        canPreviousPage={paginationConfig.canPreviousPage}
        canNextPage={paginationConfig.canNextPage}
        previousPage={getPreviousPage}
        nextPage={getNextPage}
        handleLimitChange={(val) => console.log("limit:", val)}
        Header={<TableHeader values={filterValues} onApply={applyFilters} onClear={clearFilters} onChange={handleInputChange} fields={filterFields} />}
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="flex justify-center p-8"><AppDotLoader /></div>}>
      <BuyersPageContent />
    </Suspense>
  )
}
