import {
  Scale,
  Vote,
  Shield,
  BookOpen,
  Home,
  Settings,
  AlertCircle,
} from "lucide-react";

export interface NavItem {
  icon: any;
  label: string;
  href: string;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    title: "Dashboard",
    items: [
      {
        icon: Home,
        label: "Beranda",
        href: "/",
      },
    ],
  },
  {
    title: "Hukum & Pemerintahan",
    items: [
      {
        icon: Scale,
        label: "Hukum & Legal",
        href: "/hukum",
      },
      {
        icon: Vote,
        label: "Politik Indonesia",
        href: "/politik",
      },
      {
        icon: AlertCircle,
        label: "Anti-Korupsi",
        href: "/korupsi",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        icon: Settings,
        label: "Pengaturan",
        href: "/settings",
      },
    ],
  },
];
