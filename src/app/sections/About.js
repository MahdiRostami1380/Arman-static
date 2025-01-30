import AboutCarousel from "../components/AboutCarousel";

export default function About() {
  return (
    <section className="section-container">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-7 lg:gap-0">
        <AboutCarousel />
        <div className="flex flex-col gap-7 items-start w-full lg:max-w-[480px] xl:max-w-[730px] 2xl:max-w-[900px]">
          <div className="text-[#41649F] text-[22px] md:text-3xl font-PeydaSemiBold">
            درباره طرح آرمان
          </div>
          <p className="text-[#202020] font-PeydaMedium tracking-wide leading-7">
            تحول روحی شهر نیازمند بستر سازی مناسب در محله با محوریت مسجد است.
            مسجد برای اینکه نقش تحول آفرین خود را ایفا کند و به عنوان هسته
            مقاومت فرهنگی جریان‌ساز و انسان‌ساز باشد، نیازمند برنامه ریزی دقیق
            جهت تربیت نسل آینده انقلاب اسلامی است. آماده سازی فکری، اخلاقی، علمی
            و معنوی و روحیه ولایت پذیری در نوجوان و پذیرش مسئولیت‌های اجتماعی
            منظومه‌ای آینده‌ساز است که نقطه کانونی حرکت به سمت قله‌های تعلیم و
            تربیت آرمانی است. ستاد طرح شهید آرمان این توفیق را دارد که با
            شناسایی مساجد نوجوان محور محلات شهر تهران زمینه‌ی کار فرهنگی و
            تربیتی کارآمد و اثر گذار را جهت تحقق اهداف فوق با همکاری و هم‌افزایی
            ائمه جماعت و مربیان محترم فراهم آورد.
          </p>
          <button className="btn">ورود / ثبت نام</button>
        </div>
      </div>
    </section>
  );
}
