import { NextResponse } from 'next/server';
import type { IApiResponse, IPaginatedResponse } from '@/types/global.types';
import { HTTP_STATUS } from './constants';

export function createSuccessResponse<T = any>(
  data: T,
  message: string = 'Success',
  statusCode: number = HTTP_STATUS.OK
): NextResponse<IApiResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      statusCode,
      message,
      data,
    },
    { status: statusCode }
  );
}

export function createCreatedResponse<T = any>(
  data: T,
  message: string = 'Created'
): NextResponse<IApiResponse<T>> {
  return createSuccessResponse(data, message, HTTP_STATUS.CREATED);
}

export function createPaginatedResponse<T = any>(
  data: T[],
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  },
  message: string = 'Fetched',
  statusCode: number = HTTP_STATUS.OK
): NextResponse<IPaginatedResponse<T>> {
  const formattedPagination = {
    totalCount: pagination.total,
    currentPage: pagination.page,
    lastPage: pagination.pages,
    canNextPage: pagination.page < pagination.pages,
    canPreviousPage: pagination.page > 1,
  };

  return NextResponse.json(
    {
      success: true,
      statusCode,
      message,
      data,
      pagination: formattedPagination,
    },
    { status: statusCode }
  );
}

export const ApiResponse = {
  success: createSuccessResponse,
  created: createCreatedResponse,
  paginated: createPaginatedResponse,
};