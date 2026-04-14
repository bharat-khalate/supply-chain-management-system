"use client";

import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const MONTHLY = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  data: [0.9, 1.2, 1.8, 2.1, 2.9, 2.4],
};

const WEEKLY = {
  labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12"],
  data: [0.18, 0.22, 0.28, 0.32, 0.38, 0.42, 0.5, 0.55, 0.62, 0.72, 0.68, 0.6],
};

export default function SalesAnalytics() {
  const [view, setView] = useState("monthly");
  const source = view === "monthly" ? MONTHLY : WEEKLY;

  const chartData = {
    labels: source.labels,
    datasets: [
      {
        data: source.data,
        borderColor: "#1a3f7a",
        borderWidth: 5,
        pointRadius: 0,
        pointHoverRadius: 4,
        tension: 0.45,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: { label: (ctx: any) => ctx.parsed.y.toFixed(1) + "M" },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { color: "#888", font: { size: 11 }, autoSkip: false },
      },
      y: {
        min: 0,
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: "#888",
          font: { size: 11 },
          stepSize: 1,
          callback: (v: any) => (v === 0 ? "0" : v + "M"),
        },
      },
    },
  };

  const btnBase =
    "text-xs px-3 py-1 rounded-full cursor-pointer transition-all duration-150";
  const activeBtn = `${btnBase} bg-[#1a3f7a] text-white border-transparent`;
  const inactiveBtn = `${btnBase} bg-gray-100 text-[#171C1F] border border-gray-200`;

  return (
    <div className="bg-white rounded-[8px] border border-gray-100 p-[32px] flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between">
        <span className="text-[20px] font-semibold text-[#171C1F]">Sales Analytics</span>
        <div className="flex gap-1.5 font-medium">
          <button className={view === "weekly" ? activeBtn : inactiveBtn} onClick={() => setView("weekly")}>
            Weekly
          </button>
          <button className={view === "monthly" ? activeBtn : inactiveBtn} onClick={() => setView("monthly")}>
            Monthly
          </button>
        </div>
      </div>
      <div className="relative flex-grow min-h-[250px] w-full mt-4">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
