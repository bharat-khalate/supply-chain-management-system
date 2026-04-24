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
export { RequiredAsterisk, InfoItem };
