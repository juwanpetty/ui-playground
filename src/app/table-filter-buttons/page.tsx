import { ComponentProps, ReactNode } from "react";
import { cn } from "@/libs/cn";
import {
  IconBarsFilterFill18,
  IconFilterFill18,
  IconGridCircleFill18,
} from "nucleo-ui-fill-18";
import {
  IconMagnifierOutline18,
  IconTableColsOutline18,
} from "nucleo-ui-outline-18";

export default function Page() {
  return (
    <div className="grid place-items-center h-svh w-full">
      <TableFilterButtons />
    </div>
  );
}

function TableFilterButtons() {
  return (
    <div className="flex items-center gap-x-2 gap-y-3 flex-wrap justify-center">
      <Button>
        <IconGridCircleFill18 />
        <span className="px-0.5 text-gray-11">
          Group by <span className="text-gray-12">Status</span>
        </span>
      </Button>

      <Button>
        <IconBarsFilterFill18 />
        <span className="px-0.5">Sort</span>
      </Button>

      <Button>
        <IconFilterFill18 />
        <span className="px-0.5">Filter</span>
        <Badge>2</Badge>
      </Button>

      <Button>
        <IconTableColsOutline18 />
        <span className="px-0.5">Columns</span>
      </Button>

      <Button className="size-8 p-0 justify-center" aria-label="Columns">
        <IconMagnifierOutline18 />
      </Button>
    </div>
  );
}

type ButtonProps = ComponentProps<"button">;

function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "h-8 px-2.5 text-sm font-medium text-gray-12 flex items-center gap-1 rounded-[0.625rem] cursor-pointer transition-colors",
        "[&_svg]:size-4 [&_svg]:text-gray-11",
        "shadow-xs shadow-gray-4 ring-1 ring-gray-4",
        "hover:bg-gray-2 hover:ring-gray-5",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs font-medium flex items-center px-1.5 border bg-gray-3 border-gray-4 rounded-md text-gray-11">
      {children}
    </span>
  );
}
