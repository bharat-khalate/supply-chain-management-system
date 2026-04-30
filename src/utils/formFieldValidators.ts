import { SearchBarConfig } from "@/configs/forms/searchBar";
import * as Yup from "yup";

export const emailValidation = (maxLength: number) =>
  Yup.string()
    .email("Invalid email format")
    .required("Please Enter Your Email.")
    .max(maxLength, `Email must not exceed ${maxLength} characters`);

export const otpValidation = Yup.string()
  .matches(/^\d{6}$/, "OTP must be exactly 6 digits")
  .required("OTP is required");

export const passwordValidation = (maxLength: number) =>
  Yup.string()
    .required("Please Enter Your Password.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one digit, and one special character.",
    )
    .max(maxLength, `Password must not exceed ${maxLength} characters`);

export const commonUrlValidation = Yup.string()
  .trim()
  .url("Invalid URL format")
  .required("Url is Required")
  .max(500, "URL must be at most 500 characters");

export const confirmPasswordValidation = (maxLength: number) =>
  Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one digit, and one special character.",
    )
    .required("Please Enter Your Confirm Password.")
    .oneOf(
      [Yup.ref("password")],
      "Confirm Password and Password should be the same.",
    )
    .max(maxLength, `Confirm Password must not exceed ${maxLength} characters`);

export const commonNameValidation = (value: string) =>
  Yup.string()
    .required("Required")
    .max(52, "Must be 52 characters or less")
    .matches(
      /^[\u0600-\u06FFA-Za-z\s]+$/,
      "Only alphabets are allowed for " + value,
    );

export const commonStringValidation = (fieldName: string, maxLength: number) =>
  Yup.string()
    .matches(
      /^[\u0900-\u097FA-Za-z\s?]+$/,
      `${fieldName} should contain only Hindi or English letters, spaces, and question marks`,
    )
    .required(`${fieldName} is required`)
    .max(maxLength, `${fieldName} must not exceed ${maxLength} characters`);

export const buyerTypeValidation = (fieldName: string) => {
  return Yup.string()
    .required(`${fieldName} is required`)
    .oneOf(
      [
        "Retailer",
        "Wholesaler",
        "Brand",
        "Corporate",
        "Institutional",
        "Enterprise",
        "Misc",
      ],
      `${fieldName} is invalid`,
    );
};
export const searchFieldValidator = Yup.string().min(SearchBarConfig.query.min || 6, "Please type at least 6 characters to search");
export const commonAlphaNumericValidation = (
  fieldName: string,
  maxLength: number,
) =>
  Yup.string()
    .matches(
      /^[a-zA-Z0-9]+$/,
      `${fieldName} should contain only letters and numbers (no spaces or special characters)`,
    )
    .required(`${fieldName} is required`)
    .max(maxLength, `${fieldName} must not exceed ${maxLength} characters`);
export const AddressStringValidation = (value: string, maxLength: number) =>
  Yup.string()
    .matches(
      /^[\u0600-\u06FFA-Za-z0-9\s.,#'’/\-()&]+$/,
      `${value} can only contain letters, numbers, spaces, and basic special characters (.,#'/-()&)`,
    )
    .max(maxLength, `${value} must not exceed ${maxLength} characters`)
    .required(`${value} is required`);

export const commonRequiredStringValidation = (value: string) => {
  return Yup.string().required(`${value} is required`);
};

export const CommonRichTextRequiredValidator = (label: string) =>
  Yup.string()
    .required(`${label} is required`)
    .defined()
    .test("not-empty", `${label} is required`, (value) => {
      if (!value) return false;

      const text = value
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/<br\s*\/?>/gi, "")
        .trim();

      return text.length > 0;
    });

export const commonStringValidationWithoutSpace = (value: string) =>
  Yup.string()
    .matches(/^[\u0600-\u06FFA-Za-z]+$/, `${value} should contain only letters`)
    .required(`${value} is required`);

export const commonNumberValidation = (label: string) =>
  Yup.number()
    .typeError(`${label} must be a number`)
    .required(`${label} is required`)
    .min(1, `${label} must be at least 1`);

export const commonNumberAcceptOneDecimalValidation = (value: string) =>
  Yup.string()
    .required(`${value} is required`)
    .matches(
      /^(\d+\.?\d{0,1})$/,
      `${value} should contain only numbers with up to one decimal place`,
    )
    .min(1, `${value} must be at least 1`);

export const commonAlphNumValidation = (value: string) =>
  Yup.string()
    .matches(
      /^(?=.*\p{L})(?=.*\d)[\p{L}\d]+$/u,
      "Must contain both letters and numbers",
    )
    .required(`${value} is required`);

export const commonNumberStringValidation = (value: string) =>
  Yup.string()
    .matches(
      /^(?:\d+\.?\d*|\.\d+)$/,
      `${value} should contain only valid numbers`,
    )
    .required(`${value} is required`);

export const commonNumberStringAcceptOneValidation = (value: string) =>
  Yup.string()
    .matches(/^\d+(\.\d+)?$/, `${value} must be a valid number`)
    .test("is-positive", `${value} must be greater than 0`, (value) => {
      return value !== undefined && Number(value) > 0;
    })
    .required(`${value} is required`);

