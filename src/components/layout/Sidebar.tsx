"use client";

import Link from "next/link";
import {
  LayoutGrid,
  Database,
  Factory,
  Users2,
  Banknote,
  Microscope,
  Truck,
  ShoppingCart,
  Hammer,
  BarChart3,
  UserSquare2,
  HelpCircle,
  Headphones,
  Settings,
  ChevronRight,
  LogOutIcon,
  CircleHelp,
} from "lucide-react";


import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  {
    href: "/masters",
    label: "Masters",
    icon: Database,
    hasSubmenu: true,
    suffixIcon: ChevronRight,
  },
  { href: "/vendors", label: "Vendors/Manufacturer", icon: Factory },
  { href: "/buyers", label: "Buyers", icon: Users2, isActive: true },
  { href: "/sales-enquiry", label: "Sales Enquiry", icon: Banknote },
  { href: "/sampling", label: "Sampling", icon: Microscope },
  { href: "/logistic-partners", label: "Logistic Partners", icon: Truck },
  { href: "/orders", label: "Orders", icon: ShoppingCart },
  { href: "/production", label: "Production", icon: Hammer },
  { href: "/reports", label: "Reports", icon: BarChart3 },
  { href: "/staff", label: "Staff", icon: UserSquare2 },
  { href: "/faqs", label: "FAQ's", icon: HelpCircle },
  { href: "/support-tickets", label: "Support Tickets", icon: Headphones },
  { href: "/settings", label: "General Settings", icon: Settings },
];

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden z-40"
        />
      )}
      <aside className={`flex flex-col justify-between w-64 bg-[#F1F5F9] text-[#64748B]
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0`}>
        {/* Logo */}
        <div className="px-6 py-5 mb-8 ">
          <h1 className="text-xl font-bold tracking-tight text-[#1E3A8A]">
            Atelier ERP
          </h1>
          <span className="text-sm text-[#64748B]">Supply Chain Management</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                    ? "bg-white text-[#1D4ED8]"
                    : "text-[#64748B]  hover:text-gray-600"
                  }`}
              >
                <IconComponent />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 ">
          <Link
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors text-[#64748B]  hover:text-gray-600 `}
            href={"/contact"}
          >

            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 20L8.75 17H8.5C6.13333 17 4.125 16.175 2.475 14.525C0.825 12.875 0 10.8667 0 8.5C0 6.13333 0.825 4.125 2.475 2.475C4.125 0.825 6.13333 0 8.5 0C9.68333 0 10.7875 0.220833 11.8125 0.6625C12.8375 1.10417 13.7375 1.7125 14.5125 2.4875C15.2875 3.2625 15.8958 4.1625 16.3375 5.1875C16.7792 6.2125 17 7.31667 17 8.5C17 9.75 16.7958 10.95 16.3875 12.1C15.9792 13.25 15.4208 14.3167 14.7125 15.3C14.0042 16.2833 13.1625 17.175 12.1875 17.975C11.2125 18.775 10.15 19.45 9 20ZM11 16.35C12.1833 15.35 13.1458 14.1792 13.8875 12.8375C14.6292 11.4958 15 10.05 15 8.5C15 6.68333 14.3708 5.14583 13.1125 3.8875C11.8542 2.62917 10.3167 2 8.5 2C6.68333 2 5.14583 2.62917 3.8875 3.8875C2.62917 5.14583 2 6.68333 2 8.5C2 10.3167 2.62917 11.8542 3.8875 13.1125C5.14583 14.3708 6.68333 15 8.5 15H11V16.35ZM8.475 13.975C8.75833 13.975 9 13.875 9.2 13.675C9.4 13.475 9.5 13.2333 9.5 12.95C9.5 12.6667 9.4 12.425 9.2 12.225C9 12.025 8.75833 11.925 8.475 11.925C8.19167 11.925 7.95 12.025 7.75 12.225C7.55 12.425 7.45 12.6667 7.45 12.95C7.45 13.2333 7.55 13.475 7.75 13.675C7.95 13.875 8.19167 13.975 8.475 13.975ZM7.75 10.8H9.25C9.25 10.3 9.3 9.95 9.4 9.75C9.5 9.55 9.81667 9.18333 10.35 8.65C10.65 8.35 10.9 8.025 11.1 7.675C11.3 7.325 11.4 6.95 11.4 6.55C11.4 5.7 11.1125 5.0625 10.5375 4.6375C9.9625 4.2125 9.28333 4 8.5 4C7.76667 4 7.15 4.20417 6.65 4.6125C6.15 5.02083 5.8 5.51667 5.6 6.1L7 6.65C7.08333 6.36667 7.24167 6.0875 7.475 5.8125C7.70833 5.5375 8.05 5.4 8.5 5.4C8.95 5.4 9.2875 5.525 9.5125 5.775C9.7375 6.025 9.85 6.3 9.85 6.6C9.85 6.88333 9.76667 7.1375 9.6 7.3625C9.43333 7.5875 9.23333 7.81667 9 8.05C8.41667 8.55 8.0625 8.94583 7.9375 9.2375C7.8125 9.52917 7.75 10.05 7.75 10.8Z"
                fill="#64748B"
              />
            </svg>

            <span className="mb-1">Support</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm font-medium text-[#BA1A1A] hover:text-red-900 transition-colors"
          >
            <span>
              <LogOutIcon />
            </span>{" "}
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
