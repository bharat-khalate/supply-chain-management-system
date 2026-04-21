export interface IFilterFields {
  key: string;
  type: "text" | "select" | "check";
  options?: IOption[];
  label: string;
  render?: (filter: IFilterFields) => React.ReactNode;
}
export type IOnChange = (key: string, value: string | string[]) => void
export interface ITableHeaderProps {
  fields: IFilterFields[];
  values: Record<string, string | string[]>;
  onChange: IOnChange;
  onApply: () => void;
  onClear: () => void;
}

export interface IOption { label: string, value: string }