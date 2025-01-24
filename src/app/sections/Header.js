import Menu from "@/app/components/Menu";

export default function Header() {
  return (
    <header className="text-white relative">
      <Menu />
      <div className="bg-[url('/Images/Hero.jfif')] bg-cover w-full h-[371px] md:h-[633px] bg-center"></div>
      <div className="absolute top-0 left-0 w-full h-[371px] md:h-[633px] bg-gradient-to-b from-black/90 to-transparent"></div>
      <div className="container px-3 left-1/2 text-center -translate-x-1/2 flex items-center justify-center absolute top-0 h-[371px] md:h-[633px] text-base md:text-[30px] lg:text-[54px] font-PeydaSemiBold z-10 leading-6 lg:leading-[70px]">
        برای اینکه عضو خانواده آرمان شوید هم اکنون اقدام کنید
      </div>
    </header>
  );
}
