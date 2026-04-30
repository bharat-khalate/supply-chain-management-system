import { AppForm } from "@/components/common/AppForm";
import { TextInputField, AppSelectInputField, RadioInputField, ResetFormButton, SaveFormButton } from "@/components/common/InputField";
import { StatusOptions } from "@/components/ui/Common";
import { BuyerFormConfig, BUYER_TYPES } from "@/configs/forms";
import { IBuyer, IBuyerFields } from "@/types";
import { FormButtonDivClass, ResetFormButtonClass, SubmitButtonClass } from "@/utils/tailwindCssClassConstant";
import { BuyerSchema } from "@/validations";
import { Card } from "@heroui/react";
import { BasicInformationIcon, ProductionSpecificationIcon, ProductStatusIcon, ConfigurationIcon } from "@icons/form-icons";
export default function BuyerForm({ defaultValues, onSubmit }: { defaultValues: IBuyer | IBuyerFields, onSubmit: (_values: IBuyer | IBuyerFields) => Promise<void> }) {
    return (
        <AppForm formikProps={{
            initialValues: defaultValues,
            validationSchema: BuyerSchema,
            onSubmit,
            enableReinitialize: true
        }} className="space-y-6 ">
            <Card>
                <Card.Header className="p-3">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold">
                            <BasicInformationIcon />
                        </div>
                        <span>Basic Information {"id" in defaultValues && (
                            <span className="text-gray-400 italic text-sm mb-1">{`#${defaultValues.id}`}</span>
                        )}</span>
                    </div>
                </Card.Header>
                <Card.Content className="space-y-6  p-6">
                    <div className="flex flex-row w-full gap-2">
                        <TextInputField fieldConstant={BuyerFormConfig.buyerName} />
                        <TextInputField fieldConstant={BuyerFormConfig.contactPerson} />
                    </div>
                    <TextInputField fieldConstant={BuyerFormConfig.buyerAddress} />
                </Card.Content>
            </Card>
            <Card>
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
                        <AppSelectInputField options={BUYER_TYPES} fieldConstant={BuyerFormConfig.buyerType} />
                        <TextInputField fieldConstant={BuyerFormConfig.phone} />
                        <TextInputField fieldConstant={BuyerFormConfig.email} />
                    </div>
                </Card.Content>
            </Card>
            <div className="flex flex-row gap-3">
                <Card className="w-1/2">
                    <Card.Header className="p-3">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold">
                                <ProductStatusIcon />
                            </div>
                            <span>Product Status</span>
                        </div>
                    </Card.Header>
                    <Card.Content className="space-y-6  p-6">
                        <div className="flex flex-col sm:flex-row gap-2">
                            <RadioInputField options={StatusOptions} fieldConstants={BuyerFormConfig.status}></RadioInputField>
                        </div>
                    </Card.Content>
                </Card>
                <Card className="w-1/2">
                    <Card.Header className="p-3">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-100 text-blue-700 font-semibold">
                                <ConfigurationIcon />
                            </div>
                            <span>Configuration</span>
                        </div>
                    </Card.Header>
                    <Card.Content className="space-y-6  p-6">
                        <TextInputField fieldConstant={BuyerFormConfig.requirementCategory} />
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
                    Save Buyer
                </SaveFormButton>
            </div>
        </AppForm>
    )
}