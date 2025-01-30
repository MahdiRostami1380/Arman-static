import Link from "next/link";

export default function Download() {
  return (
    <div className="flex justify-center gap-2 flex-wrap w-72 mx-auto md:mx-0 md:w-fit">
      <Link
        href={"/"}
        className="flex border border-[#0F9F4A] rounded-lg py-2 justify-center w-32 gap-1"
      >
        <img src="./Images/bazaar-download.svg" alt="bazaar" />
        <div className="text-[#0F9F4A]">
          <div className="text-[10px]">دانلود برنامه از</div>
          <div className="text-[14px]">Cafe Bazzar</div>
        </div>
      </Link>
      <Link
        href={"/"}
        className="flex border border-[#202020] rounded-lg py-2 justify-center w-32 gap-1"
      >
        <img src="./Images/appstore-download.svg" alt="app store" />
        <div className="text-black">
          <div className="text-[10px]">دانلود برنامه از</div>
          <div className="text-[14px]">App Store</div>
        </div>
      </Link>
      <Link
        href={"/"}
        className="flex border border-[#2299F8] rounded-lg py-2 justify-center w-32 gap-1"
      >
        <img src="./Images/google-download.svg" alt="google" />
        <div className="text-[#2299F8]">
          <div className="text-[10px]">دانلود برنامه از</div>
          <div className="text-[14px]">Google Play</div>
        </div>
      </Link>
    </div>
  );
}
