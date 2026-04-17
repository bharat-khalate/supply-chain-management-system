import { IBadgeVariant } from "./badge.type";
export interface IAppStatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: IBadgeVariant
}