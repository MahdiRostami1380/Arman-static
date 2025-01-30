import AccordionItem from "@/app/components/AccordionItem";
import { QandAs } from "@/app/data/Q&As";

export default function Accordion() {
  return (
    <section className="section-container py-5 md:py-10">
      <div className="font-PeydaSemiBold text-center text-[22px] md:text-[34px] mb-10 mt-4">
        سوالات متداول
      </div>
      <div className="flex flex-col gap-5">
        {QandAs.map((item, index) => (
          <AccordionItem key={index} q={item.q} a={item.a} index={index + 1} />
        ))}
      </div>
    </section>
  );
}
