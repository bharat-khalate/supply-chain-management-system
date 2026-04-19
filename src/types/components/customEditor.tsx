import { FormikProps } from "formik";
export interface ICustomEditorProps<T> {
  formik: any;
  fieldKey: any;
}

export interface IAppEditorProps<T> {
  formik: FormikProps<T>;
  fieldKey: keyof T;
}
