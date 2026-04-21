import { IBadgeProps, IBadgeVariant } from "@/types"

const baseStyles =
  "inline-flex h-5 w-fit items-center justify-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all"
const variantStyles: Record<IBadgeVariant, string> = {
  default: "bg-blue-600 text-white",
  secondary: "bg-gray-200 text-gray-800",
  destructive: "bg-red-100 text-red-700",
  success: "bg-green-100 text-green-700",
  outline: "border border-gray-300 text-gray-800",
  ghost: "hover:bg-gray-100",
  link: "text-blue-600 underline hover:opacity-80",
}
function Badge({
  className = "",
  variant = "default",
  asChild = false,
  ...props
}: IBadgeProps) {
const Comp = asChild ? "span" : "span"
return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    />
  )
}
export default Badge