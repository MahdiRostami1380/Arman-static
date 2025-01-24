import AboutCarousel from "../components/AboutCarousel";

export default function About() {
  return (
    <section className="section-container flex flex-col-reverse lg:flex-row justify-between items-center py-10 gap-10 lg:gap-0">
      <AboutCarousel />
      <div className="flex flex-col gap-3 md:gap-9 items-start w-full lg:max-w-[500px] xl:max-w-[750px] 2xl:max-w-[900px]">
        <div className="text-[#41649F] text-[22px] md:text-3xl font-PeydaSemiBold">
          درباره طرح آرمان
        </div>
        <p className="text-[#202020] font-PeydaMedium tracking-tight leading-7">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع حال و آینده شناخت فراوان جامعه و متخصصان را تا با نرم افزارها
          شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقلی قرار
          گیردلورم ایپسوم متن ساختگی با تولید چاپگرها و متون بلکه روزنامه و مجله
          در ستون و سطرآنچنان که لازم است.
        </p>
        <button type="button" className="btn">
          ورود / ثبت نام
        </button>
      </div>
    </section>
  );
}
