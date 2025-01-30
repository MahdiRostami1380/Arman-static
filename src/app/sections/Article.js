import Carousel from "@/app/components/Carousel";

export default function Article() {
  return (
    <section className="section-container py-5 md:py-10 flex items-center justify-center lg:justify-between flex-col lg:flex-row gap-10">
      <div className="flex flex-col gap-7 lg:w-[350px] xl:w-[600px] 2xl:w-[900px]">
        <h2 className="text-[22px] md:text-[34px] font-PeydaSemiBold text-[#41649F]">
          ستاد طرح شهید آرمان
        </h2>
        <p className="font-PeydaLight text-[#202020] tracking-tighter text-[14px] md:text-base">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع حال و آینده شناخت فراوان جامعه و متخصصان را تا با نرم افزارها
          شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقلی قرار
          گیردلورم ایپسوم متن ساختگی با تولید چاپگرها و متون بلکه روزنامه و مجله
          در ستون و سطرآنچنان که لازم است.
        </p>
        <button className="btn">ورود / ثبت نام</button>
      </div>
      <Carousel />
    </section>
  );
}
