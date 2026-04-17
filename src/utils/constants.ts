// Application constants

import { IBuyerFields } from "@/app/(protected)/buyers/add/page";
import { IGeneralInfoSetting } from "@/components/common/settings-layout/forms/GenralInfoSettingForm";
import { ISocialMediaLinkFormFields } from "@/components/common/settings-layout/forms/SocialMediaLinkForm";
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


export const BuyerConstants: Record<keyof IBuyerFields, FieldConstant<keyof IBuyerFields>> = {
  buyerName: {
    label: "Name",
    length: 52,
    key: "buyerName"
  },
  buyerAddress: {
    label: "Address",
    length: 250,
    key: "buyerAddress"
  },
  phone: {
    label: "Phone",
    length: 15,
    key: "phone"
  },
  email: {
    label: "Email",
    length: 150,
    key: "email"
  },
  contactPerson: {
    label: "Contact Person",
    length: 52,
    key: "contactPerson"
  },
  requirementCategory: {
    label: "Requirement Category",
    length: 52,
    key: "requirementCategory"
  },
  buyerType: {
    label: "Buyer Type",
    length: 52,
    key: "buyerType"
  },
  status: {
    label: "status",
    length: 25,
    key: "status"
  }
}

export const GeneralSettingConstant: Record<keyof IGeneralInfoSetting, FieldConstant<keyof IGeneralInfoSetting>> = {
  systemEmail: {
    label: "System Email",
    length: 150,
    key: "systemEmail"
  },
  phone: {
    label: "Phone Number",
    length: 15,
    key: "phone"
  },
  websiteVideoUrl: {
    label: "Website Video Url",
    length: 250,
    key: "websiteVideoUrl"
  }
}


export type TGeneralSettingConstants = typeof GeneralSettingConstant;

export const SocialMediaLinkFormFieldConstants: Record<keyof ISocialMediaLinkFormFields, FieldConstant<keyof ISocialMediaLinkFormFields>> = {
  instagramLink: {
    key: "instagramLink",
    length: 520,
    label: "Instagram Link"
  },
  facebookLink: {
    key: "facebookLink",
    length: 520,
    label: "Facebook Link"
  },
  twitterLink: {
    label: "Twitter Link",
    key: "twitterLink",
    length: 520
  }
}