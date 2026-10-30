"use client";

import type { Ref } from "react";
import { Field, FieldLabel } from "~/components/primitives/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/primitives/select";
import { FieldFeedback, fieldDescriptionIds } from "./forms/field-feedback";

type SelectFieldProps = {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  options: readonly { value: string; label: string; disabled?: boolean }[];
  description?: string;
  error?: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  ref?: Ref<HTMLButtonElement>;
};

/** A complete labelled choice, including the styled list and keyboard handling. */
export function SelectField({
  id,
  label,
  name,
  placeholder,
  options,
  description,
  error,
  value,
  defaultValue,
  required,
  disabled,
  onValueChange,
  ref,
}: SelectFieldProps) {
  const unavailable = options.length === 0;
  const help = description ?? (unavailable ? "No options are available." : undefined);
  const isDisabled = disabled || unavailable;

  return (
    <Field className="col-span-full" data-invalid={Boolean(error)} data-disabled={isDisabled || undefined}>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Select
        name={name}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={isDisabled}
        onValueChange={onValueChange}
      >
        <SelectTrigger
          ref={ref}
          id={id}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={fieldDescriptionIds({ id, description: help, error })}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent position="popper" align="start" collisionPadding={16}>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldFeedback id={id} description={help} error={error} />
    </Field>
  );
}
