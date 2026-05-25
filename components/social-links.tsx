import Image from "next/image";
import { images } from "@/lib/images";
import { site } from "@/lib/site-content";

type SocialLinksProps = {
  className?: string;
  showLabels?: boolean;
};

export default function SocialLinks({
  className = "",
  showLabels = false,
}: SocialLinksProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <a
        href={site.social.instagram.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Instagram ${site.social.instagram.handle}`}
        className="rounded-full border border-gold/40 bg-black/60 p-2 transition hover:border-gold hover:bg-gold/10"
      >
        <Image
          src={images.instagram}
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
      </a>
      <a
        href={site.social.facebook.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Facebook ${site.social.facebook.handle}`}
        className="rounded-full border border-gold/40 bg-black/60 p-2 transition hover:border-gold hover:bg-gold/10"
      >
        <Image
          src={images.facebook}
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
      </a>
      {showLabels && (
        <div className="flex flex-col gap-1 text-sm text-white/80 sm:flex-row sm:gap-4">
          <span>{site.social.instagram.handle}</span>
          <span>{site.social.facebook.handle}</span>
        </div>
      )}
    </div>
  );
}
