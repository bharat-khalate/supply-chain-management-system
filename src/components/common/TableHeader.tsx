import React, { ChangeEvent, useState } from 'react';

import { FilterIcon, PrintIcon, DownloadIcon } from '@icons/table-icons/header/index';



export interface option { label: string, value: string }

export interface FilterFields {
  key: string;
  type: "text" | "select" | "check";
  options?: option[];
  label: string;
  render?: (filter: FilterFields) => React.ReactNode;
}


export type onChange = (key: string, value: string | string[]) => void

export interface TableHeaderProps {
  filters: FilterFields[];
  values: Record<string, string | string[]>;
  onChange: onChange;
  onApply: () => void;
  onClear: () => void;
}

const TableHeader = ({
  filters,
  values,
  onChange,
  onApply,
  onClear
}: TableHeaderProps) => {
  const [expand, setExpand] = useState<boolean>(false);


  const handleCheckBoxChange = (key: string, value: string, isChecked: boolean) => {
    const current: string[] = values[key] as string[] || [];
    const updated = isChecked ? [...new Set([...current, value])] : current.filter((val: string) => val !== value);
    onChange(key, updated);
  }
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
            <DownloadIcon size={20} strokeWidth={1.5} />
          </button>
          <button className="text-gray-500 hover:text-gray-800 transition-colors">
            <PrintIcon size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out origin-top overflow-hidden bg-white  
  ${expand ? "opacity-100 scale-y-100 max-h-[400px] p-4 mt-2" : " opacity-0 scale-y-95 max-h-0 p-0"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {
            filters.map((filter, idx) => {

              if (filter.render) {
                return filter.render(filter);
              }

              switch (filter.type) {
                case "text":
                  return (
                    <div className="flex flex-col" key={filter.key}>
                      <label className="text-sm text-gray-600 mb-1">{filter.label}</label>
                      <input
                        type="text"
                        placeholder="Enter name"
                        className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                        onChange={(e) => onChange(filter.key, e.target.value)}
                        value={values[filter.key] ?? ""}
                      />
                    </div>
                  );

                case "select":
                  return (
                    <div className="flex flex-col" key={filter.key}>
                      <label className="text-sm text-gray-600 mb-1">{filter.label}</label>
                      <select className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200" onChange={(e) => onChange(filter.key, e.target.value)} value={values[filter.key] ?? ""}>
                        <option value="">Select {filter.label}</option>
                        {filter.options && filter.options.map((option, idx) => (
                          <option value={option.value} key={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                  );

                case "check":
                  return (
                    <div className="flex flex-col" key={filter.key}>
                      <label className="text-sm text-gray-600 mb-2">{filter.label}</label>

                      <div className="flex items-center gap-4">
                        {filter.options && filter.options.map((option) => {
                          return (
                            <label className="flex items-center gap-2 text-sm" key={option.value} >
                              <input type="checkbox" value={option.value ?? false} className="accent-green-600" onChange={(e) => handleCheckBoxChange(filter.key, option.value, e.target.checked)} checked={(values[filter.key] || undefined)?.includes(option.value) ?? false} />
                              {option.label}
                            </label>
                          )
                        })}

                      </div>
                    </div>
                  );

                default: return "";



              }

            })
          }
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button className="px-4 py-2 text-sm border rounded-md hover:bg-gray-100" onClick={onClear}>
            Clear
          </button>

          <button onClick={onApply} className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Apply
          </button>
        </div>
      </div>
    </div >
  );
};

export default TableHeader;