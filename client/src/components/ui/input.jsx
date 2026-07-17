import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  ...props
}) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        `
        h-12
        w-full
        rounded-xl
        border
        border-slate-700
        bg-slate-900
        px-4
        text-white
        placeholder:text-slate-500
        transition-all
        duration-200
        outline-none

        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-500/20

        disabled:cursor-not-allowed
        disabled:opacity-50
        `,
        className
      )}
      {...props}
    />
  );
}

export { Input };