"use client";

import { useState } from "react";

export default function Carousel() {
  const [currentVideoId, setCurrentVideoId] = useState(1);

  function first() {
    return currentVideoId === 0 ? 2 : currentVideoId - 1;
  }

  function third() {
    return (currentVideoId + 1) % 3;
  }

  function firstZ() {
    return first() === 0 ? "z-30" : first() === 1 ? "z-40" : "z-0";
  }

  function secondZ() {
    return currentVideoId === 0
      ? "z-20"
      : currentVideoId === 1
      ? "z-50"
      : "z-10";
  }

  function thirdZ() {
    return third() === 0 ? "z-30" : third() === 1 ? "z-[60]" : "z-20";
  }

  return (
    <div className="flex items-center justify-center relative overflow-x-hidden w-screen md:w-[578px] h-[249px] md:h-[378px]">
      <div
        className={`${firstZ()} w-[249px] h-[249px] duration-500 rounded-lg absolute overflow-hidden ${
          first() === 1
            ? "md:w-[378px] md:h-[378px]"
            : first() === 0
            ? "videoRight"
            : "videoLeft"
        }`}
      >
        <img src="./Images/video3.jpg" alt="video" />
      </div>
      <div
        className={`${secondZ()} w-[249px] h-[249px] duration-500 rounded-lg absolute overflow-hidden ${
          currentVideoId === 1
            ? "md:w-[378px] md:h-[378px]"
            : currentVideoId === 0
            ? "videoRight"
            : "videoLeft"
        }`}
      >
        <img src="./Images/video2.jpg" alt="video" />
      </div>
      <div
        className={`${thirdZ()} w-[249px] h-[249px] duration-500 rounded-lg absolute overflow-hidden ${
          third() === 1
            ? "md:w-[378px] md:h-[378px]"
            : third() === 0
            ? "videoRight"
            : "videoLeft"
        }`}
      >
        <img src="./Images/video1.jpg" alt="video" />
      </div>
      <button
        type="button"
        className="cursor-pointer absolute z-[70] translate-x-[130px] md:translate-x-[190px] bg-[#41649F] size-11 rounded-lg flex items-center justify-center"
        onClick={() => {
          setCurrentVideoId((currentVideoId + 1) % 3);
        }}
      >
        <img src="./Images/arrow-right.svg" alt="arrow right" />
      </button>
      <button
        type="button"
        className="cursor-pointer absolute z-[70] -translate-x-[130px] md:-translate-x-[190px] bg-[#41649F] size-11 rounded-lg flex items-center justify-center"
        onClick={() => {
          if (currentVideoId == 0) setCurrentVideoId(2);
          else setCurrentVideoId(currentVideoId - 1);
        }}
      >
        <img src="./Images/arrow-left.svg" alt="arrow left" />
      </button>
    </div>
  );
}
