import { shouldShowError } from "@/utils/validations";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { useFormik } from "formik";
import AppDotLoader from "../../../../../components/common/NavigationDotloader";
import { ISocialMediaLinkSettings } from "@/types/settings";
import { SocialMediaLinkFormFieldConstants } from "@/configs/forms";
import { SocialMediaLinkFormSchema } from "@/validations";
export default function SocialMediaLinkForm(): React.ReactNode {
  const initialValues: ISocialMediaLinkSettings = {
    twitterLink: "",
    instagramLink: "",
    facebookLink: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SocialMediaLinkFormSchema,
    onSubmit: async (_values) => {
      console.log(_values);
    },
  });
  const inputClassName = `flex  w-full rounded-lg border border-gray-200 bg-gray-100 rounded-xs px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm transition-colors focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none data-[invalid=true]:border-red-500 data-[invalid=true]:bg-red-50 data-[invalid=true]:focus:ring-red-500/20 disabled:cursor-not-allowed disabled:opacity-60`;
  const inputErrorMessageClass = "text-[0.8rem] font-medium text-destructive";
  const labelInputClass = "text-sm font-medium leading-none";
  const isInvalid = shouldShowError<ISocialMediaLinkSettings>(formik);
  return (
    <form className="flex flex-col gap-y-6">
      <TextField
        isRequired
        isInvalid={isInvalid(
          SocialMediaLinkFormFieldConstants.twitterLink.key,
        )}
      >
        <Label className={labelInputClass}>
          {SocialMediaLinkFormFieldConstants.twitterLink.label}
        </Label>
        <Input
          className={inputClassName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={
            formik.values[SocialMediaLinkFormFieldConstants.twitterLink.key]
          }
          name={SocialMediaLinkFormFieldConstants.twitterLink.key}
          placeholder="Enter the Instagram profile url"
          aria-label={SocialMediaLinkFormFieldConstants.twitterLink.label}
        />
        {isInvalid(
          SocialMediaLinkFormFieldConstants.twitterLink.key,
        ) && (
          <FieldError className={inputErrorMessageClass}>
            {formik.errors[SocialMediaLinkFormFieldConstants.twitterLink.key]}
          </FieldError>
        )}
      </TextField>
      <TextField
        isRequired
        isInvalid={isInvalid(
          SocialMediaLinkFormFieldConstants.instagramLink.key,
        )}
      >
        <Label className={labelInputClass}>
          {SocialMediaLinkFormFieldConstants.instagramLink.label}
        </Label>
        <Input
          className={inputClassName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={
            formik.values[SocialMediaLinkFormFieldConstants.instagramLink.key]
          }
          name={SocialMediaLinkFormFieldConstants.instagramLink.key}
          placeholder="Enter the Instagram profile url"
          aria-label={SocialMediaLinkFormFieldConstants.instagramLink.label}
        />
        {isInvalid(
          SocialMediaLinkFormFieldConstants.instagramLink.key,
        ) && (
          <FieldError className={inputErrorMessageClass}>
            {formik.errors[SocialMediaLinkFormFieldConstants.instagramLink.key]}
          </FieldError>
        )}
      </TextField>
      <TextField
        isRequired
        isInvalid={isInvalid(
          SocialMediaLinkFormFieldConstants.facebookLink.key,
        )}
      >
        <Label className={labelInputClass}>
          {SocialMediaLinkFormFieldConstants.facebookLink.label}
        </Label>
        <Input
          className={inputClassName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={
            formik.values[SocialMediaLinkFormFieldConstants.facebookLink.key]
          }
          name={SocialMediaLinkFormFieldConstants.facebookLink.key}
          placeholder="Enter the Facebook profile url"
          aria-label={SocialMediaLinkFormFieldConstants.facebookLink.label}
        />
        {isInvalid(
          SocialMediaLinkFormFieldConstants.facebookLink.key,
        ) && (
          <FieldError className={inputErrorMessageClass}>
            {formik.errors[SocialMediaLinkFormFieldConstants.facebookLink.key]}
          </FieldError>
        )}
      </TextField>
      <div className="flex justify-end gap-5 mt-5">
        <Button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 text-sm font-medium rounded-md shadow hover:bg-blue-950"
          isPending={formik.isSubmitting}
        >
          {formik.isSubmitting ? <AppDotLoader /> : "Save Setting"}
        </Button>
        <Button
          variant="ghost"
          onPress={() => formik.resetForm()}
          className="px-4 py-2 text-sm font-medium rounded-md border border-blue-800 hover:bg-accent"
        >
          Reset
        </Button>
      </div>
    </form>
  );
}
