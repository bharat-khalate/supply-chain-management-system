export interface ISubmenuItem {
    href: string;
    label: string;
}
export interface INavItem {
    href: string;
    label: string;
    icon: React.ElementType;
    isActive?: boolean;
    hasSubmenu?: boolean;
    suffixIcon?: React.ElementType;
    submenus?: ISubmenuItem[];
}

export interface ISidebarProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}
