import { ComponentProps } from "react";
import { IconCirclePlusFill18 } from "nucleo-ui-fill-18";
import { cn } from "@/libs/cn";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";

export default function Page() {
  return (
    <div className="grid place-items-center h-svh w-full">
      <Dividers />
    </div>
  );
}

function Dividers() {
  return (
    <div className="max-w-sm w-full flex flex-col gap-10">
      <div className="flex gap-2 items-center">
        <div aria-hidden="true" className="w-full border-t border-gray-4 " />
        <div className="relative flex justify-center">
          <IconCirclePlusFill18 className="size-4 text-gray-9" />
        </div>
        <div aria-hidden="true" className="w-full border-t border-gray-4 " />
      </div>

      <div className="flex gap-2 items-center">
        <div aria-hidden="true" className="w-full border-t border-gray-4 " />
        <div className="relative flex justify-center">
          <span className="px-1 text-sm font-medium">Label</span>
        </div>
        <div aria-hidden="true" className="w-full border-t border-gray-4 " />
      </div>

      <div className="flex gap-2 items-center">
        <div aria-hidden="true" className="w-full border-t border-gray-4 " />
        <div className="relative flex justify-center">
          <Button>
            <IconCirclePlusFill18 />
            <span className="px-1 text-nowrap">New Page</span>
          </Button>
        </div>
        <div aria-hidden="true" className="w-full border-t border-gray-4 " />
      </div>

      <div className="flex gap-2 items-center">
        <div aria-hidden="true" className="w-full border-t border-gray-4 " />
        <div className="relative flex justify-center">
          <div className="flex items-center rounded-[0.625rem] shadow-xs shadow-gray-4 ring-1 ring-gray-4">
            <button className="cursor-pointer size-8 flex items-center justify-center rounded-[0.625rem] border-r border-gray-4 rounded-r-none text-gray-9">
              <LucideChevronLeft />
              <span className="sr-only">New Page</span>
            </button>
            <button className="size-8 flex cursor-pointer items-center justify-center rounded-[0.625rem] rounded-l-none text-gray-9">
              <LucideChevronRight />
              <span className="sr-only">New Page</span>
            </button>
          </div>
        </div>
        <div aria-hidden="true" className="w-full border-t border-gray-4 " />
      </div>
    </div>
  );
}

type ButtonProps = ComponentProps<"button">;

function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "h-8 px-2.5 text-sm font-medium text-gray-12 flex items-center gap-1 rounded-[0.625rem] cursor-pointer transition-colors",
        "[&_svg]:size-4 [&_svg]:text-gray-9",
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
