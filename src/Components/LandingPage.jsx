import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-2">
      <div className="head mt-40  ">
        {["WE CREATE", "EYE-OPENING", "PRESENTATONS"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <h1 className='text-9xl tracking-tighter px-10'>
                {item}
              </h1>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-700 mt-40 flex justify-around">
        {["For pubic and private companies", "From the first pitch to IPO"].map(
          (item, index) => {
            return (
              <p key={index} className="mt-10">
                {item}
              </p>
            );
          }
        )}
        <div className="flex mt-10 gap-4">
          <div className="border-[1px] rounded-full h-11 w-40 text-center p-2 border-zinc-600">
            Start the project
          </div>
          <div className="rotate-[-30deg]">
            <IoArrowForwardCircleOutline size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
