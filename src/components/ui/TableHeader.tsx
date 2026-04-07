import React, { useState } from 'react';
import { ListFilter, Download, Printer } from 'lucide-react';
import { FilterIcon } from '@icons/index';

const TableHeader = () => {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <div className='w-full bg-white border border-gray-100 rounded-sm shadow-sm p-3 '>
      <div className="flex items-center justify-between">
        {/* Left Side: Filter Button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-[#f0f4f8] hover:bg-gray-200 text-[#4a5568] rounded transition-colors duration-200" onClick={() => setExpand((prev) => !prev)}>
          <FilterIcon size={18} className="text-gray-600" />
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
      <div className={`transition-all duration-300 ease-in-out overflow-hidden transform p-3
  ${expand
          ? "opacity-100 translate-y-0 max-h-96 mt-2 "
          : " opacity-0 -translate-y-2 max-h-0"
        }`}>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* ID */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Customer ID</label>
            <input
              type="text"
              placeholder="Enter ID"
              className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Status</label>
            <select className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200">
              <option value="">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            className="px-4 py-2 text-sm border rounded-md hover:bg-gray-100"
          >
            Clear
          </button>

          <button
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Apply
          </button>
        </div>


      </div>
    </div>
  );
};

export default TableHeader;