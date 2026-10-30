import * as React from "react"
import { cn } from "~/shared/ui/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-[130px] w-full min-w-0 resize-y rounded-control border border-rule bg-paper/50 px-3.5 py-3 text-support text-ink outline-offset-4 placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-ledger disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:outline-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
