import { useEffect } from "react";
import {
  Controller,
  ControllerProps,
  get,
  useFormContext,
} from "react-hook-form";

type Props = {} & Omit<ControllerProps, "control">;

export const FormItem = ({ ...rest }: Props) => {
  const methods = useFormContext();
  const error = get(methods.formState.errors, rest.name);


  return (
    <>
      <span className={`${error ? "visible" : "hidden"} text-error`}>
        {error ? error.message : ""}
      </span>
      <Controller {...rest} control={methods.control} />
    </>
  );
};
