import { LeftIcon, RightIcon } from "@icons/table-icons/footer"

const TableFooter = () => {
  return (
    <div className="w-full bg-white border border-gray-100 rounded-sm shadow-sm p-4 flex items-center justify-between">
      {/* Left Side: Results Count */}
      <div className="text-sm text-slate-600">
        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">10</span>
      </div>

      {/* Right Side: Pagination Controls */}
      <div className="flex items-center gap-1">
        {/* Previous Button - Disabled state */}
        <button className="p-2 text-gray-300 cursor-not-allowed" disabled>
          <LeftIcon size={18} />
        </button>

        {/* Page Numbers */}
        <button className="w-8 h-8 flex items-center justify-center bg-[#0038a8] text-white rounded text-sm font-semibold">
          1
        </button>


        {/* Next Button */}
        <button className="p-2 text-gray-700 hover:bg-gray-100 rounded transition-colors">
          <RightIcon size={18} />
        </button>
      </div>
    </div>
  );
};

export default TableFooter;