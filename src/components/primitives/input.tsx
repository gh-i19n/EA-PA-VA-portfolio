import * as React from "react"
import { cn } from "~/shared/ui/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "min-h-[50px] w-full min-w-0 rounded-control border border-rule bg-paper/50 px-3.5 py-3 text-support text-ink outline-offset-4 file:mr-3 file:border-0 file:bg-transparent file:text-label file:font-medium placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-ledger disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:outline-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
