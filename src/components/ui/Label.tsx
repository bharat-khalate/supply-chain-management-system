"use client"
import { TLabelProps } from "@/types"
import * as React from "react"
/* simple cn helper */
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ")
}

function Label({
  className,
  disabled,
  ...props
}: TLabelProps) {
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