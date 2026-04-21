import React from "react";
import { ShopIcon, SuccessIcon, ShipIcon, ExclaimIcon } from "@icons/dashboard";

const activities = [
  {
    id: 1,
    title: "New order #123 created",
    subtitle: "By Vendor: Textile Pro (2m ago)",
    icon: <ShopIcon />,
  },
  {
    id: 2,
    title: "Batch #89 Quality Passed",
    subtitle: "QC Team - Factory A (45m ago)",
    icon: <SuccessIcon />,
  },
  {
    id: 3,
    title: "Shipment #SKU-202 dispatched",
    subtitle: "Courier: Global Express (3h ago)",
    icon: <ShipIcon />,
  },
  {
    id: 4,
    title: "Dyeing failure reported",
    subtitle: "Factory C - Lot #901 (5h ago)",
    icon: <ExclaimIcon />,
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-[8px] border border-gray-100 p-[24px] flex flex-col h-full font-sans">
      <h2 className="text-[20px] font-semibold text-[#171C1F] mb-6">Recent Activity</h2>

      <div className="flex-1 relative">
        <ul className="relative space-y-6">
          {/* Timeline background line */}
          <div className="absolute left-[11.5px] top-[24px] bottom-[24px] w-[1px] bg-gray-200" />

          {activities.map((activity) => (
            <li key={activity.id} className="relative flex gap-4">
              <div className="relative z-10 shrink-0 mt-1">
                {activity.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-[#171C1F] leading-snug">
                  {activity.title}
                </span>
                <span className="text-[13px] font-medium text-[#424654] mt-1">
                  {activity.subtitle}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-[20px] w-full py-2.5 px-4 bg-white border border-gray-200 rounded-[6px] text-[14px] font-semibold text-[#5B6B7C] hover:bg-gray-50 transition-colors">
        Show Older Activity
      </button>
    </div>
  );
}
