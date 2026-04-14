"use client"

import * as React from "react"

/* simple cn helper */
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ")
}

type SeparatorProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
}

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <div
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation}
      data-slot="separator"
      className={cn(
        "shrink-0 bg-gray-200",
        orientation === "horizontal" && "h-px w-full",
        orientation === "vertical" && "w-px h-full self-stretch",
        className
      )}
      {...props}
    />
  )
}

export { Separator }