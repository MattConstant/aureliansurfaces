import { images } from "./images";

export const site = {
  name: "Aurelian Surfaces",
  tagline: "Protect • Enhance • Last",
  motto: "We Seal It Right",
  owner: "Maxime Gravel",
  phone: "613-298-5765",
  email: "MGravel@aureliansurfaces.ca",
  website: "AurelianSurfaces.ca",
  location: "Ottawa & Surrounding Areas",
  badges: ["Fully Insured", "Free Estimates", "Eco Friendly"],
} as const;

export const services = [
  {
    title: "Asphalt Sealing",
    description:
      "Premium sealcoating that restores depth, protects against UV and water, and extends pavement life.",
    features: ["UV Protection", "Water Resistant", "Long-Lasting"],
  },
  {
    title: "Concrete Sealing",
    description:
      "Durable coatings that resist salt, stains, and wear while enhancing the natural look of your concrete.",
    features: ["Salt Protection", "Stain Guard", "Enhanced Finish"],
  },
  {
    title: "Interlock Sealing",
    description:
      "Stabilizes joints, prevents weeds, and brings out rich color in patios, walkways, and driveways.",
    features: ["Joint Stability", "Weed Prevention", "Color Enhancement"],
  },
  {
    title: "Pothole Repair",
    description:
      "Professional patching and repair to restore safety and smoothness to damaged asphalt surfaces.",
    features: ["Fast Turnaround", "Durable Patch", "Smooth Finish"],
  },
  {
    title: "Crack Repair",
    description:
      "Hot rubber and precision crack filling to stop water infiltration before it causes bigger damage.",
    features: ["Hot Rubber Fill", "Water Barrier", "Precision Work"],
  },
  {
    title: "Commercial Maintenance",
    description:
      "Parking lots, plazas, condos, and industrial properties maintained to a premium standard.",
    features: ["High Traffic Ready", "Scheduled Care", "Pro Results"],
  },
] as const;

export const galleryItems = [
  {
    title: "Luxury Estate",
    category: "Residential",
    description:
      "Premium sealcoating on a luxury property — deep finish and lasting protection.",
    image: images.mansion,
    wide: true,
  },
  {
    title: "Sealed Finish",
    category: "Residential",
    description: "Fresh sealant applied for a rich, wet-look protected surface.",
    image: images.cleanTwo,
  },
  {
    title: "Surface Restoration",
    category: "Transformation",
    description: "Weathered pavement restored to a deep, protected finish.",
    image: images.before,
  },
] as const;

export const highlights = [
  "Premium Quality Guaranteed",
  "Built for Canadian Weather",
  "Residential & Commercial Experts",
] as const;
