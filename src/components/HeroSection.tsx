import { useEffect } from "react";
import { Button } from "./Button";
import GradientSpan from "./GradientSpan";
import Aos from "aos";

export default function HeroSection() {
  const videos = [
    {
      id: 1,
      link: "video1.mp4",
    },
    {
      id: 2,
      link: "video2.mp4",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container text-center mt-40 text-white px-6 tracking-wide">
      <div className="max-w-5xl mx-auto">
        <div data-aos="fade-right" className="text-4xl sm:text-6xl lg:text-7xl mb-10 capitalize">
          Virtual build tools <GradientSpan>for developers</GradientSpan>
        </div>
        <p data-aos="fade-left" data-aos-delay="500" className="text-lg text-neutral-500 w-[850px] max-w-full mx-auto">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        <div data-aos="fade-up" className="mt-8 flex justify-center gap-5">
          <Button variant={"gradient"} className="py-3 px-4">
            Start for free
          </Button>
          <Button>Documentation</Button>
        </div>
      </div>

      <div data-aos="fade-bottom" className="my-[80px] flex gap-10 flex-shrink-0">
        {videos.map((video) => (
          <div
            key={video.id}
            className="w-1/2 rounded-lg overflow-hidden border border-primary"
          >
            <video
              src={`/src/assets/${video.link}`}
              className="w-full object-contain"
              autoPlay
              muted
              loop
            />
          </div>
        ))}
      </div>
    </div>
  );
}
