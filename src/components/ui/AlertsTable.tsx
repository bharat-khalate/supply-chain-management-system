"use client";

import React from "react";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { ExclaimIcon, BoatIcon, SuccessIcon } from "@icons/table-icons/actions";

interface IAlert {
  priority: string;
  priorityStyle: string;
  title: string;
  subtitle: string;
  date: string;
  actionIcon: React.ReactNode;
}

const alerts: IAlert[] = [
  {
    priority: "High",
    priorityStyle: "bg-[#FCE8E8] text-[#D42620] font-bold",
    title: "Delayed production alert",
    subtitle: "Order #450 - Denim Jacket XL",
    date: "Jun 14, 2024",
    actionIcon: <ExclaimIcon />,
  },
  {
    priority: "Medium",
    priorityStyle: "bg-[#E3E8EE] text-[#424654] font-bold",
    title: "Low stock alerts",
    subtitle: "Cotton Twill - Navy (80m left)",
    date: "Jun 18, 2024",
    actionIcon: <BoatIcon />,
  },
  {
    priority: "Normal",
    priorityStyle: "bg-[#0F6E56] text-white font-bold",
    title: "4 Sample approvals",
    subtitle: "Summer Collection '25",
    date: "Jun 20, 2024",
    actionIcon: <SuccessIcon />,
  },
];

export default function AlertsTable() {
  const columns: Column<IAlert>[] = [
    {
      key: "priority",
      header: "Priority",
      render: (r) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] ${r.priorityStyle}`}
        >
          {r.priority}
        </span>
      ),
    },
    {
      key: "issue",
      header: "Issue/Task",
      render: (r) => (
        <div>
          <p className="text-[14px] font-bold text-[#171C1F]">{r.title}</p>
          <p className="text-[13px] font-medium text-[#424654] mt-[4px]">
            {r.subtitle}
          </p>
        </div>
      ),
    },
    {
      key: "date",
      header: "Target Date",
      render: (r) => (
        <span className="text-[14px] font-bold text-[#171C1F]">{r.date}</span>
      ),
    },
    {
      key: "action",
      header: "Action",
      render: (r) => (
        <button className="inline-flex items-center justify-center p-1.5 hover:bg-gray-100 rounded-md transition-colors">
          {r.actionIcon}
        </button>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-[8px] border border-gray-100 p-0 pb-[47px] overflow-hidden flex flex-col font-sans h-full">
      <div className="flex items-center justify-between p-[24px]">
        <h2 className="text-[20px] font-semibold text-[#171C1F]">
          Alerts & Pending Approvals
        </h2>
        <button className="text-[14px] font-semibold text-[#0040A1] hover:underline flex items-center cursor-pointer">
          View All <span className="ml-[2px]">&gt;</span>
        </button>
      </div>

      <div className="w-full">
        <DataTable columns={columns} data={alerts} removeWrapperBorder={true} />
      </div>
    </div>
  );
}
