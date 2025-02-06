import Image from "next/image";
import { HighlightWords } from "../HighlightWords";
import WhyCard from "../WhyCard";

const WhySection = () => {
  const cards = [
    {
      title: "Visibilidade",
      description:
        "O marketing ajuda a tornar a empresa conhecida pelo público, construindo uma identidade forte e uma presença de mercado.",
    },
    {
      title: "Fidelização",
      description:
        "Através de estratégias como marketing de conteúdo e e-mail marketing, é possível atrair novos clientes e manter um relacionamento duradouro com os atuais, aumentando a retenção e fidelização.",
    },
    {
      title: "Diferenciação",
      description:
        "O marketing permite destacar os diferenciais da empresa, seja através de um posicionamento único, branding forte ou comunicação eficiente, ajudando a se destacar no mercado competitivo.",
    },
    {
      title: "Venda",
      description:
        "Com um bom planejamento de marketing, é possível criar campanhas eficazes que convertem leads em clientes, impulsionando as vendas e, consequentemente, o faturamento da empresa.",
    },
    {
      title: "Mercado",
      description:
        "O marketing permite acompanhar e se adaptar às mudanças do mercado, comportamento do consumidor e novas tecnologias, garantindo que a empresa se mantenha relevante e competitiva.",
    },
  ];

  return (
    <div className="min-h-[calc(100svh)] py-5 flex items-center justify-center">
      <div className="mx-auto max-w-screen-desktop tablet:px-10 relative">
        <Image
          alt="megaphone"
          src="/megaphone.png"
          height={1000}
          width={1000}
          className="w-80 h-auto z-20 block tablet:hidden mx-auto"
        />

        <div className="flex z-50">
          <div className="flex flex-col flex-1 items-center justify-center tablet:gap-5 text-background">
            <HighlightWords
              words={["Marketing"]}
              highlightClassName="font-semibold text-red-500"
              globalClassName="text-4xl z-20 p-5 w-full text-center tablet:text-start"
            >
              Por que Marketing?
            </HighlightWords>

            {cards.map((card, idx) => (
              <div className="sticky top-0" key={idx}>
                <WhyCard title={card.title} description={card.description} />
              </div>
            ))}
          </div>

          <div className="items-center justify-center flex-1 relative hidden tablet:flex">
            <Image
              alt="megaphone"
              src="/megaphone.png"
              height={1000}
              width={1000}
              className="w-full h-auto z-20 sticky top-0"
            />

            <Image
              alt="shape-1"
              src="/shape-01.svg"
              height={2000}
              width={2000}
              className="absolute h-full w-full bottom-0 right-0 antialiased"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
