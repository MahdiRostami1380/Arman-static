import Link from "next/link";
import Download from "../components/Download";

export default function FooterSection() {
  return (
    <footer className="md:border-t py-5 md:py-10 px-3 md:px-6 xl:px-10 2xl:px-14">
      <div className="grid-template-areas-class justify-items-center  grid grid-cols-2 gap-y-6 lg:flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div
          className="max-w-full md:max-w-[420px] flex flex-col gap-6"
          style={{ gridArea: "header" }}
        >
          <img src="./Images/arman2.svg" alt="logo" className="w-fit" />
          <p className="text-[14px] md:text-base font-PeydaMedium">
            لورم ایپسوم متن استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            تکنولوژی مورد نیاز، و کاربردهای متنوع داشت.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link href={"/"}>
              <img src="./Images/enamad2.svg" alt="enamad" />
            </Link>
            <Link href={"/"}>
              <img src="./Images/enamad.svg" alt="enamad" />
            </Link>
          </div>
          <Download />
        </div>
        <div className="max-w-[200px] xl:max-w-none justify-self-start sm:justify-self-auto">
          <h4 className="text-base md:text-[18px] font-PeydaSemiBold mb-7">
            اطلاعات تماس
          </h4>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex gap-3">
              <img
                src="./Images/location-icon.svg"
                alt="location icon"
                className="w-[17.25px] h-[20px]"
              />
              <div className="text-[14px] md:text-base font-PeydaMedium">
                لورم ایپسوم متن استفاده از طراحان گرافیک است
              </div>
            </div>
            <div className="flex gap-3">
              <img
                src="./Images/email-icon.svg"
                alt="email icon"
                className="w-[20px] h-[17px]"
              />
              <div className="text-[14px] md:text-base font-PeydaMedium">
                contact@arman.com
              </div>
            </div>
            <div className="flex gap-3">
              <img
                src="./Images/phone-icon.svg"
                alt="phone icon"
                className="size-[24px]"
              />
              <div className="text-[14px] md:text-base font-PeydaMedium">
                021 222 40 377
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-4">
          <h4 className="text-base md:text-[18px] font-PeydaSemiBold mb-2 md:mb-3">
            دسترسی سریع
          </h4>
          <Link
            href={"/"}
            className="text-[14px] md:text-base font-PeydaMedium"
          >
            درباره ما
          </Link>
          <Link
            href={"/"}
            className="text-[14px] md:text-base font-PeydaMedium"
          >
            تماس با ما
          </Link>
          <Link
            href={"/"}
            className="text-[14px] md:text-base font-PeydaMedium"
          >
            درباره آرمان
          </Link>
        </div>
        <div className="flex flex-col gap-4 justify-self-end sm:justify-self-auto">
          <h4 className="text-base md:text-[18px] font-PeydaSemiBold mb-2 md:mb-3">
            دسترسی سریع
          </h4>
          <Link
            href={"/"}
            className="text-[14px] md:text-base font-PeydaMedium"
          >
            درباره ما
          </Link>
          <Link
            href={"/"}
            className="text-[14px] md:text-base font-PeydaMedium"
          >
            تماس با ما
          </Link>
          <Link
            href={"/"}
            className="text-[14px] md:text-base font-PeydaMedium"
          >
            درباره آرمان
          </Link>
        </div>
      </div>
    </footer>
  );
}
