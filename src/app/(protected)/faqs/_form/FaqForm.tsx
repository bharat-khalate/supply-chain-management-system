import { AppForm } from "@/components/common/AppForm";
import { AppSelectInputField, RadioInputField, ResetFormButton, SaveFormButton, TextInputField } from "@/components/common/InputField";
import { FAQStatusOptions } from "@/components/ui/Common";
import { FaqConfig } from "@/configs/forms";
import { FAQ_CATEGORY } from "@/configs/forms/faq.cnfig";
import { IFaqFormProps, TSelectOption } from "@/types/components";
import { FormButtonDivClass, ResetFormButtonClass, SubmitButtonClass } from "@/utils/tailwindCssClassConstant";
import { FaqSchema } from "@/validations";
import { Card } from "@heroui/react";
import { BasicInformationIcon, ProductionSpecificationIcon, ProductStatusIcon } from "@icons/form-icons";
export default function FaqForm({ id, initialValues, onSubmit }: IFaqFormProps) {
    return (
        <AppForm formikProps={{ initialValues, onSubmit, enableReinitialize: true, validationSchema: FaqSchema }} className="space-y-6 ">
            <Card>
                <Card.Header className="p-3">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold">
                            <BasicInformationIcon />
                        </div>
                        <span>Basic Information {id && (
                            <span className="text-gray-400 italic text-sm mb-1">{`#${id}`}</span>
                        )}</span>
                    </div>
                </Card.Header>
                <Card.Content className="space-y-6  p-6">
                    <div className="flex flex-row w-full gap-2">
                        <TextInputField fieldConstant={FaqConfig.answer} />
                        <TextInputField fieldConstant={FaqConfig.question} />
                    </div>
                    <TextInputField fieldConstant={FaqConfig.sequence} />
                </Card.Content>
            </Card>

            <div className="flex flex-row gap-3">
                <Card className="w-1/2">
                    <Card.Header className="p-3">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold">
                                <ProductionSpecificationIcon />
                            </div>
                            <span>Production Specifications</span>
                        </div>
                    </Card.Header>
                    <Card.Content className="space-y-6  p-6">
                        <div className="flex flex-row gap-2">
                            {/* Fixed Select Placeholder & Trigger styling */}
                            <AppSelectInputField options={FAQ_CATEGORY as unknown as TSelectOption[]} fieldConstant={FaqConfig.category} selectProps={{ className: "!basis-1/2" }} />
                            <TextInputField fieldConstant={FaqConfig.createdOn} textFieldProps={{ className: "!basis-1/2" }} />
                        </div>
                    </Card.Content>
                </Card>

                <Card className="w-1/2">
                    <Card.Header className="p-3">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold">
                                <ProductStatusIcon />
                            </div>
                            <span>FAQ Status</span>
                        </div>
                    </Card.Header>
                    <Card.Content className="space-y-6  p-6">
                        <div className="flex flex-col sm:flex-row gap-2">
                            <RadioInputField options={FAQStatusOptions} fieldConstants={FaqConfig.status}></RadioInputField>

                        </div>
                    </Card.Content>
                </Card>

            </div>


            <div className={FormButtonDivClass}>
                <ResetFormButton
                    variant="ghost"
                    className={ResetFormButtonClass}
                >
                    Reset
                </ResetFormButton>
                <SaveFormButton
                    className={SubmitButtonClass}
                >
                    Save FAQ
                </SaveFormButton>
            </div>
        </AppForm>
    )
}