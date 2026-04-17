import React from "react";
import Badge from "../ui/Badge";
import { IAppStatusBadgeProps } from "@/types";
export default function AppBadge({ children, variant, className, ...args }: IAppStatusBadgeProps) {
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