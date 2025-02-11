import { ServiceProps } from "@/types/cms";
import ServiceCard from "../ServiceCard";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

type ServicesProps = {
  services: ServiceProps[];
};

const ServicesSection = ({ services }: ServicesProps) => {
  return (
    <section className="flex items-center justify-center bg-background overflow-hidden bg-red-500">
      <div className="mx-auto relative w-full max-w-[1800px]">
        <div className="h-full w-32 absolute bg-gradient-to-r from-red-500 via-transparent to-transparent z-20" />
        <div className="h-full w-32 absolute right-0 bg-gradient-to-l from-red-500 via-transparent to-transparent z-20" />

        <InfiniteMovingCards
          items={services.map((card, idx) => (
            <ServiceCard title={card.title} image={card.image.url} key={idx} />
          ))}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
