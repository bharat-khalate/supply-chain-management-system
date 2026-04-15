import React from "react";
// Assuming this is your Shadcn/Tailwind badge
import Badge, { BadgeVariant } from "../ui/badge";

// 1. Avoid mixing MUI types with Tailwind components unless intentional.
// If Badge is a standard React component, use this:
interface AppBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: BadgeVariant
}

export default function AppBadge({ children, variant, className, ...args }: AppBadgeProps) {
    return (
        <Badge
            {...args} // 2. Spread requires the "..." syntax inside the tag
            className={`p-3 rounded-2xl ${className ?? ""}`} // 3. Merge classes
            {...(variant && { variant })}
        >
            {children}
        </Badge>
    );
}