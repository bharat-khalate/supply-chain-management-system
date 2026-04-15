export default function AppLogo({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className ?? ''}`}>
      <h1 className="text-xl font-bold tracking-tight text-[#1E3A8A]">
        Atelier ERP
      </h1>
      <span className="text-sm text-[#64748B]">Supply Chain Management</span>
    </div>
  );
}
