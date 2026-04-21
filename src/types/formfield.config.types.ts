import { FieldConstant } from "./interface";
export type TFormFieldConfig<T> =
    Record<keyof T, FieldConstant<T>>
