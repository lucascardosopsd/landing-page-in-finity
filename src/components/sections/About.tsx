"use client";

import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { motion } from "motion/react";

const AboutSection = ({ textData }: { textData: SerializedEditorState }) => {
  return (
    <section
      className="min-h-svh bg-background flex items-center justify-center py-10"
      id="about"
    >
      <div className="mx-auto w-full max-w-screen-desktop px-10 relative">
        <div className="h-20 flex items-center justify-center bg-blue-950 rounded p-4 sticky top-0 overflow-hidden">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <p className="text-4xl text-red-500 w-full font-semibold text-start">
              Nossa História
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full overflow-clip pt-5"
        >
          <RichText data={textData} />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
