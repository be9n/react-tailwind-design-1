import { CircleCheck } from "lucide-react";
import GradientSpan from "./GradientSpan";
import { useEffect } from "react";
import Aos from "aos";

type WorkflowStepType = {
  id: number;
  title: string;
  description: string;
};

const workflowSteps: WorkflowStepType[] = [
  {
    id: 1,
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    id: 2,
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    id: 3,
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    id: 4,
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export default function WorkflowSection() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="container my-32 pt-20 border-t border-neutral-800">
      <div data-aos="zoom-in" className="text-center text-white text-3xl md:text-4xl lg:text-6xl pb-16">
        Accelerate your <GradientSpan>coding workflow.</GradientSpan>
      </div>
      <div className="flex gap-8">
        <div data-aos="fade-right" data-aos-delay="300" className="flex-1">
          <img
            src="/src/assets/code.jpg"
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="300" className="flex-1 pt-10 space-y-11">
          {workflowSteps.map((step) => (
            <div key={step.id} className="flex gap-6 items-start ">
              <div className="p-2 bg-secondary rounded-full">
                <CircleCheck className="text-[#4ade80]" size={25} />
              </div>
              <div>
                <div className="text-2xl text-white mb-2">{step.title}</div>
                <p className="text-neutral-500 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
