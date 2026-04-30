"use client";
import { DataTable } from "@/components/common/table/DataTable";
import { defaultPaginationConfig } from "@/configs/feature/pagination.config";
import { useAppDispatch } from "@/lib/hooks";
import { addOrder, getAllOrders, removeOrder } from "@/redux/slice";
import { RootState } from "@/redux/Store";
import { IColumn, IOrder } from "@/types";
import { DeleteIcon, EditIcon, ViewIcon } from "@icons/table-icons/actions";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
export const OrdersColumn: () => IColumn<IOrder>[] = () => {

    return [
        {
            key: "orderId",
            header: "Order Id",
            render: (r) => {
                return (
                    <div className="flex items-center gap-3">
                        <span className="font-medium">{r.orderId}</span>
                    </div>
                );
            },
        },
        {
            key: "date",
            header: "Date",
        },
        {
            key: "qty",
            header: "QTY",
        },
        {
            key: "customerName",
            header: "Customer Name",
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
                        <DeleteIcon onClick={() => { }} />
                    </span>
                </div>
            ),
        },
    ];
}
export default function Page() {
    const dispatch = useAppDispatch();
    const { data, loading } = useSelector((store: RootState) => store.orderSlice);
    useEffect(() => {
        dispatch(getAllOrders(defaultPaginationConfig));
    }, [])
    const openCreate = () => {
        const order: IOrder = {
            orderId: "ORD001",
            date: "25/3/2026",
            qty: 2000,
            customerName: "Amit Sharma",
            deliveryDate: "15/4/2026",
            status: "Active",
        }
        dispatch(addOrder(order));
        toast.success("Order placed.")
    };
    const handleDelete = (orderId: string) => {
        dispatch(removeOrder(orderId));
        toast.success("Order Deleted.")
    }
    return (
        <div>
            <div className="flex items-center justify-between my-6">
                <div>
                    <h1 className="text-2xl font-bold text-[#0040A1]">Orders Overview</h1>
                </div>
                <button
                    onClick={openCreate}
                    className="bg-gradient-to-br from-[#0040A1] to-[#0056D2] text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm font-medium"
                >
                    + Add Sales Enquiry
                </button>
            </div>
            <DataTable
                columns={OrdersColumn()}
                data={data}
                loading={loading}
                emptyMessage="No Buyers yet."
                currentPage={1}
                lastPage={50}
                limit={10}
                totalCount={500}
                visiblePageCount={3}
                canPreviousPage={false}
                canNextPage={true}
                previousPage={() => console.log("prev")}
                nextPage={() => console.log("next")}
                handleLimitChange={(val) => console.log("limit:", val)}
            />
        </div>
    );
}
