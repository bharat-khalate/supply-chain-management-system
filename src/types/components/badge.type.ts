export type IBadgeVariant =
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    | "success"
export interface IBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: IBadgeVariant
    asChild?: boolean
}