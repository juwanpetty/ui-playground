"use client";

import { cn } from "@/libs/cn";
import { LucideChevronRight, LucideX } from "lucide-react";

export default function Page() {
  return (
    <div className="grid place-items-center h-svh w-full dark">
      <DarkModeToast />
    </div>
  );
}

export function DarkModeToast() {
  return (
    <div className="p-6 relative rounded-2xl items-start border border-gray-4 bg-gray-2 flex flex-col gap-4 w-full max-w-145">
      <div className="space-y-2">
        <h3 className="text-base text-gray-12">
          New Feature: Dark Mode Support
        </h3>
        <p className="w-full max-w-87 text-sm font-medium text-gray-11">
          We’ve added a beautiful dark mode to improve your experience during
          those late-night sessions.
        </p>
      </div>

      <button
        className={cn(
          "h-10 px-3.5 text-sm font-medium text-gray-12 flex items-center gap-1 rounded-xl cursor-pointer bg-gray-4 border border-gray-6",
          "[&_svg]:size-4 [&_svg]:text-gray-11",
        )}
      >
        <span className="px-0.5">See What&apos;s New</span>
        <LucideChevronRight />
      </button>

      <div className="absolute top-6 right-6 flex items-center justify-content">
        <LucideX className="size-5 text-gray-9" />
      </div>
    </div>
  );
}
