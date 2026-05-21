"use client";

import { useRef, useState, useCallback } from "react";

export function PreviewFrame({
  src,
  defaultTheme,
  showThemeToggle = true,
}: {
  src: string;
  defaultTheme?: "light" | "dark";
  showThemeToggle?: boolean;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isDark, setIsDark] = useState(defaultTheme === "dark");

  const toggleTheme = useCallback(() => {
    const html = iframeRef.current?.contentDocument?.documentElement;
    if (!html) return;
    html.classList.toggle("dark");
    setIsDark((prev) => !prev);
  }, []);

  // Re-apply theme if iframe reloads
  const handleLoad = useCallback(() => {
    const html = iframeRef.current?.contentDocument?.documentElement;
    if (html && isDark) html.classList.add("dark");
  }, [isDark]);

  return (
    <div className="flex flex-col gap-2 w-full">
      {showThemeToggle && (
        <button
          onClick={toggleTheme}
          className="self-end px-3 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700"
        >
          Toggle {isDark ? "Light" : "Dark"} Mode
        </button>
      )}
      <iframe
        ref={iframeRef}
        src={src}
        onLoad={handleLoad}
        className="w-full h-svh border-0"
        title="Preview frame"
      />
    </div>
  );
}
