import Link from "next/link";
import Download from "../components/Download";

export default function FooterSection() {
  return (
    <footer className="section-container md:border-t py-10">
      <div className="flex flex-col lg:flex-row items-center md:justify-between xl:justify-around gap-6">
        <div className="max-w-[420px] flex flex-col gap-6">
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
        <div className="flex flex-row-reverse justify-between sm:gap-10 lg:gap-5 xl:gap-[90px] items-start md:items-center">
          <div className="hidden lg:flex flex-col gap-4 items-start">
            <h4 className="text-[18px] md:text-[20px] font-PeydaSemiBold mb-3">
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
          <div className="flex flex-col gap-3 md:gap-4 items-start">
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
          <div className="max-w-[200px] xl:max-w-none">
            <h4 className="text-base md:text-[18px] font-PeydaSemiBold mb-7">
              اطلاعات تماس
            </h4>
            <div className="flex flex-col gap-3 md:gap-6">
              <div className="flex gap-3">
                <img src="./Images/location-icon.svg" alt="location icon" className="w-[17.25px] h-[20px]" />
                <div className="text-[14px] md:text-base font-PeydaMedium">
                  لورم ایپسوم متن استفاده از طراحان گرافیک است
                </div>
              </div>
              <div className="flex gap-3">
                <img src="./Images/email-icon.svg" alt="email icon" className="w-[20px] h-[17px]" />
                <div className="text-[13px] md:text-base font-PeydaMedium">
                  contact@arman.com
                </div>
              </div>
              <div className="flex gap-3">
                <img src="./Images/phone-icon.svg" alt="phone icon" className="size-[24px]" />
                <div className="text-[14px] md:text-base font-PeydaMedium">
                  021 222 40 377
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
