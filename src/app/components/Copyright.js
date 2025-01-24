import Link from "next/link";

export default function Copyright() {
  return (
    <div className="sm:h-[91px] bg-[#41649F] py-5">
      <div className="flex gap-3 flex-col-reverse sm:flex-row justify-between items-center h-full sm:w-9/12 mx-auto">
        <div className="text-white text-[12px] sm:text-base font-PeydaLight">
          تمام حقوق این سایت متعلق به وبسایت آرمان میباشد.
        </div>
        <div className="flex gap-2 sm:gap-3">
          <Link href={"/"}>
            <img src="./Images/Socials/twitter.svg" alt="twitter" />
          </Link>
          <Link href={"/"}>
            <img src="./Images/Socials/linkedin.svg" alt="linkedin" />
          </Link>
          <Link href={"/"}>
            <img src="./Images/Socials/telegram.svg" alt="telgram" />
          </Link>
          <Link href={"/"}>
            <img src="./Images/Socials/instagram.svg" alt="instagram" />
          </Link>
        </div>
      </div>
    </div>
  );
}
