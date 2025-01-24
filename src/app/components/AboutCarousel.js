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
    <div className="w-[296px] md:w-[500px] relative h-[350px] md:h-[500px] relative">
      <div
        className={`${
          ontopId === 1
            ? "z-10 w-[241px] h-[265px] md:w-[340px] md:h-[374px] -translate-x-[55px] translate-y-[85px] md:-translate-x-[110px] md:translate-y-[120px]"
            : "z-0 opacity-95 md:w-[340px] md:h-[374px] scale-90 translate-x-[12px] -translate-y-[13px] md:translate-x-[18px] md:-translate-y-[18px]"
        } bg-[url('/Images/about1.jfif')] w-[241px] h-[265px] bg-cover absolute rounded-lg duration-500`}
        style={{ backgroundPositionX: "70%" }}
      ></div>
      <div
        className={`${
          ontopId === 2
            ? "z-10 w-[218px] h-[272px] md:w-[306px] md:h-[383px] -translate-x-[77px] translate-y-[78px]  md:-translate-x-[140px] md:translate-y-[110px]"
            : "z-0  opacity-95 md:w-[306px] md:h-[383px] scale-90 translate-x-[11px] -translate-y-[13px] md:translate-x-[15px] md:-translate-y-[18px]"
        } bg-[url('/Images/about2.jfif')] w-[218px] bg-cover h-[272px] absolute rounded-lg duration-500`}
        style={{ backgroundPositionX: "45%" }}
      ></div>
      <div className="flex gap-3 absolute left-1/2 -translate-x-1/2 -bottom-8 md:-bottom-5">
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
