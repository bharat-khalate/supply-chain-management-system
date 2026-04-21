"use client";
const factories = [
  { name: "Factory A - Vietnam", pct: 92, color: "#185FA5", textColor: "#185FA5" },
  { name: "Factory B - India", pct: 68, color: "#0F6E56", textColor: "#0F6E56" },
  { name: "Factory C - Bangladesh", pct: 45, color: "#A32D2D", textColor: "#A32D2D" },
];

export default function ProductionCapacity() {
  return (
    <div className="bg-white rounded-[8px] border border-gray-100 p-[32px] flex flex-col gap-5 h-full">
      <span className="text-[20px] font-semibold text-[#171C1F]">Production Capacity</span>

      <div className="flex flex-col gap-6">
        {factories.map(({ name, pct, color, textColor }) => (
          <div key={name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[13px] font-medium text-[#171C1F]">{name}</span>
              <span className="text-[13px] font-medium" style={{ color: textColor }}>
                {pct}%
              </span>
            </div>
            <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${pct}%`, background: color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-2.5 bg-[#F0F4F8] rounded-[8px] px-[16px] py-[16px] mt-auto border border-gray-100">
        <div
          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ border: "1.5px solid #185FA5" }}
        >
          <span className="text-[9px] font-bold" style={{ color: "#185FA5" }}>i</span>
        </div>
        <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
          Shift schedule optimized for Factory A.
        </p>
      </div>
    </div>
  );
}
