import { images } from "./images";

export const site = {
  name: "Aurelian Surfaces",
  legalName: "Aurelian Surfaces Inc.",
  tagline: "Protect • Enhance • Last",
  motto: "Better for your property. Better for our planet.",
  owner: "Maxime Gravel",
  ownerTitle: "Owner / Director",
  operationsManager: "Patrick Ghazi",
  operationsTitle: "Operations Manager",
  phone: "613-298-5765",
  operationsPhone: "613-298-5791",
  email: "info@aureliansurfaces.ca",
  website: "AurelianSurfaces.ca",
  address: {
    street: "123 Bourdeau Blvd",
    city: "Limoges",
    province: "Ontario",
    country: "Canada",
    postalCode: "K0A 2M0",
  },
  location: "Ottawa & Surrounding Areas",
  social: {
    instagram: {
      handle: "@aureliansurfaces",
      href: "https://instagram.com/aureliansurfaces",
    },
    facebook: {
      handle: "Aurelian Surfaces Inc.",
      href: "https://facebook.com/aureliansurfaces",
    },
  },
  badges: ["Free On-Site Estimates", "Eco-Friendly Products", "Premium Workmanship"],
} as const;

export const services = [
  {
    title: "Asphalt Sealing",
    description:
      "Premium sealcoating that restores depth, protects against UV and water, and extends pavement life.",
    features: ["UV Protection", "Water Resistant", "Long-Lasting"],
  },
  {
    title: "Crack Filling",
    description:
      "Precision crack filling to stop water infiltration before freeze-thaw damage spreads through your pavement.",
    features: ["Water Barrier", "Preventive Care", "Clean Finish"],
  },
  {
    title: "Hot Rubber Crack Repair",
    description:
      "Commercial-grade hot rubber applied to cracks for a flexible, durable seal built for Ottawa winters.",
    features: ["Hot Applied", "Flexible Seal", "Winter Ready"],
  },
  {
    title: "Pothole Repair",
    description:
      "Professional patching to restore safety, smoothness, and curb appeal on damaged asphalt surfaces.",
    features: ["Fast Turnaround", "Durable Patch", "Smooth Finish"],
  },
  {
    title: "Patch & Pave",
    description:
      "Targeted asphalt repairs that restore structural integrity and a clean, uniform surface.",
    features: ["Structural Repair", "Seamless Blend", "Lasting Results"],
  },
  {
    title: "Cut, Removal & Pave",
    description:
      "Full patch-and-pave work including cut-out, removal of failed asphalt, and professional repaving.",
    features: ["Cut & Remove", "Full Repave", "Commercial Grade"],
  },
  {
    title: "Pave Ready Patches",
    description:
      "Tack-and-pave repairs for pave-ready areas, delivering a strong bond and a smooth finished surface.",
    features: ["Tack & Pave", "Strong Bond", "Ready to Seal"],
  },
  {
    title: "Parking Lot Maintenance",
    description:
      "Scheduled care for retail plazas, condos, and commercial lots to keep high-traffic surfaces performing.",
    features: ["High Traffic Ready", "Scheduled Care", "Pro Results"],
  },
  {
    title: "Parking Lot Line Painting",
    description:
      "Crisp, durable line painting that improves safety, organization, and the professional look of your lot.",
    features: ["Crisp Lines", "Safety Focused", "Durable Paint"],
  },
  {
    title: "Concrete Sealing",
    description:
      "Durable coatings that resist salt, stains, and wear while enhancing the natural look of your concrete.",
    features: ["Salt Protection", "Stain Guard", "Enhanced Finish"],
  },
  {
    title: "Garage Floor Sealing",
    description:
      "Protect garage floors from oil, salt, and moisture while improving appearance and long-term durability.",
    features: ["Oil Resistant", "Moisture Guard", "Easy Maintenance"],
  },
  {
    title: "Walkway & Patio Sealing",
    description:
      "Premium sealing for walkways and patios that boosts curb appeal and stands up to Canadian weather.",
    features: ["Curb Appeal", "Weather Ready", "Slip Resistant Options"],
  },
  {
    title: "Interlock Sealing",
    description:
      "Stabilizes joints, prevents weeds, and brings out rich color in patios, walkways, and driveways.",
    features: ["Joint Stability", "Weed Prevention", "Color Enhancement"],
  },
  {
    title: "Polymeric Sand Installation",
    description:
      "Professional polymeric sand application to lock pavers in place and resist erosion and weed growth.",
    features: ["Joint Lock", "Weed Resistant", "Clean Finish"],
  },
  {
    title: "Joint Sand Stabilization",
    description:
      "Stabilizes paver joints for long-lasting interlock performance and a refined, finished look.",
    features: ["Stable Joints", "Erosion Control", "Premium Finish"],
  },
  {
    title: "Commercial Surface Maintenance",
    description:
      "Parking lots, plazas, industrial sites, and luxury estates maintained to the same premium standard.",
    features: ["Industrial Scale", "Detail Oriented", "Long-Term Value"],
  },
] as const;

/** Priority services shown on the home page */
export const featuredServices = services.filter((service) =>
  [
    "Asphalt Sealing",
    "Concrete Sealing",
    "Interlock Sealing",
    "Cut, Removal & Pave",
    "Pave Ready Patches",
    "Commercial Surface Maintenance",
  ].includes(service.title),
);

export const galleryItems = [
  {
    title: "Luxury Estate",
    category: "Residential",
    description:
      "Premium sealcoating on a luxury property with a deep finish and lasting protection.",
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
  "Luxury Brand, Pro Workmanship",
  "Built for Harsh Canadian Climates",
  "Eco-Friendly Premium Products",
] as const;

export const siteDescription =
  "Premium asphalt, concrete, and interlock sealing in Ottawa and surrounding areas. Residential and commercial surface protection built to last.";
