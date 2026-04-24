import { SearchBarConfig } from "@/configs/forms/searchBar";
import { ISearchBar } from "@/types";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { shouldShowError } from "@/utils/validations";
import { SearchBarValidationSchema } from "@/validations";
import { InputGroup, Spinner, TextField } from "@heroui/react";
import { HeaderBellIcon, HeaderSearchIcon, HeaderUserIcon } from "@icons/header-icons";
import { BuyersIcon, SalesEnquiryIcon, SamplingIcon, VendorsIcon } from "@icons/sidebaricons";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import Card from "../common/AppCard";
import { X } from "lucide-react";
import { useAppDispatch, useGlobalRedirect } from "@/lib/hooks";
import { usePathname, useSearchParams } from "next/navigation";
import { buildSearchParams, getSearchItemRoute, parseSearchParams } from "@/utils/helpers/queryParams.helper";
import { useSelector } from "react-redux";
import { getSearchResult, selectSearchData, selectSearchDataLoading } from "@/redux/slice";
import AppSpinner from "../common/Spinner";
export default function DashboardHeader() {
  const searchResult = useSelector(selectSearchData);
  const searchLoading = useSelector(selectSearchDataLoading);
  const dispatch = useAppDispatch();
  const initialValue: ISearchBar = {
    query: ""
  }
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { navigate, isRedirecting } = useGlobalRedirect();
  const searchParams = useSearchParams();
  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: SearchBarValidationSchema,
    validateOnChange: true,
    onSubmit: async (_value) => {
      console.log(_value)
    }
  })
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const isInvalid = shouldShowError<ISearchBar>(formik);
  const debounced = useDebounce<ISearchBar>(formik.values, 300);
  const pathName = usePathname();
  useEffect(() => {
    if (Object.keys(formik.errors).length > 0) return;
    if (!debounced.query || debounced.query.length < 2) return;
    if (pathName.startsWith("/search")) {
      const params = parseSearchParams(searchParams);
      params["query"] = debounced.query;
      const newParam = buildSearchParams(params);
      navigate({ href: `${pathName}?${newParam}` });
    } else {
      dispatch(getSearchResult({ query: debounced.query }));
    }
  }, [debounced])
  const SEARCH_UI_CONFIG = {
    buyer: { title: "Buyers", Icon: BuyersIcon, key: "buyerName", id: "id" },
    vendor: { title: "Vendors", Icon: VendorsIcon, key: "name", id: "id" },
    enquiry: { title: "Sales Enquiry", Icon: SalesEnquiryIcon, key: "customerName", id: "enquiryId" },
    order: { title: "Orders", Icon: SamplingIcon, key: "customerName", id: "orderId" },
    sample: { title: "Sampling", Icon: SamplingIcon, key: "customerName", id: "sampleId" },
  };
  return (
    <div className="w-full bg-gray-100 ">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between px-4 sm:px-6 py-3 gap-4 sm:gap-6">
        <div ref={wrapperRef} className=" w-full flex-1 sm:max-w-105 min-w-0 relative">
          <TextField className="w-full">
            <InputGroup className="w-full bg-gray-200 rounded-sm p-1 text-sm text-gray-700 flex items-center min-w-0">
              <InputGroup.Prefix className="shrink-0">
                <HeaderSearchIcon size={18} className="text-gray-500 mr-2" />
              </InputGroup.Prefix>
              <InputGroup.Input
                value={formik.values[SearchBarConfig.query.key]}
                placeholder="Search buyers, regions, or segments..."
                name={SearchBarConfig.query.key}
                aria-label={SearchBarConfig.query.label}
                onChange={(e) => {
                  formik.handleBlur(e)
                  formik.handleChange(e)
                  setIsOpen(true);
                }}
                onBlur={formik.handleBlur}
                className="flex-1 min-w-0 placeholder:text-gray-400 outline-none"
              />
              {searchLoading && (
                <InputGroup.Suffix className="shrink-0">
                  <Spinner className="size-4 text-blue-500" />
                </InputGroup.Suffix>
              )}
              {formik.values.query.length > 0 && (
                <InputGroup.Suffix className="shrink-0">
                  <X className="text-red-400 cursor-pointer hover:text-red-500  " onClick={() => formik.resetForm()} />
                </InputGroup.Suffix>
              )}
            </InputGroup>
          </TextField>
          {isInvalid(SearchBarConfig.query.key) && (
            <p className="text-xs text-gray-400 ms-1 mt-1">
              {formik.errors[SearchBarConfig.query.key]}
            </p>
          )}
          {formik.values.query && isOpen && !pathName.startsWith("/search") && !isInvalid(SearchBarConfig.query.key) &&
            (<Card className="absolute top-full left-0 mt-2 w-full z-50 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
              {searchLoading ? <AppSpinner /> : (
                <Card.Content className="max-h-80 overflow-y-auto py-2">
                  {searchResult && searchResult.map((section) => {
                    const config = SEARCH_UI_CONFIG[section.type];
                    if (!config) return null;
                    const { title, Icon, key, id } = config;
                    return (
                      <div key={section.type} className="border-b last:border-none border-gray-100">
                        <div className="flex items-center justify-between px-4 py-2">
                          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            <Icon />
                            <span>
                              {title} ({section.result.pagination.totalCount})
                            </span>
                          </div>
                          <button
                            className="text-xs text-blue-500 hover:text-blue-600 hover:underline transition"
                            onClick={() => {
                              navigate({
                                href: `/search?category=${section.type}&query=${debounced.query}`
                              });
                            }}
                          >
                            View all
                          </button>
                        </div>
                        <div className="flex flex-col">
                          {section.result.data.slice(0, 3).map((item: any) => (
                            <div
                              key={item[id]}
                              className="group flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-blue-50 transition"
                              onClick={() => navigate({ href: getSearchItemRoute(section.type, item) })}
                            >
                              <span className="text-sm text-gray-800 group-hover:text-blue-600 transition">
                                {item[key]}
                              </span>
                              <span className="text-xs text-gray-400 truncate max-w-[120px] group-hover:text-blue-400 transition">
                                {item[id]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </Card.Content>
              )}
            </Card>)
          }
        </div>
        <div className="flex items-center justify-end w-full sm:w-auto shrink-0 gap-4 sm:gap-6">
          <HeaderBellIcon className="text-gray-600 cursor-pointer shrink-0" />
          <div className="h-6 w-px bg-gray-300" />
          <div className="flex items-center gap-3">
            <div className="hidden lg:block text-right">
              <p className="text-sm font-medium">Portfolio Manager</p>
              <p className="text-xs text-gray-500">Global Operations</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <HeaderUserIcon size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}