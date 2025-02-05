"use client";
import { MenuItems } from "@/app/data/MenuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Menu() {
  const pathname = usePathname();
  console.log(pathname);

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <div className="section-container py-[78px] md:py-[70px] lg:py-[59px] absolute top-0 left-1/2 -translate-x-1/2 z-10">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <img
              src="./Images/arman.svg"
              className="w-[72.65px] h-[39px] md:w-[119.22px] md:h-[64px]"
              alt="logo"
            />
          </Link>
          <nav className="hidden md:flex gap-14">
            {MenuItems.map((item) => (
              <div
                key={item.link}
                className={`font-PeydaLight text-[16px] transition hover:text-[#75A8FF] ${
                  pathname === item.link ? "text-[#75A8FF]" : "text-white"
                }`}
              >
                <Link href={item.link}>{item.title}</Link>
              </div>
            ))}
          </nav>
          <div className="flex gap-6">
            <button className="flex items-center justify-center rounded-xl bg-[#41649F] font-PeydaBold w-[112px] md:w-[191px] py-3 hover:bg-white hover:text-[#41649F] transition">
              ورود / ثبت نام
            </button>
            <img
              src="./Images/menu-button.svg"
              className="block md:hidden"
              alt="menu button"
              onClick={() => {
                setMenuOpened(!menuOpened);
              }}
            />
          </div>
        </div>
      </div>
      {menuOpened ? (
        <div className="fixed w-screen h-screen z-[100] bg-white">
          <button
            className="bg-[#41649F] py-5 px-2 rounded-xl m-6"
            onClick={() => setMenuOpened(!menuOpened)}
          >
            <div className="w-6 h-[0.5px] bg-white rotate-45"></div>
            <div className="w-6 h-[0.5px] bg-white -rotate-45"></div>
          </button>
          <nav className="flex flex-col items-center gap-5 mt-20">
            {MenuItems.map((item) => (
              <div
                key={item.link}
                className={`font-PeydaLight text-[20px] transition hover:text-[#75A8FF] ${
                  pathname === item.link ? "text-[#75A8FF]" : "text-black"
                }`}
              >
                <Link href={item.link}>{item.title}</Link>
              </div>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
