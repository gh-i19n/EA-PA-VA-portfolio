import { FieldDescription, FieldError } from "~/components/primitives/field";

type FieldFeedbackProps = {
  id: string;
  description?: string;
  error?: string;
};

export function fieldDescriptionIds({
  id,
  description,
  error,
  additional,
}: FieldFeedbackProps & { additional?: string }) {
  return [
    additional,
    description && `${id}-description`,
    error && `${id}-error`,
  ].filter(Boolean).join(" ") || undefined;
}

/** Shared help and validation messages, linked to their control by ID. */
export function FieldFeedback({ id, description, error }: FieldFeedbackProps) {
  return (
    <>
      {description && (
        <FieldDescription id={`${id}-description`}>{description}</FieldDescription>
      )}
      {error && <FieldError id={`${id}-error`}>{error}</FieldError>}
    </>
  );
}
