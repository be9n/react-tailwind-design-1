import {
  BatteryCharging,
  BotMessageSquare,
  Fingerprint,
  GlobeLock,
  PlugZap,
  ShieldHalf,
} from "lucide-react";
import { ReactNode } from "react";

type navItemType = {
  id: number;
  title: string;
  link: string;
};

export const navItems: navItemType[] = [
  {
    id: 1,
    title: "Features",
    link: "/",
  },
  {
    id: 2,
    title: "Workflow",
    link: "/",
  },
  {
    id: 3,
    title: "Pricing",
    link: "/",
  },
  {
    id: 4,
    title: "Testimonials",
    link: "/",
  },
];

type FeatureType = {
  icon: ReactNode;
  title: string;
  paragraph: string;
};

export const features: FeatureType[] = [
  {
    icon: <BotMessageSquare />,
    title: "Drag-and-Drop Interface",
    paragraph:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    title: "Multi-Platform Compatibility",
    paragraph:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    title: "Built-in Templates",
    paragraph:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    title: "Real-Time Preview",
    paragraph:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    title: "Collaboration Tools",
    paragraph:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    title: "Analytics Dashboard",
    paragraph:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];
