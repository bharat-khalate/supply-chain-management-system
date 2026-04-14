// Application constants

import { FieldConstant } from "@/types/interface";

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;

export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'Invalid email or password',
  USER_NOT_FOUND: 'User not found',
  USER_ALREADY_EXISTS: 'User already exists',
  UNAUTHORIZED: 'You are not authorized to perform this action',
  FORBIDDEN: 'Access forbidden',
  VALIDATION_ERROR: 'Validation failed',
  INTERNAL_ERROR: 'Internal server error',
  RESOURCE_NOT_FOUND: 'Resource not found',
  DUPLICATE_ENTRY: 'This entry already exists',
} as const;

export const SUCCESS_MESSAGES = {
  CREATED: 'Created successfully',
  UPDATED: 'Updated successfully',
  DELETED: 'Deleted successfully',
  FETCHED: 'Fetched successfully',
  LOGIN_SUCCESS: 'Login successful',
  LOGOUT_SUCCESS: 'Logout successful',
} as const;

export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator',
} as const;

export const API_VERSIONS = {
  V1: 'v1',
} as const;

export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

export const TOKEN_EXPIRY = {
  ACCESS_TOKEN: '15m',
} as const;


export const BuyerConstants: Record<string, FieldConstant> = {
  buyerName: {
    label: "Name",
    length: 52,
  },
  buyerAddress: {
    label: "Address",
    length: 250,
  },
  phone: {
    label: "Phone",
    length: 15,
  },
  email: {
    label: "Email",
    length: 150,
  },
  contactPerson: {
    label: "Contact Person",
    length: 52,
  },
  requireMentCategory: {
    label: "Requirement Category",
    length: 52,
  },
  buyerType: {
    label: "Buyer Type",
    length: 52,
  },
  status: {
    label: "status",
    length: 25
  }
}