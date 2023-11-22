import React from "react";
import {
  FormProvider,
  useForm,
} from "react-hook-form";
import { Button } from "../Button";
interface Props {
  onSubmit: (data: any) => void;
  isLoading: boolean;
  submitText?: string;
  children: React.ReactNode;
  extraAction?: React.ReactNode;
}

export const Form = ({
  onSubmit,
  isLoading,
  submitText = "TEXT",
  children,
  extraAction,
}: Props) => {

  const methods = useForm({})

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col">{children}</div>
        <div className="flex flex-row mt-4 justify-between">
          <Button loading={isLoading} type="submit" variant="primary">
            {submitText}
          </Button>
          {extraAction && extraAction}
        </div>
      </form>
    </FormProvider>
  );
};
