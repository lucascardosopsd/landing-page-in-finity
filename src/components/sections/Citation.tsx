"use client";

import { motion } from "motion/react";

import TextTyping from "../TextTyping";

const Citation = () => {
  return (
    <div className="h-[40svh] tablet:h-40  w-full flex flex-col items-center justify-center bg-red-500 text-background p-10 sticky top-0 overflow-hidden">
      <div className="relative">
        <p className="text-4xl font-bold absolute tablet:-left-5">"</p>

        <div className="text-2xl text-center relative">
          <span className="hidden tablet:block">
            <TextTyping text="As pessoas não sabem o que querem, até mostrarmos a elas." />
          </span>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="block tablet:hidden"
          >
            As pessoas não sabem o que querem, até mostrarmos a elas.
          </motion.div>
        </div>
        <p className="text-center tablet:text-end w-full font-semibold">
          Steve Jobs
        </p>
      </div>
    </div>
  );
};

export default Citation;
