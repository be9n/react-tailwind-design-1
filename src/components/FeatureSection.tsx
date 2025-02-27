import { features } from "../constants";
import GradientSpan from "./GradientSpan";

export default function FeatureSection() {
  return (
    <section className="container my-20">
      <div className="text-center mb-12">
        <span className="block w-fit mx-auto uppercase text-primary p-2 rounded-full bg-secondary text-sm mb-5">
          Feature
        </span>
        <div className="text-white text-6xl tracking-wide">
          Easily build <GradientSpan>your code</GradientSpan>
        </div>
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
