"use client"
import { TFieldProps } from "@/types"
import { useMemo } from "react"


function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ")
}
function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn("flex flex-col gap-7 w-full", className)}
      {...props}
    />
  )
}
function Field({
  className,
  orientation = "vertical",
  ...props
}: TFieldProps) {
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
function FieldError({
  className,
  children,
  errors,
  ...props  
}: TFieldProps) {
  const content = useMemo<React.ReactNode>(() => {
    if (children) return children;
    if (!errors?.length) return null;

    const uniqueErrors = [
      ...new Map(errors.map((e) => [e?.message, e])).values(),
    ];

    if (uniqueErrors.length === 1) {
      return uniqueErrors[0]?.message ?? null;
    }

    return (
      <ul className="ml-4 list-disc flex flex-col gap-1">
        {uniqueErrors.map(
          (error, i) =>
            error?.message && <li key={i}>{error.message}</li>
        )}
      </ul>
    );
  }, [children, errors]);

  if (!content) return null;

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-sm text-red-500", className)}
      {...props}
    >
      {content}
    </div>
  );
}
export {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
}