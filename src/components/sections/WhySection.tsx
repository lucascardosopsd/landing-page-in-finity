"use client";

import Image from "next/image";
import { HighlightWords } from "../HighlightWords";
import WhyCard from "../WhyCard";
import { useRef } from "react";
import { useInView, motion, useAnimate } from "motion/react";
import { WhyMarketingProps } from "@/types/cms";

type WhySectionProps = {
  data: WhyMarketingProps[];
};

const WhySection = ({ data }: WhySectionProps) => {
  const [imgScope, animateImg] = useAnimate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950 relative">
      <div className="hidden tablet:block absolute top-0 left-0 h-40 bg-gradient-to-t from-transparent to-blue-950 z-20"></div>

      <div className="mx-auto max-w-screen-desktop tablet:px-10 relative">
        {/* Imagem principal em dispositivos móveis */}
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            priority
            alt="megaphone"
            src="/megaphone.png"
            height={1000}
            width={1000}
            className="w-80 h-auto z-20 block tablet:hidden mx-auto"
          />
        </motion.div>

        <div className="flex z-50">
          <div className="flex flex-col flex-1 items-center justify-center tablet:gap-5 text-background py-5 ">
            <HighlightWords
              words={["Marketing"]}
              highlightClassName="font-semibold text-red-500"
              globalClassName="text-4xl z-20 p-5 w-full text-center sticky top-0 bg-gradient-to-t from-transparent via-blue-950 to-blue-950"
            >
              Por que Marketing?
            </HighlightWords>

            {data.map((card, idx) => {
              const ref = useRef(null);
              const isInView = useInView(ref, {
                margin: "-40% 0% -40% 0%",
              });

              return (
                <motion.div
                  ref={ref}
                  key={idx}
                  initial={{ scale: 0.9, filter: "blur(2px)" }}
                  animate={
                    isInView
                      ? { scale: 1, filter: "blur(0px)" }
                      : { scale: 0.9, filter: "blur(2px)" }
                  }
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="w-full"
                >
                  <WhyCard title={card.title} description={card.description} />
                </motion.div>
              );
            })}
          </div>

          {/* Imagens para tablets e desktops */}
          <div className="items-center justify-end flex-1 relative hidden tablet:flex">
            <motion.div
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.2 }}
              transition={{ duration: 10 }}
              className="z-20"
              ref={imgScope}
            >
              <Image
                alt="megaphone"
                src="/megaphone.png"
                height={1000}
                width={1000}
                className="w-full h-auto"
              />
            </motion.div>

            <Image
              alt="shape-1"
              src="/shape-01.svg"
              height={1000}
              width={1000}
              className="absolute h-full w-full bottom-0 right-0 antialiased  object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
