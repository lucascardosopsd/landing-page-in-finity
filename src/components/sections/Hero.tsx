"use client";

import Image from "next/image";
import { HighlightWords } from "../HighlightWords";
import { Button } from "../ui/button";

import { motion } from "motion/react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="min-h-[calc(100svh-5rem)] flex items-center justify-center relative bg-blue-950">
      {/* Text Section */}
      <div className="mx-auto max-w-screen-desktop p-10 py-20">
        <div className="flex flex-col gap-10 tablet:gap-0 tablet:flex-row tablet:items-center text-4xl tablet:text-5xl">
          <div className="flex flex-col flex-1 justify-start text-background gap-4">
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }}>
              <HighlightWords
                words={["Adaptamos", "recursos", "atender", "necessidades"]}
                highlightClassName="font-bold"
                globalClassName="text-center tablet:text-start max-w-[600px]"
              >
                Adaptamos os nossos recursos para atender às suas necessidades
              </HighlightWords>
            </motion.div>

            <Link
              href="https://api.whatsapp.com/send?phone=5517997122513"
              className="z-50"
            >
              <Button className="p-5 w-full bg-red-500 text-blue-950 hover:text-background font-bold text-xl tablet:text-2xl desktop:text-3xl uppercase">
                <motion.div
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Mais informações
                </motion.div>
              </Button>
            </Link>

            <div className="relative">
              <motion.div
                initial={{ width: "100%" }}
                whileInView={{ width: "0%" }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute left-0 top-0 z-20 h-full w-full"
              >
                <div className="w-full h-full bg-red-500 " />
              </motion.div>

              <HighlightWords
                words={["+", "De", "200", "empresas"]}
                highlightClassName="font-bold"
                globalClassName="text-lg tablet:text-xl text-center tablet:text-start z-20"
              >
                + De 200 empresas escolheram progredir
              </HighlightWords>
            </div>
          </div>

          <div className="flex-1 items-center justify-center w-full h-full relative">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-0 z-40 right-0 left-0 mx-auto"
            >
              <p className="text-background text-base w-full text-center">
                Luide Mendes - CEO
              </p>
            </motion.div>

            <div className="h-full w-full max-h-[400px] bg-gradient-to-t from-blue-950 to-transparent z-20 absolute bottom-0 left-0" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Image
                priority
                alt="luide Amorin"
                src="/luide-site.png"
                height={1000}
                width={1000}
                className="h-full w-auto max-h-[70svh] mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
