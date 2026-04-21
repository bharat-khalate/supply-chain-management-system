export interface FieldConstant<T> {
  label: string;
  min?: number;
  max?: number;
  length: number;
  key: keyof T
}