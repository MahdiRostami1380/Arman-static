"use client";

import { useEffect, useState } from "react";

export default function AboutCarousel() {
  const [ontopId, setOntopId] = useState(1);
  let intervalId;

  useEffect(() => {
    intervalId = setInterval(() => {
      ontopId === 1 ? setOntopId(2) : setOntopId(1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [ontopId]);
  return (
    <div className="w-[296px] md:w-[500px] h-[296px] md:h-[500px] relative">
      <div
        className={`${
          ontopId === 1
            ? "z-10 -translate-x-[78.7px] translate-y-[53px] md:-translate-x-[174px] md:translate-y-[137px]"
            : "z-0 opacity-95"
        } bg-[url('/Images/about1.jpg')] w-[217.3px] h-[243px] md:w-[326px] md:h-[363px] bg-cover absolute rounded-lg duration-500`}
      ></div>
      <div
        className={`${
          ontopId === 2
            ? "z-10 -translate-x-[78.7px] translate-y-[53px] md:-translate-x-[174px] md:translate-y-[137px]"
            : "z-0  opacity-95"
        } bg-[url('/Images/about2.jpg')] w-[217.3px] h-[243px] md:w-[326px] md:h-[363px] bg-cover absolute rounded-lg duration-500`}
      ></div>
      <div className="flex gap-3 absolute left-1/2 -translate-x-1/2 -bottom-8">
        <button
          className={`cursor-pointer size-4 rounded-full outline outline-1 outline-[#41649F] outline-offset-2 ${
            ontopId === 1 ? "bg-[#41649F]" : null
          }`}
          onClick={() => setOntopId(1)}
        ></button>
        <button
          className={`cursor-pointer size-4 rounded-full outline outline-1 outline-[#41649F] outline-offset-2 ${
            ontopId === 2 ? "bg-[#41649F]" : null
          }`}
          onClick={() => setOntopId(2)}
        ></button>
      </div>
    </div>
  );
}
