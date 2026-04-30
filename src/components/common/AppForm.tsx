import { TAppFormProps } from '@/types/components';
import {
    FormikProvider,
    FormikValues,
    useFormik
} from 'formik';
export function AppForm<T extends FormikValues>({
    formikProps,
    children,
    ...formProps
}: TAppFormProps<T>) {
    const formik = useFormik<T>({
        ...formikProps
    })
    return (
        <FormikProvider value={formik}>
            <form
                onSubmit={formik.handleSubmit}
                {...formProps}
            >
                {children}
            </form>
        </FormikProvider>
    )
}
