import { div, span } from "framer-motion/client";
import GradientSpan from "./GradientSpan";
import { CircleCheck } from "lucide-react";
import { Button } from "./Button";
import { useEffect } from "react";
import Aos from "aos";

type PlanType = {
  name: string;
  price: number;
  period: string;
  isMostPopular: boolean;
  features: string[];
};

const plans: PlanType[] = [
  {
    name: "Free",
    price: 0,
    period: "month",
    isMostPopular: false,
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    name: "Pro",
    price: 10,
    period: "month",
    isMostPopular: true,
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "High Velocity",
      "Great Support",
      "Private Mode",
    ],
  },
  {
    name: "Enterprise",
    price: 1100,
    period: "year",
    isMostPopular: false,
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export default function Pricing() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div data-aos="fade-up" className="container my-20 text-white">
      <h1 className="text-3xl md:text-4xl lg:text-6xl text-center mb-10">
        <GradientSpan>Pricing</GradientSpan>
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:content-start lg:items-start">
        {plans.map(({ name, price, period, isMostPopular, features }) => (
          <div key={name} className="p-8 border border-neutral-500 rounded-xl">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-4xl me-2 mb-6 inline-block">
                {name}
              </h2>
              {isMostPopular && (
                <GradientSpan className="text-xl from-primary to-red-400">
                  (Most Popular)
                </GradientSpan>
              )}
            </div>
            <div className="text-2xl md:text-3xl lg:text-5xl mb-7">
              ${price}
              <span className="text-neutral-500 text-xl ms-2 capitalize">
                / {period}
              </span>
            </div>
            <ul className="space-y-8 mb-16">
              {features.map((feature) => (
                <li key={feature} className="flex gap-4 tracking-wide">
                  <CircleCheck className="text-green-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="border-gradient-red hover:bg-gradient-red hover:text-white duration-300 w-full text-md md:text-lg lg:text-xl">
              Subscribe
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
