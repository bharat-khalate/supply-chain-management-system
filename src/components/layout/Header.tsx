import { HeaderBellIcon, HeaderSearchIcon, HeaderUserIcon } from "@icons/header-icons";
import { useFormik } from "formik";
import InputField from "../common/InputField";
import { ISearchBar } from "@/types";
import { SearchBarConfig } from "@/configs/forms/searchBar";
import { FieldError, InputGroup, Spinner, TextField } from "@heroui/react";
import { SearchBarValidationSchema } from "@/validations";
import { shouldShowError } from "@/utils/validations";
import { InputFieldClass } from "@/utils/tailwindCssClassConstant";
import Card from "../common/AppCard";
import BuyersPage from "@/app/(protected)/buyers/page";
import { BuyersIcon } from "@icons/sidebaricons";
import Link from "next/link";
export default function DashboardHeader() {
  const initialValue: ISearchBar = {
    query: ""
  }
  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: SearchBarValidationSchema,
    onSubmit: async (_value) => {
      console.log(_value)
    }
  })
  const isInvalid = shouldShowError<ISearchBar>(formik);
  return (
    <div className="w-full bg-gray-100 ">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between px-4 sm:px-6 py-3 gap-4 sm:gap-6">
        <div className="relative w-full flex-1 sm:max-w-105 min-w-0">
          <TextField className="w-full">
            <InputGroup className="w-full bg-gray-200 rounded-lg p-1 text-sm text-gray-700 flex items-center min-w-0">

              <InputGroup.Prefix className="shrink-0">
                <HeaderSearchIcon size={18} className="text-gray-500 mr-2" />
              </InputGroup.Prefix>

              <InputGroup.Input
                value={formik.values[SearchBarConfig.query.key]}
                placeholder="Search buyers, regions, or segments..."
                name={SearchBarConfig.query.key}
                aria-label={SearchBarConfig.query.label}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="flex-1 min-w-0 placeholder:text-gray-400 outline-none"
              />

              <InputGroup.Suffix className="shrink-0">
                <Spinner className="size-4 text-blue-500" />
              </InputGroup.Suffix>

            </InputGroup>
          </TextField>
          {isInvalid(SearchBarConfig.query.key) && (
            <p className="text-xs text-gray-400 ms-1 mt-1">
              {formik.errors[SearchBarConfig.query.key]}
            </p>
          )}
          {formik.values.query && (
            <Card className="absolute top-full left-0 mt-2 w-full z-50 shadow-lg border bg-white max-h-60 overflow-y-auto">
              <Card.Content className="p-2 flex-col gap-3">

                <div >
                  <div className="flex flex-row gap-2 text-sm text-gray-500 ">
                    <BuyersIcon />
                    <Link href={"/"} className="text-xs text-blue-500">buyers (100)</Link>
                  </div>
                  <div className="flex flex-col gap-1 text-sm ps-7 text-blue-500 mt-2">
                    <div className="flex flex-row gap-2 cursor-pointer">
                          <span>Global Logistics Partners</span>
                          <span>Enterprise</span>

                    </div>
                    <span>Urban Threads Boutique</span>
                    <span>Summit Tech Solutions</span>
                  </div>
                </div>

              </Card.Content>
            </Card>
          )}

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