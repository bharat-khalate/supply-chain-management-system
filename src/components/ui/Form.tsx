type FormProps = React.ComponentProps<"form">;
type FormErrorProps = {
    message?: string;
    className?: string;
};

type FormFieldProps = React.ComponentProps<"div">;
type FormLabelProps = React.ComponentProps<"label">;
type FormInputProps = React.ComponentProps<"input">;

export function Form({ children, ...props }: FormProps) {
    return <form {...props}>{children}</form>;
}




export function FormField({ className, ...props }: FormFieldProps) {
    return (
        <div
            className={`flex flex-col gap-1 mb-4 ${className ?? ""}`}
            {...props}
        />
    );
}


export function FormLabel({ className, ...props }: FormLabelProps) {
    return (
        <label
            className={`text-sm font-medium ${className ?? ""}`}
            {...props}
        />
    );
}


export function FormError({ message, className }: FormErrorProps) {
    if (!message) return null;

    return (
        <p className={`text-xs text-red-500 ${className ?? ""}`}>
            {message}
        </p>
    );
}



export function FormInput({ className, ...props }: FormInputProps) {
    return (
        <input
            className={`border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className ?? ""}`}
            {...props}
        />
    );
}




const AppForm = Object.assign(Form, {
    Field: FormField,
    Label: FormLabel,
    Error: FormError,
    Input: FormInput,
});

export default AppForm;