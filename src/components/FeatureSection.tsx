import GradientSpan from "./GradientSpan";

export default function FeatureSection() {
  return (
    <div className="container">
      <div className="text-center mb-12">
        <span className="block w-fit mx-auto uppercase text-primary p-2 rounded-full bg-secondary text-sm mb-12">
          Feature
        </span>
        <div className="text-white text-6xl tracking-wide">
          Easily build <GradientSpan>your code</GradientSpan>
        </div>
      </div>
    </div>
  );
}
