"use client";
import { MenuItems } from "@/app/data/MenuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Menu() {
  const pathname = usePathname();
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (menuOpened) {
      window.onscroll = function () {
        window.scrollTo(0, 0);
      };
    } else {
      window.onscroll = function () {};
    }
  }, [menuOpened]);
  return (
    <>
      <div className="section-container py-[78px] md:py-[70px] lg:py-[59px] flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <Link href={"/"}>
          <img
            src="./Images/arman.svg"
            className="w-[72.65px] h-[39px] md:w-[119.22px] md:h-[64px]"
            alt="logo"
          />
        </Link>
        <ul className="hidden md:flex gap-14">
          {MenuItems.map((item) => (
            <li
              key={item.link}
              className={`font-PeydaLight text-[16px] transition hover:text-[#75A8FF] ${
                pathname === item.link ? "text-[#75A8FF]" : "text-white"
              }`}
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-6">
          <button
            type="button"
            className="flex items-center justify-center rounded-xl bg-[#41649F] font-PeydaBold text-white text-[16px] w-[112px] md:w-[191px] py-3 hover:bg-white hover:text-[#41649F] transition"
            onClick={(e) => e.preventDefault()}
          >
            ورود / ثبت نام
          </button>
          <img
            src="./Images/menu-button.svg"
            className="flex md:hidden"
            alt="Menu button"
            onClick={() => {
              setMenuOpened(!menuOpened);
            }}
          />
        </div>
      </div>
      {menuOpened ? (
        <div className="absolute top-0 left-0 w-screen h-screen flex z-[100]">
          <div className="bg-white w-1/2 py-5">
            <ul className="flex flex-col items-center">
              {MenuItems.map((item) => (
                <li
                  key={item.link}
                  className={`font-PeydaLight text-[20px] transition hover:text-[#75A8FF] ${
                    pathname === item.link ? "text-[#75A8FF]" : "text-black"
                  }`}
                >
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="bg-black bg-opacity-50 w-1/2"
            onClick={() => setMenuOpened(false)}
          ></div>
        </div>
      ) : null}
    </>
  );
}
