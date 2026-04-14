"use client"

import { useMemo } from "react"

/* Simple class merge helper (replace cn) */
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ")
}

/* ---------------- FIELD GROUP ---------------- */

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn("flex flex-col gap-7 w-full", className)}
      {...props}
    />
  )
}

/* ---------------- FIELD ---------------- */

type FieldProps = React.ComponentProps<"div"> & {
  orientation?: "vertical" | "horizontal" | "responsive"
}

function Field({
  className,
  orientation = "vertical",
  ...props
}: FieldProps) {
  const base = "flex w-full gap-3"

  const orientationStyles = {
    vertical: "flex-col",
    horizontal: "flex-row items-center",
    responsive: "flex-col md:flex-row md:items-center",
  }

  return (
    <div
      role="group"
      data-slot="field"
      className={cn(base, orientationStyles[orientation], className)}
      {...props}
    />
  )
}

/* ---------------- FIELD LABEL ---------------- */

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="field-label"
      className={cn(
        "flex gap-2 leading-snug text-sm font-medium",
        className
      )}
      {...props}
    />
  )
}

/* ---------------- FIELD ERROR ---------------- */

type FieldErrorProps = React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: FieldErrorProps) {
  const content = useMemo(() => {
    if (children) return children

    if (!errors?.length) return null

    const uniqueErrors = [
      ...new Map(errors.map((e) => [e?.message, e])).values(),
    ]

    if (uniqueErrors.length === 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="ml-4 list-disc flex flex-col gap-1">
        {uniqueErrors.map(
          (error, i) =>
            error?.message && <li key={i}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) return null

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-sm text-red-500", className)}
      {...props}
    >
      {content}
    </div>
  )
}

/* ---------------- EXPORT ---------------- */

export {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
}