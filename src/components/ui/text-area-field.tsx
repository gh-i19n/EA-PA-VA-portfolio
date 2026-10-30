"use client";

import type { ComponentProps } from "react";
import { Field, FieldLabel } from "~/components/primitives/field";
import { Textarea } from "~/components/primitives/textarea";
import { FieldFeedback, fieldDescriptionIds } from "./forms/field-feedback";

type TextAreaFieldProps = Omit<ComponentProps<"textarea">, "id" | "className" | "children"> & {
  id: string;
  label: string;
  description?: string;
  error?: string;
};

/** A complete multi-line field; the composition owns its control and feedback. */
export function TextAreaField({
  id,
  label,
  description,
  error,
  disabled,
  "aria-describedby": additional,
  ...props
}: TextAreaFieldProps) {
  return (
    <Field className="col-span-full" data-invalid={Boolean(error)} data-disabled={disabled || undefined}>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Textarea
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
