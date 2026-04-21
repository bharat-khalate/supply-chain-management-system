import { IAppStatusBadgeProps } from "@/types";
import Badge from "../ui/Badge";
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