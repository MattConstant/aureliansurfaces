import Image from "next/image";
import { imageQuality, imageSizes } from "@/lib/image-config";

type ProjectImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  aspectClass?: string;
  wide?: boolean;
};

export default function ProjectImage({
  src,
  alt,
  priority = false,
  className = "",
  aspectClass = "aspect-[4/3]",
  wide = false,
}: ProjectImageProps) {
  return (
    <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={imageQuality.default}
        className="object-cover"
        sizes={wide ? imageSizes.galleryWide : imageSizes.galleryCard}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
    </div>
  );
}
