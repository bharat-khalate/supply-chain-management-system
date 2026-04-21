import InputField from "@/components/common/InputField";
import { SocialMediaLinkFormFieldConstants } from "@/configs/forms";
import { useAppDispatch } from "@/lib/hooks";
import { selectConfigSettings, updateConfigSetting } from "@/redux/slice";
import { ISetting, ISocialMediaLinkSettings } from "@/types/settings";
import { ResetFormButtonClass, SubmitButtonClass } from "@/utils/tailwindCssClassConstant";
import { SocialMediaLinkFormSchema } from "@/validations";
import { Button } from "@heroui/react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import AppDotLoader from "../../../../../components/common/NavigationDotloader";
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
  return (
    <form className="flex flex-col gap-y-6">
      <InputField formik={formik} fieldConstant={SocialMediaLinkFormFieldConstants.twitterLink} />
      <InputField formik={formik} fieldConstant={SocialMediaLinkFormFieldConstants.instagramLink} />
      <InputField formik={formik} fieldConstant={SocialMediaLinkFormFieldConstants.facebookLink} />
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
