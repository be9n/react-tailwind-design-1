import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Pricing from "./components/Pricing";
import WorkflowSection from "./components/WorkflowSection";
import Header from "./layouts/Header";

export default function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureSection />
      <WorkflowSection />
      <Pricing />
    </div>
  );
}
