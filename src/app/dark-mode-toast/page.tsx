import { PreviewFrame } from "@/components/preview-frame";

export default function Page() {
  return (
    <PreviewFrame
      showThemeToggle={false}
      defaultTheme="dark"
      src="/dark-mode-toast/component"
    />
  );
}
