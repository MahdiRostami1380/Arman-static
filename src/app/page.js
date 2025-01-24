import Footer from "@/app/sections/Footer";
import About from "@/app/sections/About";
import Accordion from "@/app/sections/Accordion";
import Cards from "@/app/sections/Cards";
import Header from "@/app/sections/Header";
import Copyright from "@/app/components/Copyright";
import Article from "@/app/sections/Article";

export default function Home() {
  return (
    <>
      <Header />
      <Article />
      <Cards />
      <About />
      <Accordion />
      <Footer />
      <Copyright />
    </>
  );
}