export const commonDateValidation = (value: string) =>
  Yup.date().required(`${value} is required`);

export const commonPercentageValidation = (value: string) =>
  Yup.string()
    .required(`${value} is required`)
    .matches(
      /^\d{1,2}(\.\d{1,2})?$|^100$/,
      `${value} must be a number between 1 and 100 with up to two decimal places`,
    );

export const commonNumbersCountValidation = (value: string, min: number) =>
  Yup.number()
    .required(`${value} is required`)
    .min(min, `${value} must be at least ${min}`);

export const phoneValidation = () =>
  Yup.string()
    .matches(
      /^[6-9]\d{9}$/,
      "Invalid Indian mobile number (must be 10 digits starting with 6-9)",
    )
    .required("Phone number is required");

export const originalPasswordValidation = (maxLength: number) =>
  Yup.string()
    .required("Please Enter Your Current Password.")
    .max(maxLength, "Current Password must not exceed 100 characters");

export const enquiryCodeValidation = Yup.string()
  .required("Emergency Name is required")
  .min(2, "Emergency Name must be at least 2 characters");

export const descriptionValidation = Yup.string()
  .required("Description is required")
  .min(5, "Description must be at least 5 characters");

export const roleNameValidation = Yup.string()
  .required("Role Name is required")
  .min(2, "Role Name must be at least 2 characters");

export const isRequiredRoleNameValidation = () => {
  return Yup.string();
};

export const isRequiredValidation = Yup.mixed().required(
  `phoneCode is required`,
);

export const validateArray = (value: string) =>
  Yup.array()
    .min(1, `${value} must have at least one item`)
    .required(`${value} is required`);

export const isRequiredEmailValidation = (isEdit: boolean) =>
  Yup.string()
    .email("Invalid email format")
    .when([], {
      is: () => !isEdit,
      then: (schema) => schema.required("Please Enter Your Email."),
      otherwise: (schema) => schema,
    });

export const isRequiredPasswordValidation = (isEdit: boolean) =>
  Yup.string().when([], {
    is: () => !isEdit,
    then: (schema) =>
      schema
        .min(8, "Password must be at least 8 characters")
        .max(28, "Password must not exceed 28 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,28}$/,
          "Password must contain one uppercase, one lowercase, one digit, and one special character.",
        )
        .required("Password is required"),
    otherwise: (schema) => schema.notRequired(),
  });

export const isRequiredEmailValidationForOptionalCases = (
  isEdit: boolean,
): Yup.StringSchema<string | undefined> =>
  Yup.string()
    .matches(
      /^[\p{L}\d._%+-]+@[\p{L}\d.-]+\.[\p{L}]{2,}$/u,
      "Invalid email format",
    )
    .when([], {
      is: () => !isEdit,
      then: (schema) => schema.required("Please Enter Your Email."),
      otherwise: (schema) => schema,
    });

export const commonRequiredStringValidationForOptionalCases = (
  label: string,
  isEdit: boolean,
): Yup.StringSchema<string | undefined> =>
  Yup.string().when([], {
    is: () => !isEdit,
    then: (schema) => schema.required(`${label} is required`),
    otherwise: (schema) => schema.notRequired(),
  });

export const isRequiredConfirmPasswordValidation = (isEdit: boolean) =>
  Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one digit, and one special character.",
    )
    .oneOf([Yup.ref("password")], "Passwords must match")
    .when("password", {
      is: (val: string) => !!val && !isEdit,
      then: (schema) => schema.required("Confirm Password is required"),
      otherwise: (schema) => schema.notRequired(),
    });

export const commonCouponCodeValidation = (value: string) =>
  Yup.string()
    .matches(
      /^(?=.*\p{L})(?=.*\d)[\p{L}\d]+$/u,
      "Must contain both letters and numbers",
    )
    .required(`${value} is required`);

export const commonSequenceValidation = (value: string) =>
  Yup.number()
    .typeError(`${value} must be a number`)
    .required(`${value} is required`)
    .moreThan(0, `${value} must be greater than 0`)
    .lessThan(100000, `${value} must be less than 100000`);

export const commonImageValidation = Yup.mixed()
  .required("category.Category_Image_Is_Required")
  .test("fileType", "category.Only_Image_Files_Are_Allowed", (value) => {
    if (!value) return false;
    if (value instanceof File) {
      return ["image/jpeg", "image/png", "image/jpg", "image/gif"].includes(
        value.type,
      );
    }
    return true;
  });

export const commonPriceValidation = () =>
  Yup.number()
    .min(0.01, "Price must be greater than 0")
    .required("Price is required");

export const brandUrlValidation = Yup.string()
  .trim()
  .url("Invalid URL format")
  .required("Brand_Url_Is_Required")
  .max(500, "Brand URL must be at most 500 characters");

export const redirectionUrlValidation = Yup.string()
  .trim()
  .url("Invalid URL format")
  .required("Redirection URL is required")
  .max(500, "Redirection URL must be at most 500 characters");

export const multipleProductsSelectValidation = Yup.array()
  .min(1, "Please select at least one product")
  .required("At least one product is required");
