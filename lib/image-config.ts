/** Sharp display settings for next/image */
export const imageQuality = {
  default: 90,
  hero: 100,
} as const;

export const imageSizes = {
  /** Full-width hero (max-w-6xl, retina) */
  hero: "(max-width: 768px) 100vw, (max-width: 1280px) 1200px, 1920px",
  /** Half-column cards */
  half: "(max-width: 1024px) 100vw, 600px",
  /** Gallery before/after panels */
  galleryHalf: "(max-width: 768px) 100vw, 800px",
  /** Gallery grid cards */
  galleryCard: "(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px",
  /** Wide gallery feature */
  galleryWide: "(max-width: 768px) 100vw, 1920px",
} as const;
