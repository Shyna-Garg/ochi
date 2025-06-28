import React from "react";

const About = () => {
  return (
    <div className="p-20 w-full bg-[#CDEA68] text-black">
      <h1 className="font-semibold text-5xl leading-snug">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab modi, iusto
        blanditiis sapiente, non molestias possimus cupiditate, repellendus
        perferendis.
      </h1>
      <div className="border-b-2 py-8 border-[#c0d478]"></div>
      <div className="py-20 flex gap-80">
        <div>
        <h1 className="text-6xl">Our Appoach</h1>
        <button className="flex gap-6 items-center mt-12 bg-zinc-800 px-10 py-4 rounded-full text-white">Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
        </button>
        </div>
        <div className="w-1/2 bg-[#9aaf4c] h-[30vw] rounded-2xl"></div>
      </div>
    </div>
  );
};

export default About;
    