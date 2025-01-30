"use client";
import { useState, useRef } from "react";

export default function AccordionItem({ q, a, index }) {
  const [openedQ, setOpenedQ] = useState(null);
  const item = useRef(null);
  return (
    <div
      ref={item}
      className={`p-5 md:p-7 lg:p-10 cursor-pointer flex justify-between items-start ${
        openedQ === index
          ? "shadow-[0_0_30px_-15px_rgba(0,0,0,0.3)]"
          : "outline outline-1 outline-black/20"
      } rounded`}
      onClick={() => {
        if (openedQ === index) {
          setOpenedQ(null);
          item.current.style.animation = "none";
        } else {
          setOpenedQ(index);
          item.current.style.animation = "openQuestion 0.5s";
        }
      }}
    >
      <div className="flex gap-5">
        <div className="text-[#41649F] text-base md:text-[24px] font-PeydaLight">
          {index < 10 ? "0" + index + "." : index + "."}
        </div>
        <div>
          <div className="text-[14px] md:text-[18px] font-PeydaMedium">{q}</div>
          {openedQ === index ? (
            <div className="font-PeydaLight text-[#4F4F4F] text-[12px] md:text-base mt-6">
              {a.map((answer, i) => (
                <p key={i}>{answer}</p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      {openedQ === index ? (
        <img src="./Images/arrow-up.svg" alt="arrow" className="mt-2" />
      ) : (
        <img src="./Images/arrow-down.svg" alt="arrow" className="mt-2" />
      )}
    </div>
  );
}
