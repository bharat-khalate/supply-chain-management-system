"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  BuyersIcon,
  VendorsIcon,
  DashboardIcon,
  SalesEnquiryIcon,
  SamplingIcon,
  FAQIcon,
  ReportsIcon,
  LogisticPartnersIcon,
  OrdersIcon,
  ProductionIcon,
  StaffIcon,
  SupportIcon,
  SupportTicketsIcon,
  SettingsIcon,
  MastersIcon,
  LogOutIcon,
  RightArrowIcon
} from "@icons/sidebaricons";
import { INavItem, ISidebarProps } from "@/types";


const navItems: INavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: DashboardIcon },
  {
    href: "/masters",
    label: "Masters",
    icon: MastersIcon,
    hasSubmenu: true,
    suffixIcon: RightArrowIcon,
    submenus: [
      { href: "/masters/sub1", label: "Dummy Submenu 1" },
      { href: "/masters/sub2", label: "Dummy Submenu 2" },
      { href: "/masters/sub3", label: "Dummy Submenu 3" },
    ],
  },
  { href: "/vendors", label: "Vendors/Manufacturer", icon: VendorsIcon },
  { href: "/buyers", label: "Buyers", icon: BuyersIcon, isActive: true },
  { href: "/sales-enquiry", label: "Sales Enquiry", icon: SalesEnquiryIcon },
  { href: "/sampling-overview", label: "Sampling", icon: SamplingIcon },
  { href: "/logistic-partners", label: "Logistic Partners", icon: LogisticPartnersIcon },
  { href: "/orders-overview", label: "Orders", icon: OrdersIcon },
  { href: "/production", label: "Production", icon: ProductionIcon },
  { href: "/reports", label: "Reports", icon: ReportsIcon },
  { href: "/staff", label: "Staff", icon: StaffIcon },
  { href: "/faqs", label: "FAQ's", icon: FAQIcon },
  { href: "/support-tickets", label: "Support Tickets", icon: SupportTicketsIcon },
  { href: "/settings", label: "General Settings", icon: SettingsIcon },
];

export function Sidebar({ open, setOpen }: ISidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  useEffect(() => {
    const initialOpenStates: Record<string, boolean> = {};
    navItems.forEach((item) => {
      if (item.hasSubmenu && (pathname === item.href || pathname.startsWith(item.href + "/"))) {
        initialOpenStates[item.href] = true;
      }
    });
    setOpenSubmenus((prev) => ({ ...prev, ...initialOpenStates }));
  }, [pathname]);
  const toggleSubmenu = (href: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [href]: !prev[href] }));
  };
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
      <aside
        className={`fixed top-0 left-0 flex z-50 h-screen flex-col justify-between md:w-64 bg-[#F1F5F9] text-[#64748B]
    transform transition-transform duration-300 overflow-y-auto scrollbar-hide
    ${open ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0`}
      >
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
            if (item.hasSubmenu) {
              const isOpen = openSubmenus[item.href];
              const SuffixIcon = item.suffixIcon;
              return (
                <div key={item.href} className="flex flex-col">
                  <div
                    onClick={() => toggleSubmenu(item.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer select-none ${
                      isActive
                        ? "bg-white text-[#1D4ED8]"
                        : "text-[#64748B] hover:text-gray-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent />
                      {item.label}
                    </div>
                    {SuffixIcon && (
                      <div
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      >
                        <SuffixIcon />
                      </div>
                    )}
                  </div>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-1"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {item.submenus && (
                        <div className="flex flex-col space-y-1 ml-5 pl-4 border-l border-gray-200">
                          {item.submenus.map((sub) => {
                            const isSubActive =
                              pathname === sub.href ||
                              pathname.startsWith(sub.href + "/");
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                                  isSubActive
                                    ? "text-[#1D4ED8] bg-white bg-opacity-50 font-medium"
                                    : "text-[#64748B] hover:text-gray-600"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
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
            <SupportIcon />
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
