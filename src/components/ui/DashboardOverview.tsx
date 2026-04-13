import { TrendingUp, TrendingDown, Package, AlertTriangle } from "lucide-react";
import React from "react";

const stats = [
  { label: "Total Vendors", value: "1,240" },
  { label: "Total Buyers", value: "1,240" },
  { label: "Total Manufacturer", value: "48" },
  { label: "Total Logistic Partner", value: "48" },
];

const metrics = [
  {
    label: "Total Revenue",
    value: "£ 2.4M",
    badge: { text: "12%", type: "up" as const },
  },
  {
    label: "Total Orders",
    value: "1,240",
    badge: { text: "4.2%", type: "down" as const },
  },
  {
    label: "Active Production",
    value: "48",
    suffix: "batches"
  },
  {
    label: "Pending Dispatch",
    value: "12",
    badge: { text: "Critical", type: "critical" as const },
    danger: true,
  },
];

interface BadgeProps {
  text: string;
  type: "up" | "down" | "critical";
}

function Badge({ text, type }: BadgeProps) {
  const styles = {
    up: "bg-green-50 text-green-700",
    down: "bg-orange-50 text-orange-700",
    critical: "bg-red-50 text-red-700 font-semibold",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 ${styles[type]}`}
    >
      {type === "up" && <TrendingUp size={11} />}
      {type === "down" && <TrendingDown size={11} />}
      {text}
    </span>
  );
}

interface StatCardProps {
  label: string;
  value: string;
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-[8px] p-[24px] min-w-0 overflow-hidden">
      <p className="text-[12px] font-semibold uppercase tracking-widest text-[#424654] truncate mb-1.5">
        {label}
      </p>
      <p className="text-[28px] font-semibold text-[#424654] truncate">{value}</p>
    </div>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  suffix?: string;
  badge?: {
    text: string;
    type: "up" | "down" | "critical";
  };
  icon?: React.ReactNode;
  danger?: boolean;
}

function MetricCard({ label, value, suffix, badge, icon, danger }: MetricCardProps) {
  return (
    <div
      className={`bg-white border border-gray-100 rounded-[8px] p-[24px] min-w-0 overflow-hidden ${danger ? "border-l-[4px] border-l-red-500" : ""
        }`}
    >
      <p className="text-[12px] font-semibold uppercase tracking-widest text-[#424654] truncate mb-1.5">
        {label}
      </p>
      <div className="flex items-end gap-[12px] flex-nowrap overflow-hidden">
        {icon && <span className="shrink-0">{icon}</span>}
        <span
          className="font-semibold text-[#424654] truncate leading-none"
          style={{ fontSize: "28px" }}
        >
          {value}
        </span>
        {suffix && (
          <span className="text-[10px] uppercase text-[#424654] font-semibold shrink-0 whitespace-nowrap">
            {suffix}
          </span>
        )}
        {badge && <Badge text={badge.text} type={badge.type} />}
      </div>
    </div>
  );
}

export default function DashboardOverview() {
  return (
    <div className="font-sans pt-4">
      <h1 className="text-[32px] font-bold text-[#424654] mb-6 tracking-tight">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {metrics.map((m) => (
          <MetricCard key={m.label} {...m} />
        ))}
      </div>
    </div>
  );
}
