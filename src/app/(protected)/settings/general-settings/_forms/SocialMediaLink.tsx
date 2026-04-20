import { shouldShowError } from "@/utils/validations";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { useFormik } from "formik";
import AppDotLoader from "../../../../../components/common/NavigationDotloader";
import { ISetting, ISocialMediaLinkSettings } from "@/types/settings";
import { SocialMediaLinkFormFieldConstants } from "@/configs/forms";
import { SocialMediaLinkFormSchema } from "@/validations";
import { useSelector } from "react-redux";
import { selectConfigSettings, updateConfigSetting } from "@/redux/slice";
import { useAppDispatch } from "@/lib/hooks";
import { InputFieldClass, InputFieldErrorMessageClass, InputLabelClass, ResetFormButtonClass, SubmitButtonClass } from "@/utils/tailwindCssClassConstant";
export default function SocialMediaLinkForm(): React.ReactNode {
  const setting: ISetting | null = useSelector(selectConfigSettings);
  const { twitterLink, instagramLink, facebookLink } = setting || {
    twitterLink: "",
    instagramLink: "",
    facebookLink: "",
  };
  const initialValues: ISocialMediaLinkSettings = {
    twitterLink,
    instagramLink,
    facebookLink,
  };
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SocialMediaLinkFormSchema,
    onSubmit: async (_values) => {
      console.log(_values);
      dispatch(updateConfigSetting({ ...setting, ..._values } as ISetting))
    },
  });
  const isInvalid = shouldShowError<ISocialMediaLinkSettings>(formik);
  return (
    <form className="flex flex-col gap-y-6">
      <TextField
        isRequired
        isInvalid={isInvalid(
          SocialMediaLinkFormFieldConstants.twitterLink.key,
        )}
      >
        <Label className={InputLabelClass}>
          {SocialMediaLinkFormFieldConstants.twitterLink.label}
        </Label>
        <Input
          className={InputFieldClass}
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
            <FieldError className={InputFieldErrorMessageClass}>
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
        <Label className={InputLabelClass}>
          {SocialMediaLinkFormFieldConstants.instagramLink.label}
        </Label>
        <Input
          className={InputFieldClass}
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
            <FieldError className={InputFieldErrorMessageClass}>
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
        <Label className={InputLabelClass}>
          {SocialMediaLinkFormFieldConstants.facebookLink.label}
        </Label>
        <Input
          className={InputFieldClass}
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
            <FieldError className={InputFieldErrorMessageClass}>
              {formik.errors[SocialMediaLinkFormFieldConstants.facebookLink.key]}
            </FieldError>
          )}
      </TextField>
      <div className="flex justify-end gap-5 mt-5">
        <Button
          type="submit"
          className={SubmitButtonClass}
          isPending={formik.isSubmitting}
        >
          {formik.isSubmitting ? <AppDotLoader /> : "Save Setting"}
        </Button>
        <Button
          variant="ghost"
          onPress={() => formik.resetForm()}
          className={ResetFormButtonClass}
        >
          Reset
        </Button>
      </div>
    </form>
  );
}
