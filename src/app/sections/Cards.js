import Card from "@/app/components/Card";
import { CardsInfo } from "@/app/data/Cards";

export default function Cards() {
  return (
    <section className="section-container py-5 md:py-10">
      <div className="text-[22px] md:text-[34px] text-center font-PeydaSemiBold tracking-tighter mb-10">
        آرمان در یک نگاه
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 justify-items-center md:grid-cols-2 lg:flex lg:justify-between">
        {CardsInfo.map((item) => (
          <Card
            key={item.id}
            subject={item.subject}
            description={item.description}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
}
