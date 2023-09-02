import React from "react";
import { UseFormRegister } from "react-hook-form";
import { ContactFormValues } from "./ContactForm";

type InputFieldProps = {
  label: string;
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  formField: "firstName" | "lastName" | "email" | "phoneNumber" | "message";
  register: UseFormRegister<ContactFormValues>;
};

function InputField(props: InputFieldProps) {
  const { label, minLength, maxLength, register, pattern, formField } = props;

  return (
    <div>
      <label className="text-gray-600 font-semibold uppercase">{label}</label>
      <input
        className="bg-gray-100 text-gray-900 p-3 rounded-lg w-full outline-none"
        placeholder={label}
        {...register(formField, {
          required: `${label} is required.`,
          pattern: pattern,
          minLength: minLength,
          maxLength: maxLength,
        })}
      />
    </div>
  );
}

export default InputField;
