import { cn } from "@/libs/cn";
import Image from "next/image";

const IMAGES = [
  "/assets/images/progressive-blur-gallery/image1.jpg",
  "/assets/images/progressive-blur-gallery/image2.jpg",
  "/assets/images/progressive-blur-gallery/image3.jpg",
  "/assets/images/progressive-blur-gallery/image4.jpg",
  "/assets/images/progressive-blur-gallery/image5.jpg",
  "/assets/images/progressive-blur-gallery/image6.jpg",
  "/assets/images/progressive-blur-gallery/image7.jpg",
  "/assets/images/progressive-blur-gallery/image8.jpg",
  "/assets/images/progressive-blur-gallery/image9.jpg",
  "/assets/images/progressive-blur-gallery/image10.jpg",
  "/assets/images/progressive-blur-gallery/image11.jpg",
  "/assets/images/progressive-blur-gallery/image12.jpg",
  "/assets/images/progressive-blur-gallery/image13.jpg",
  "/assets/images/progressive-blur-gallery/image14.jpg",
  "/assets/images/progressive-blur-gallery/image15.jpg",
  "/assets/images/progressive-blur-gallery/image16.jpg",
];

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <ProgressiveBlur />
      <div className="px-4 pt-32 pb-24 sm:px-6">
        <div className="w-full max-w-5xl mx-auto">
          <ProgressiveBlurGallery />
        </div>
      </div>
    </div>
  );
}

function ProgressiveBlurGallery() {
  return (
    <div className="w-full columns-1 gap-6 sm:columns-2 md:columns-3">
      {IMAGES.map((image, index) => (
        <ImageWrapper key={index} src={image} />
      ))}
    </div>
  );
}

function ImageWrapper({ src }: { src: string }) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl bg-gray-2 relative flex items-center justify-center mb-6 break-inside-avoid overflow-hidden",
      )}
    >
      <Image
        src={src}
        alt={`Image for ${src}`}
        width={0}
        height={0}
        sizes="100vw"
        className="object-contain"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl inset-ring-1 inset-ring-black/10 dark:inset-ring-white/10" />
    </div>
  );
}

interface BlurLayerProps {
  blur: number;
  maskStart: number;
  maskEnd: number;
  zIndex: number;
}

function BlurLayer({ blur, maskStart, maskEnd, zIndex }: BlurLayerProps) {
  return (
    <div
      className="absolute inset-0 h-full w-full rounded-none"
      style={{
        backdropFilter: `blur(${blur}px)`,
        maskImage: `linear-gradient(rgba(0,0,0,0) ${maskStart}%, rgb(0,0,0) ${maskEnd}%)`,
        zIndex,
      }}
    />
  );
}

const LAYERS = [
  { blur: 0, maskStart: 0, maskEnd: 20 },
  { blur: 0.411523, maskStart: 10, maskEnd: 30 },
  { blur: 1.64609, maskStart: 20, maskEnd: 40 },
  { blur: 3.7037, maskStart: 30, maskEnd: 50 },
  { blur: 6.58436, maskStart: 40, maskEnd: 60 },
  { blur: 10.2881, maskStart: 50, maskEnd: 70 },
  { blur: 14.8148, maskStart: 60, maskEnd: 80 },
  { blur: 20.1646, maskStart: 70, maskEnd: 90 },
  { blur: 26.3374, maskStart: 80, maskEnd: 100 },
  { blur: 33.3333, maskStart: 90, maskEnd: 100 },
];

function ProgressiveBlur() {
  return (
    <div className="bottom-0 h-30 left-0 fixed right-0 z-1">
      <div className="pointer-events-none relative h-full w-full">
        {LAYERS.map(({ blur, maskStart, maskEnd }, i) => (
          <BlurLayer
            key={i}
            blur={blur}
            maskStart={maskStart}
            maskEnd={maskEnd}
            zIndex={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
