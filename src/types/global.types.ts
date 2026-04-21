// Global types and interfaces
export interface IApiResponse<T = any> {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T;
}
export interface IApiError {
  success: false;
  statusCode: number;
  message: string;
  errors?: Record<string, string | string[]>;
}
export interface IPaginationQuery {
  page?: number;
  limit?: number;
  sort?: string;
  search?: string;
}
export interface IPaginationResponse {
  currentPage: number;
  lastPage: number;
  totalCount: number;
  canNextPage: boolean;
  canPreviousPage: boolean;
};
export interface IPaginatedResponse<T = any> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T[];
  pagination: IPaginationResponse;
}
export interface IPaginatedData<T> {
  data: T[];
  pagination: IPaginationResponse
}
export interface IPaginatedState<T> {
  data: T[];
  pagination: IPaginationResponse;
  selected: T | null;
  loading: boolean;
  error: any | null
}