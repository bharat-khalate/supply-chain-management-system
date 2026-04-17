export type FieldErrorItem = {
    message?: string;
};

export type TFieldProps = React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
    errors?: FieldErrorItem[];
    orientation?: "vertical" | "horizontal" | "responsive"
};
export type TFieldErrorProps = React.ComponentProps<"div"> & {
    errors?: Array<{ message?: string } | undefined>
}