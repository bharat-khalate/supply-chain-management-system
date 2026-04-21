import { FormikProps } from "formik";
import { FieldConstant } from "../interface";
export type TInputFieldProps<T> = {
    formik: FormikProps<T>;
    fieldConstant: FieldConstant<T>
}