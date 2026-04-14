"use client"
import * as React from "react"
/* simple cn helper */
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ")
}
type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  disabled?: boolean
}
function Label({
  className,
  disabled,
  ...props
}: LabelProps) {
  return (
    <label
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none",
        disabled && "pointer-events-none opacity-50",
        className
      )}
      {...props}
    />
  )
}
export { Label }