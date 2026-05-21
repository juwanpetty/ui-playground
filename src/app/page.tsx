import { PreviewFrame } from "@/components/preview-frame";

export default function HomeIndex() {
  return (
    <div className="grid place-items-center h-svh w-full bg-white dark:bg-black">
      <PreviewFrame
        defaultTheme="dark"
        showThemeToggle={false}
        src="/dark-mode-toast"
      />
    </div>
  );
}
