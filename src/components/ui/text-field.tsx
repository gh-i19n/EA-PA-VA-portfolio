"use client";

import type { ComponentProps } from "react";
import { Field, FieldLabel } from "~/components/primitives/field";
import { Input } from "~/components/primitives/input";
import { FieldFeedback, fieldDescriptionIds } from "./forms/field-feedback";

type TextFieldProps = Omit<ComponentProps<"input">, "id" | "className" | "size" | "children"> & {
  id: string;
  label: string;
  description?: string;
  error?: string;
};

/** A labelled text control with shared help, validation and disabled states. */
export function TextField({
  id,
  label,
  description,
  error,
  disabled,
  "aria-describedby": additional,
  ...props
}: TextFieldProps) {
  return (
    <Field data-invalid={Boolean(error)} data-disabled={disabled || undefined}>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input
        {...props}
        id={id}
        disabled={disabled}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={fieldDescriptionIds({ id, description, error, additional })}
      />
      <FieldFeedback id={id} description={description} error={error} />
    </Field>
  );
}
