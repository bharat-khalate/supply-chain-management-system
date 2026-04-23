import { IRedirectOptions } from "../hook.types";

export interface IColumn<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
}
export interface IDataTableProps<T extends object> {
  columns: IColumn<T>[];
  data: T[];
  loading?: boolean;
  emptyMessage?: string;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  idKey?: keyof T;
  Header?: React.ReactNode;
  previousPage?: () => void;
  nextPage?: () => void;
  canPreviousPage?: boolean;
  canNextPage?: boolean;
  currentPage?: number;
  lastPage?: number;
  limit?: number;
  totalCount?: number;
  handleLimitChange?: (limit: number) => void;
  goToPage?: (page: number) => void;
  visiblePageCount?: number;
}
export interface IColumnDefProps {
  deleteCustomer?: (id: string) => void;
  navigate?: ({ action, href }: IRedirectOptions) => void;
}