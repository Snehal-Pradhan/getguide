import { AnimatedGridPattern } from "./animated-grid-pattern";
import { Button } from "./button";
import CourseProvider from "./CourseProvider";

function HeroSection() {
  return (
    <div className="px-56 pt-72 relative flex flex-col h-[130vh] w-full bg-gray-300">
      <AnimatedGridPattern
        width={80}
        height={80}
        numSquares={20}
        maxOpacity={0.05}
        duration={1}
        className="z-10 absolute"
      />
      <h1 className="z-30 -translate-x-2 text-7xl text-gray-800 w-2/3">
        Get the Roadmap You deserve
      </h1>
      <div className="z-30 my-16 w-1/2 text-3xl">
        Ai chat counselling that is tailored for you, And Study Integrations far
        better than general LLMs.
      </div>
      <div className="flex gap-5">
        <Button className="z-30">Start with custom roadmap for free</Button>
      </div>
      <div className="mt-28 mb-10 text-2xl">
        Get recommendations of top courses curated from
      </div>
      <CourseProvider />
    </div>
  );
}

export default HeroSection;
