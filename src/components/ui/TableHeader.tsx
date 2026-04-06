import React from 'react';
import { ListFilter, Download, Printer } from 'lucide-react';

const TableHeader = () => {
  return (
    <div className="w-full bg-white border border-gray-100 rounded-sm shadow-sm p-3 flex items-center justify-between">
      {/* Left Side: Filter Button */}
      <button className="flex items-center gap-2 px-4 py-2 bg-[#f0f4f8] hover:bg-gray-200 text-[#4a5568] rounded transition-colors duration-200">
        <ListFilter size={18} className="text-gray-600" />
        <span className="text-sm font-medium">Filters</span>
      </button>

      {/* Right Side: Action Icons */}
      <div className="flex items-center gap-6 pr-2">
        <button className="text-gray-500 hover:text-gray-800 transition-colors">
          <Download size={20} strokeWidth={1.5} />
        </button>
        <button className="text-gray-500 hover:text-gray-800 transition-colors">
          <Printer size={20} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default TableHeader;