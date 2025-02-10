import ServiceCard from "../ServiceCard";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const ServicesSection = () => {
  const cards = [
    {
      title: "Marketing",
      image: "/marketing.png",
    },
    {
      title: "Tráfego",
      image: "/traffic.png",
    },
    {
      title: "Design",
      image: "/design.png",
    },
    {
      title: "Copywriting",
      image: "/copywriting.png",
    },
    {
      title: "Site",
      image: "/web-dev.png",
    },
    {
      title: "Fotografia",
      image: "/pics.webp",
    },
  ];

  return (
    <section className="flex items-center justify-center bg-background overflow-hidden">
      <div className="mx-auto max-w-screen-desktop relative w-full">
        <div className="h-full w-32 absolute bg-gradient-to-r from-red-500 via-transparent to-transparent z-20" />
        <div className="h-full w-32 absolute right-0 bg-gradient-to-l from-red-500 via-transparent to-transparent z-20" />

        <InfiniteMovingCards
          items={cards.map((card, idx) => (
            <ServiceCard title={card.title} image={card.image} key={idx} />
          ))}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
