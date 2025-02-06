type WhyCardProps = {
  title: string;
  description: string;
};

const WhyCard = ({ title, description }: WhyCardProps) => {
  return (
    <div className="min-h-40 w-full bg-blue-950 border-blue-100/30 border relative overflow-hidden p-4 rounded-none tablet:rounded bg-gradient-to-tl from-blue-100/30 via-transparent to-blue-200/15">
      <p className="text-xl text-red-500 font-semibold">{title}</p>
      <p className="text-background">{description}</p>
    </div>
  );
};

export default WhyCard;
