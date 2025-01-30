import Menu from "@/app/components/Menu";

export default function Header() {
  return (
    <header className="text-white relative">
      <Menu />
      <div className="bg-[url('/Images/Hero.jpg')] bg-cover bg-center h-[371px] md:h-[633px]"></div>
      <div className="absolute top-0 left-0 w-full h-[371px] md:h-[633px] bg-gradient-to-b from-black/90 to-transparent"></div>
    </header>
  );
}
