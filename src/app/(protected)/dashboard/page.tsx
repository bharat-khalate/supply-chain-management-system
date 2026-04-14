import DashboardOverview from "@/components/ui/DashboardOverview";
import SalesAnalytics from "@/components/ui/SalesAnalytics";
import ProductionCapacity from "@/components/ui/ProductionCapacity";
import AlertsTable from "@/components/ui/AlertsTable";
import RecentActivity from "@/components/ui/RecentActivity";
export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 pb-6">
      <DashboardOverview />
      {/* Row 1: Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 font-sans">
        <div className="lg:col-span-2 h-full">
          <SalesAnalytics />
        </div>
        <div className="h-full">
          <ProductionCapacity />
        </div>
      </div>
      {/* Row 2: Tables & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 font-sans">
        <div className="lg:col-span-2 h-full">
          <AlertsTable />
        </div>
        <div className="h-full">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
