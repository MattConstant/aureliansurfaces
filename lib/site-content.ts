import { images } from "./images";

export const site = {
  name: "Aurelian Surfaces",
  legalName: "Aurelian Surfaces Inc.",
  tagline: "Protect • Enhance • Last",
  motto: "Protection that lasts. Products you can feel good about.",
  closingMotto: "Protection that lasts. Products you can feel good about.",
  owner: "Maxime Gravel",
  ownerTitle: "Owner / Director",
  operationsManager: "Patrick Ghazi",
  operationsTitle: "Operations Manager",
  phone: "613-298-5765",
  email: "info@aureliansurfaces.ca",
  website: "AurelianSurfaces.ca",
  address: {
    street: "123 Bourdeau Blvd",
    city: "Limoges",
    province: "Ontario",
    country: "Canada",
    postalCode: "K0A2M0",
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

export const homeIntro =
  "Premium asphalt, concrete, and interlock protection for homes and commercial properties, across Ottawa & Surrounding Areas.";

export const homeIntroSubline =
  "Built for harsh Canadian climates using eco-friendly premium products and detail-oriented preparation.";

export const heroTrustBadges = [
  "Luxury-Level Workmanship",
  "Fully Insured",
  "Engineered for Canadian Weather",
  "Eco-Friendly Commercial-Grade Products",
] as const;

export const homeFeaturedServices = [
  {
    titleGold: "Asphalt Sealing &",
    titleRest: "Crack Repair",
    description:
      "Premium sealcoating that restores rich color, protects against UV and water damage, and extends pavement life.",
    features: ["UV & Water Protection", "Rich Black Finish", "Prevents Cracking"],
  },
  {
    titleGold: "Concrete",
    titleRest: "Sealing",
    description:
      "Protective concrete sealing that resists salt, stains, and surface wear while enhancing the natural appearance of your concrete.",
    features: [
      "Salt & Weather Protection",
      "Stain Resistant",
      "Durable Surface Finish",
    ],
  },
  {
    titleGold: "Interlock",
    titleRest: "Sealing",
    description:
      "Stabilizes joints, helps prevent weeds, and enhances the rich color of patios, walkways, and driveways.",
    features: ["Joint Stability", "Weed Prevention", "Rich Color Enhancement"],
  },
  {
    titleGold: "Cut, Removal",
    titleRest: "& Pave",
    description:
      "Professional asphalt repair involving saw-cut removal of failed pavement and fresh hot asphalt replacement.",
    features: ["Precision Cut & Remove", "Hot Asphalt Repair", "Seamless Finish"],
  },
  {
    titleGold: "Pave Ready",
    titleRest: "Patches",
    description:
      "Professional tack-and-pave asphalt repairs designed for strong adhesion and a smooth, durable finish.",
    features: ["Smooth Finish", "Durable Repair", "Hot Asphalt Repair"],
  },
  {
    titleGold: "Commercial Surface",
    titleRest: "Maintenance",
    description:
      "Professional maintenance solutions for parking lots, plazas, industrial properties, and luxury estates.",
    features: [
      "Detail-Oriented Work",
      "Long-Lasting Results",
      "Premium Property Care",
      "Line Painting",
    ],
  },
] as const;

export const servicesSection = {
  eyebrow: "Services",
  title: "Premium Surface Protection and Repair Services",
  description:
    "From residential driveways to commercial parking lots, we seal, repair, and maintain asphalt, concrete, and interlock with commercial-grade equipment and Superior-Grade products.",
  footnote:
    "Hot rubber crack repair, pothole repair, and line painting also available. Free estimates available. Contact us for a free estimate.",
} as const;

export const whyAurelian = {
  eyebrow: "Why Aurelian",
  title: "Built to Withstand the Elements",
  description:
    "Professional application paired with industry-leading products, commercial-grade equipment, and meticulous surface preparation. Built to withstand Canada's freeze-thaw cycles, road salt, UV exposure, and heavy traffic.",
  cardTitleGold: "Commercial & Residential",
  cardTitleRest: "",
  cardBody:
    "Serving homeowners, luxury estates, condo properties, retail plazas, and commercial sites with premium long-term surface protection.",
} as const;

export const contactServiceGroups = [
  {
    category: "Asphalt",
    items: ["Sealing", "Crack Repair", "Pothole Repair", "Patch & Pave Repairs"],
  },
  {
    category: "Concrete",
    items: ["Concrete & Garage Floor Sealing"],
  },
  {
    category: "Interlock",
    items: ["Interlock Sealing"],
  },
  {
    category: "Commercial",
    items: ["Parking Lot Maintenance", "Line Painting"],
  },
] as const;

/** @deprecated Use homeFeaturedServices on the home page */
export const services = homeFeaturedServices.map((s) => ({
  title: `${s.titleGold} ${s.titleRest}`.trim(),
  description: s.description,
  features: s.features,
}));

export const featuredServices = homeFeaturedServices;

export const galleryItems = [
  {
    title: "Luxury Estate",
    category: "Residential",
    description:
      "Sealcoating on a luxury estate for enhanced curb appeal and long-lasting protection.",
    image: images.mansion,
    wide: true,
  },
  {
    title: "Commercial Parking Lot",
    category: "Commercial",
    description:
      "Freshly completed parking lot with professional line painting and premium sealcoating.",
    image: images.commercialLot,
    wide: true,
  },
] as const;

export const highlights = heroTrustBadges;

export const siteDescription =
  "Premium asphalt, concrete, and interlock protection in Ottawa and surrounding areas. Residential and commercial surface protection built to last.";

export const contactIntro =
  "Serving residential and commercial clients across Ottawa & Surrounding Areas with premium long-lasting surface protection.";
