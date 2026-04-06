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

export interface IPaginatedResponse<T = any> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}
