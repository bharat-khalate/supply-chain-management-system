import { TBuyerStatusOptions } from "@/types";
import { TRadioOption } from "@/types/components";
import { Ban, CheckCircle } from "lucide-react";
function RequiredAsterisk() {
  return <span className="text-danger">*</span>;
}
function InfoItem({ icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-1 text-slate-400">{icon}</div>
            <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-tight">{label}</p>
                <span className="text-slate-700 font-semibold break-all">{value || "N/A"}</span>
            </div>
        </div>
    );
}
const StatusOptions: TRadioOption<TBuyerStatusOptions>[] = [
  {
    value: "Active", label: "Active", icon: <CheckCircle size={18} />, render: ({ isSelected, option, onSelect }: { isSelected: boolean, option: TRadioOption<TBuyerStatusOptions>, onSelect: () => void }) => {
      return (<div
        key={option.value}
        onClick={() => onSelect()}
        className={`flex flex-col items-center justify-center gap-2 
                                            w-full sm:basis-1/2 h-20 rounded-lg border cursor-pointer transition-all
                                             ${isSelected
            ? "border-blue-600 bg-blue-50 text-blue-700"
            : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
          }`}
      >
        <div>{option?.icon}</div>
        <span className="text-sm font-medium w-full text-center">
          {option?.label}
        </span>
      </div>)
    }
  },
  {
    value: "Inactive", label: "Inactive", icon: <Ban size={18} />, render: ({ isSelected, option, onSelect }: { isSelected: boolean, option:TRadioOption<TBuyerStatusOptions>, onSelect: () => void }) => {
      return (<div
        key={option.value}
        onClick={() => onSelect()}
        className={`flex flex-col items-center justify-center gap-2 
                                            w-full sm:basis-1/2 h-20 rounded-lg border cursor-pointer transition-all
                                             ${isSelected
            ? "border-blue-600 bg-blue-50 text-blue-700"
            : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
          }`}
      >
        <div>{option?.icon}</div>
        <span className="text-sm font-medium w-full text-center">
          {option?.label}
        </span>
      </div>)
    }
  },
];
export { RequiredAsterisk, InfoItem, StatusOptions };
