import * as React from "react"
import Link from "next/link"
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
)
const MoreHorizontalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
  </svg>
)
export function Breadcrumb({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn(className)}
      {...props}
    />
  )
}
export function BreadcrumbList({
  className,
  ...props
}: React.ComponentProps<"ol">) {
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm text-gray-500 sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}
export function BreadcrumbItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}
export function BreadcrumbLink({
  href,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link> & {
  href?: string
}) {
  if (!href) {
    return (
      <span className={`text-black ${className ?? ""}`}>
        {children}
      </span>
    )
  }
  return (
    <Link
      href={href}
      className={`transition-colors hover:text-black ${className ?? ""}`}
      {...props}
    >
      {children}
    </Link>
  )
}
export function BreadcrumbPage({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-black", className)}
      {...props}
    />
  )
}
export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  )
}
export function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn("flex items-center justify-center w-5 h-5", className)}
      {...props}
    >
      <MoreHorizontalIcon />
      <span className="sr-only">More</span>
    </span>
  )
}