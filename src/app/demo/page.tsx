"use client";

import { useState } from "react";
import { cn } from "@/libs/cn";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { IconCheck2Outline18, IconTrash2Outline18 } from "nucleo-ui-outline-18";

export default function Page() {
  const [trashToggleChecked, setTrashToggleChecked] = useState(false);

  return (
    <div className="w-full h-svh grid grid-cols-1 place-items-center">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex items-center gap-2">
          <Checkbox
            id="debug"
            name="debug"
            value="debug"
            checked={trashToggleChecked}
            onCheckedChange={(checked) =>
              setTrashToggleChecked(Boolean(checked))
            }
          />
          <label htmlFor="debug" className="text-base font-[450] text-gray-12">
            Debug
          </label>
        </div>
        <div className="flex items-center gap-6">
          <TrashButton />
          <TrashButton
            className={cn(
              "touch-hitbox",
              trashToggleChecked ? "before:bg-orange-a3" : undefined,
            )}
          />
        </div>
      </div>
    </div>
  );
}

function TrashButton({ className }: { className?: string }) {
  return (
    <button
      className={cn(
        "size-8 rounded-[10px] flex items-center justify-center hover:bg-gray-3 transition-colors cursor-pointer",
        className,
      )}
    >
      <IconTrash2Outline18 className="size-5 text-gray-11" />
    </button>
  );
}

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // "peer relative flex size-4 shrink-0 items-center justify-center rounded-sm border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        "size-4.25 ring-2 ring-gray-6 rounded-md cursor-pointer hover:ring-gray-7 transition-colors",
        "data-[state=checked]:bg-blue-9 data-[state=checked]:ring-blue-10",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-4"
      >
        <IconCheck2Outline18 strokeWidth={2} className="text-white" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
