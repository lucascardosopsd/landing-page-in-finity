import Image from "next/image";

type ServiceCardProps = {
  title: string;
  image: string;
};

const ServiceCard = ({ title, image }: ServiceCardProps) => {
  return (
    <div className="h-80 w-52 flex items-end bg-red-500 relative">
      <div className="h-full w-full absolute bg-gradient-to-t from-red-500 to-transparent mix-blend-hue" />
      <div className="h-full w-full absolute bg-gradient-to-t from-black/50 to-transparente" />
      <div className="h-[50%] w-full absolute bg-gradient-to-t from-red-500 to-transparent" />

      <Image
        alt="Service Image"
        src={image}
        height={1000}
        width={1000}
        className="w-full h-full object-cover"
      />

      <p className="uppercase font-bold text-xl absolute bottom-5 text-center w-full  z-20 text-background">
        {title}
      </p>
    </div>
  );
};

export default ServiceCard;
