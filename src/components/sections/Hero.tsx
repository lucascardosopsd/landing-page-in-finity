import Image from "next/image";
import { HighlightWords } from "../HighlightWords";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="h-[calc(100svh-5rem)] mt-10 py-5 flex items-center justify-center relative overflow-hidden">
      <Image
        alt="Radial gradient"
        src="/radial-shape-1.png"
        height={2000}
        width={2000}
        className="absolute -right-[25%] -top-[25%] z-50 hidden tablet:block select-none pointer-events-none"
      />

      <div className="mx-auto max-w-screen-desktop px-10">
        <div className="flex items-center text-4xl tablet:text-5xl">
          <div className="flex flex-col flex-1 justify-start text-background gap-4">
            <HighlightWords
              words={["Adaptamos", "recursos", "atender", "necessidades"]}
              highlightClassName="font-bold"
              globalClassName="text-center tablet:text-start max-w-[600px]"
            >
              Adaptamos os nossos recursos para atender às suas necessidades
            </HighlightWords>

            <Button className="p-5 w-full bg-red-500 text-blue-950 font-bold text-xl tablet:text-2xl desktop:text-4xl uppercase">
              Mais informações
            </Button>

            <HighlightWords
              words={["+", "De", "200", "empresas"]}
              highlightClassName="font-bold"
              globalClassName="text-lg tablet:text-xl text-center tablet:text-start"
            >
              + De 200 empresas escolheram progredir
            </HighlightWords>
          </div>

          <div className="flex-1 items-center justify-center w-full h-full hidden tablet:flex relative">
            <p className="absolute bottom-0 z-40 text-background text-base">
              Luide Amorin - CEO
            </p>

            <div className="h-full w-full max-h-[400px] bg-gradient-to-t from-blue-950 to-transparent z-20 absolute bottom-0 left-0" />

            <Image
              alt="man"
              src="/man.png"
              height={1000}
              width={1000}
              className="h-full w-auto max-h-[400px] tablet:max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
