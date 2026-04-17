import { defaultPaginationConfig } from "@/configs/feature/pagination.config";
export const parseSearchParams = (
  searchParams: URLSearchParams
): Record<string, string | string[]> => {
  const paramsObj: Record<string, string | string[]> = {};

  searchParams.forEach((value, key) => {
    paramsObj[key] = value.includes(",")
      ? value.split(",").map(v => v.trim()).filter(Boolean)
      : value;
  });

  return paramsObj;
};

export const buildSearchParams = (
  values: Record<string, string | string[]>
): string => {
  const params = new URLSearchParams();

  Object.entries(values).forEach(([key, value]) => {
    if (Array.isArray(value) && value.length > 0) {
      params.set(key, value.join(","));
    } else if (typeof value === "string" && value.trim() !== "") {
      params.set(key, value);
    }
  });

  return params.toString();
};
export const getSanitizedPagination = (params: Record<string, string | string[]>) => {
  const { page, limit, ...rest } = params;
  const rawPage = Array.isArray(page) ? page[0] : page;
  const rawLimit = Array.isArray(limit) ? limit[0] : limit;
  let safePage = parseInt(rawPage || "", 10);
  let safeLimit = parseInt(rawLimit || "", 10);
  if (isNaN(safePage) || safePage < 1) {
    safePage = defaultPaginationConfig.page;
  }
  if (isNaN(safeLimit) || safeLimit < 1) {
    safeLimit = defaultPaginationConfig.limit;
  } else if (safeLimit > 100) {
    safeLimit = 100;
  }
  return {
    ...rest,
    page: safePage.toString(),
    limit: safeLimit.toString(),
  };
};