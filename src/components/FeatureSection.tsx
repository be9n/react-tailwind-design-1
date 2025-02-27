import {
  BatteryCharging,
  BotMessageSquare,
  Fingerprint,
  GlobeLock,
  PlugZap,
  ShieldHalf,
} from "lucide-react";
import { ReactNode, useEffect } from "react";
import GradientSpan from "./GradientSpan";
import Aos from "aos";

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

export default function FeatureSection() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <section data-aos="fade-up" className="container my-20 overflow-hidden">
      <div className="text-center mb-12">
        <span className="block w-fit mx-auto uppercase text-primary p-2 rounded-full bg-secondary text-sm mb-5">
          Feature
        </span>
        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl capitalize tracking-wide leading-[1.6]">
          Easily build <GradientSpan>your code</GradientSpan>
        </h1>
      </div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex gap-5 flex-col items-center text-center md:text-start md:flex-row md:items-start"
          >
            <div className="text-primary/80 p-2 bg-secondary rounded-lg">
              {feature.icon}
            </div>
            <div>
              <div className="text-xl mb-6 text-white">{feature.title}</div>
              <p className="text-neutral-500 text-md px-5 md:px-0">
                {feature.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
