"use client";

import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <section className="min-h-svh bg-background flex items-center justify-center py-10">
      <div className="mx-auto w-full max-w-screen-desktop px-10 relative mb-40">
        <div className="h-20 flex items-center justify-center bg-blue-950 rounded p-4 sticky top-0 overflow-hidden">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <p className="text-xl text-red-500 w-full font-semibold text-start">
              Nossa História
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full overflow-clip"
        >
          <div className="space-y-5 p-2 tablet:p-5">
            <p className="text-justify">
              Lorem ipsum dolor sit amet. Ut nihil mollitia ut alias dolorem vel
              explicabo praesentium qui reprehenderit possimus. Ad galisum dolor
              hic ipsam aliquam aut totam tenetur.
            </p>

            <p className="text-justify">
              Cum alias mollitia sit dolorum placeat aut ipsam nihil ut omnis
              modi. Eum eaque perspiciatis vel unde officia qui aliquam tempora
              quo alias nesciunt aut molestiae vero vel error sequi in rerum
              atque.
            </p>

            <p className="text-justify">
              Est maxime doloribus quo commodi molestias ad suscipit repellat ut
              itaque perspiciatis rem iste eaque eum sapiente minus ut atque
              sunt. Cum alias mollitia sit dolorum placeat aut ipsam nihil ut
              omnis modi.
            </p>

            <p className="text-justify">
              Eum eaque perspiciatis vel unde officia qui aliquam tempora quo
              alias nesciunt aut molestiae vero vel error sequi in rerum atque.
              Est maxime doloribus quo commodi molestias ad suscipit repellat ut
              itaque perspiciatis rem iste eaque eum sapiente minus ut atque
              sunt. Rem perferendis praesentium rem omnis odit nam aliquam
              voluptatem ad suscipit corrupti nam recusandae veritatis. Id
              voluptatem explicabo est omnis suscipit ut repellendus sunt?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
