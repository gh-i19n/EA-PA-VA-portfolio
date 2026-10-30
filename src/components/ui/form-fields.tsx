import type { ReactNode } from "react";
import { FieldGroup, FieldSet } from "~/components/primitives/field";

/** Keeps complete fields together and pairs them only when their container fits. */
export function FormFields({
  children,
  labelledBy,
}: {
  children: ReactNode;
  labelledBy: string;
}) {
  return (
    <FieldSet className="@container/form-fields min-w-0" aria-labelledby={labelledBy}>
      <FieldGroup className="@min-[30rem]/form-fields:grid-cols-2">
        {children}
      </FieldGroup>
    </FieldSet>
  );
}
