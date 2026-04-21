"use client";
import React from "react";
import { LeftIcon, RightIcon } from "@icons/table-icons/footer";
import { IDataTableProps } from "@/types";

export function DataTable<T extends object>({
  columns,
  data,
  loading = false,
  emptyMessage = "No records found.",
  onEdit,
  onDelete,
  Header,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  currentPage,
  lastPage,
  limit,
  totalCount,
  handleLimitChange,
  goToPage,
  visiblePageCount = 5,
  removeWrapperBorder = false,
}: IDataTableProps<T> & { removeWrapperBorder?: boolean }) {
  const getVisiblePages = (current: number, total: number, maxVisible: number) => {
    if (total <= maxVisible) return Array.from({ length: total }, (_, i) => i + 1);
    let start = Math.max(1, current - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;
    if (end > total) {
      end = total;
      start = Math.max(1, end - maxVisible + 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  const visiblePages = lastPage !== undefined && currentPage !== undefined ? getVisiblePages(currentPage, lastPage, visiblePageCount) : [];
  return (
    <div className={`rounded-xl ${removeWrapperBorder ? "" : "shadow ring-black ring-opacity-5"}`}>
      {Header && Header}
      <div className="overflow-x-auto w-full">
        <table className={`min-w-full divide-y divide-gray-200 bg-white ${removeWrapperBorder ? "" : "shadow-2xl"}`}>
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap"
                >
                  {col.header}
                </th>
              ))}
              {(onEdit || onDelete) && (
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          {


          }
          <tbody className="divide-y divide-gray-100">
            {
              loading ?
                (
                  <tr>
                    <td colSpan={columns.length + (onEdit || onDelete ? 1 : 0)} className="text-center py-10">
                      <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600" />
                      </div>
                    </td>
                  </tr>
                ) :
                data.length === 0 ? (
                  <tr>
                    <td
                      colSpan={columns.length + (onEdit || onDelete ? 1 : 0)}
                      className="px-6 py-10 text-center text-gray-400 text-sm"
                    >
                      {emptyMessage}
                    </td>
                  </tr>
                ) : (
                  data.map((row, idx) => (
                    <tr key={idx} className={`hover:bg-gray-50 transition-colors ${removeWrapperBorder && idx === data.length - 1 ? 'border-b-0' : ''}`}>
                      {columns.map((col) => (
                        <td
                          key={String(col.key)}
                          className={`px-6 py-4 text-sm text-gray-700 whitespace-nowrap ${removeWrapperBorder && idx === data.length - 1 ? 'border-b-0' : ''}`}
                        >
                          {col.render
                            ? col.render(row)
                            : String(row[col.key as keyof T] ?? "-")}
                        </td>
                      ))}
                      {(onEdit || onDelete) && (
                        <td className="px-6 py-4 text-right whitespace-nowrap space-x-2">
                          {onEdit && (
                            <button
                              onClick={() => onEdit(row)}
                              className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-md bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition"
                            >
                              Edit
                            </button>
                          )}
                          {onDelete && (
                            <button
                              onClick={() => onDelete(row)}
                              className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-md bg-red-50 text-red-700 hover:bg-red-100 transition"
                            >
                              Delete
                            </button>
                          )}
                        </td>
                      )}
                    </tr>
                  ))
                )}
          </tbody>
        </table>
      </div >
      {totalCount !== undefined && lastPage !== undefined && limit !== undefined && currentPage !== undefined && (
        <div className="w-full bg-white border border-gray-100 rounded-sm shadow-sm p-4 flex items-center justify-between">
          {/* Left Side: Results Count */}
          <div className="text-sm text-slate-600">
            Showing <span className="font-medium">{totalCount === 0 ? 0 : (currentPage - 1) * limit + 1}</span> to <span className="font-medium">{Math.min(currentPage * limit, totalCount)}</span> of <span className="font-medium">{totalCount}</span>
          </div>
          {/* Right Side: Pagination Controls */}
          <div className="flex items-center gap-1">
            {/* Previous Button */}
            <button
              onClick={previousPage}
              disabled={!canPreviousPage}
              className={`p-2 ${!canPreviousPage ? "text-gray-300 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"} rounded transition-colors`}
            >
              <LeftIcon size={18} />
            </button>
            {/* Page Numbers */}
            {visiblePages.map((page) => (
              <button
                key={page}
                onClick={() => goToPage && goToPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded text-sm font-semibold transition-colors ${page === currentPage
                  ? "bg-[#0038a8] text-white"
                  : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {page}
              </button>
            ))}
            {/* Next Button */}
            <button
              onClick={nextPage}
              disabled={!canNextPage}
              className={`p-2 ${!canNextPage ? "text-gray-300 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"} rounded transition-colors`}
            >
              <RightIcon size={18} />
            </button>
          </div>
        </div>
      )
      }
    </div >
  );
}
