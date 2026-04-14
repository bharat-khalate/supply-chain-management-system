import React from "react";
import Badge, { BadgeVariant } from "../ui/Badge";
interface AppBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: BadgeVariant
}
export default function AppBadge({ children, variant, className, ...args }: AppBadgeProps) {
    return (
        <Badge
            {...args} 
            className={`p-3 rounded-2xl ${className ?? ""}`} 
            {...(variant && { variant })}
        >
            {children}
        </Badge>
    );
}