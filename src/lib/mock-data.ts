import {
  Building2,
  Droplets,
  Factory,
  MapPinned,
  Recycle,
  Toilet,
  Truck,
  WalletCards,
} from "lucide-react";

export const lgas = [
  "Aninri",
  "Awgu",
  "Enugu East",
  "Enugu North",
  "Enugu South",
  "Ezeagu",
  "Igbo Etiti",
  "Igbo Eze North",
  "Igbo Eze South",
  "Isi Uzo",
  "Nkanu East",
  "Nkanu West",
  "Nsukka",
  "Oji River",
  "Udenu",
  "Udi",
  "Uzo Uwani",
];

export const waterPoints = [
  {
    name: "New Haven Borehole Hub",
    lga: "Enugu North",
    distance: "1.2 km",
    price: 350,
    available: "High",
    rating: 4.8,
  },
  {
    name: "Abakpa Tanker Cooperative",
    lga: "Enugu East",
    distance: "3.8 km",
    price: 12000,
    available: "Medium",
    rating: 4.6,
  },
  {
    name: "Independence Layout Water Point",
    lga: "Enugu South",
    distance: "2.4 km",
    price: 400,
    available: "High",
    rating: 4.7,
  },
];

export const sanitationOperators = [
  {
    name: "CleanFlow Desludging Ltd",
    lga: "Enugu South",
    response: "45 min",
    price: 25000,
    rating: 4.9,
  },
  {
    name: "Nike Sanitation Services",
    lga: "Enugu East",
    response: "1 hr",
    price: 22000,
    rating: 4.5,
  },
  {
    name: "Coal City Hygiene Crew",
    lga: "Enugu North",
    response: "35 min",
    price: 28000,
    rating: 4.8,
  },
];

export const partners = [
  {
    name: "Enugu BioEnergy Works",
    output: "Biogas and slurry fertilizer",
    capacity: "18,000 L/day",
    lga: "Nkanu West",
  },
  {
    name: "GreenLoop Organics",
    output: "Bio-fertilizer pellets",
    capacity: "11 tonnes/month",
    lga: "Udi",
  },
  {
    name: "Nsukka Waste-to-Energy",
    output: "Community cooking gas",
    capacity: "9,500 L/day",
    lga: "Nsukka",
  },
];

export const dashboardActions = [
  { href: "/water", label: "Find water", icon: Droplets },
  { href: "/sanitation", label: "Book sanitation", icon: Toilet },
  { href: "/waste-to-value", label: "Convert waste", icon: Recycle },
  { href: "/wallet", label: "Fund wallet", icon: WalletCards },
  { href: "/map", label: "Open map", icon: MapPinned },
  { href: "/admin", label: "Admin heatmap", icon: Building2 },
];

export const adminMetrics = [
  { label: "Water points online", value: "126", icon: Droplets },
  { label: "Active tanker jobs", value: "38", icon: Truck },
  { label: "Open sanitation reports", value: "19", icon: Toilet },
  { label: "Waste partners", value: "14", icon: Factory },
];
