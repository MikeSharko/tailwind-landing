import React from "react";
import illustration from "../img/photo-hero2.avif";
const Hero = () => {
  const url = "";
  return (
    <div>
      {/* HERO SECTION */}
      <section id="hero">
        {/* FLEX CONTAINER */}
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
          {/* LEFT ITEM */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              BrainTech Empowering businesses to reach new heights
            </h1>
            <p className="max-w-sm text-center text-red md:text-left text-gray-500">
              BrainTech makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href={url}
                className="p-3 px-6 pt-2 text-white bg-orange-500 rounded-full baseline hover:bg-orange-600"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* IMAGE */}
          <div className="md:w-1/2 shadow-xl">
            <img className="rounded" src={illustration} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
