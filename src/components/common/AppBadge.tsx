import React from "react";
// Assuming this is your Shadcn/Tailwind badge
import { Badge } from "../ui/badge";

// 1. Avoid mixing MUI types with Tailwind components unless intentional.
// If Badge is a standard React component, use this:
interface AppBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function AppBadge({ children, className, ...args }: AppBadgeProps) {
    return (
        <Badge
            {...args} // 2. Spread requires the "..." syntax inside the tag
            className={`p-3 rounded-2xl ${className ?? ""}`} // 3. Merge classes
        >
            {children}
        </Badge>
    );
}