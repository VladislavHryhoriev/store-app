import {
  Box,
  Camera,
  Computer,
  Headphones,
  Monitor,
  Printer,
  Smartphone,
  Tablet,
} from "lucide-react";

export const CATEGORIES = [
  {
    id: 0,
    category: "laptopsAndComputers",
    href: "/laptops-and-computers",
    icon: Computer,
  },
  { id: 1, category: "smartphones", href: "/smartphones", icon: Smartphone },
  { id: 2, category: "headphones", href: "/headphones", icon: Headphones },
  { id: 3, category: "tablets", href: "/tablets", icon: Tablet },
  { id: 4, category: "cameras", href: "/cameras", icon: Camera },
  { id: 5, category: "monitors", href: "/monitors", icon: Monitor },
  { id: 6, category: "printers", href: "/printers", icon: Printer },
  { id: 7, category: "accessories", href: "/accessories", icon: Box },
  { id: 8, category: "accessories", href: "/accessories", icon: Box },
  { id: 9, category: "accessories", href: "/accessories", icon: Box },
  { id: 10, category: "accessories", href: "/accessories", icon: Box },
] as const;

export type Category = (typeof CATEGORIES)[number];
