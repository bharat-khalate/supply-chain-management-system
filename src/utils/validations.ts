/**
 * Utility validation functions
 */

import { FormikProps } from "formik";

export const validations = {
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  isValidPassword: (password: string): boolean => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  },
  isValidPhoneNumber: (phone: string): boolean => {
    const phoneRegex = /^[+]?[0-9]{10,14}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },
  isValidMongoId: (id: string): boolean => {
    return /^[0-9a-fA-F]{24}$/.test(id);
  },
  isValidURL: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },
  sanitizeString: (str: string): string => {
    return str.trim().replace(/[<>]/g, '');
  },
  validatePagination: (page?: string | number, limit?: string | number) => {
    let p = parseInt(String(page), 10) || 1;
    let l = parseInt(String(limit), 10) || 10;

    if (p < 1) p = 1;
    if (l < 1 || l > 100) l = 10;

    return { page: p, limit: l };
  },
};


export const shouldShowError = <T extends Record<string, any>>(
  formik: FormikProps<T>,
  fieldName: keyof T
): boolean => {
  return !!(formik.touched[fieldName] && formik.errors[fieldName]);
};



