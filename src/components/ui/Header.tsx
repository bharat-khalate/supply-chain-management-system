import { Search, Bell, User } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="w-full bg-gray-100 ">
      <div className="flex items-center justify-between px-6 py-3">

        {/* Search */}
        <div className="flex items-center bg-gray-200 rounded-md px-3 py-2 w-[420px]">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search buyers, regions, or segments..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6">

          {/* Notification */}
          <Bell className="text-gray-600 cursor-pointer" />

          {/* Divider */}
          <div className="h-6 w-px bg-gray-300" />

          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium">Portfolio Manager</p>
              <p className="text-xs text-gray-500">Global Operations</p>
            </div>

            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <User size={20} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}