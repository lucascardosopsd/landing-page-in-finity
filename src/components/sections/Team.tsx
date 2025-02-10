"use client";
import Image from "next/image";
import { motion } from "motion/react";

const TeamSection = () => {
  const team = [
    {
      name: "Marcos Oliveira",
      role: "Editor de Vídeo",
      image: "/man-team.png",
    },
    {
      name: "Marcos Oliveira",
      role: "Editor de Vídeo",
      image: "/man-team.png",
    },
    {
      name: "Marcos Oliveira",
      role: "Editor de Vídeo",
      image: "/man-team.png",
    },
    {
      name: "Marcos Oliveira",
      role: "Editor de Vídeo",
      image: "/man-team.png",
    },
    {
      name: "Marcos Oliveira",
      role: "Editor de Vídeo",
      image: "/man-team.png",
    },
    {
      name: "Marcos Oliveira",
      role: "Editor de Vídeo",
      image: "/man-team.png",
    },
    {
      name: "Marcos Oliveira",
      role: "Editor de Vídeo",
      image: "/man-team.png",
    },
    {
      name: "Marcos Oliveira",
      role: "Editor de Vídeo",
      image: "/man-team.png",
    },
    {
      name: "Marcos Oliveira",
      role: "Editor de Vídeo",
      image: "/man-team.png",
    },
    {
      name: "Marcos Oliveira",
      role: "Editor de Vídeo",
      image: "/man-team.png",
    },
    {
      name: "Marcos Oliveira",
      role: "Editor de Vídeo",
      image: "/man-team.png",
    },
    {
      name: "Marcos Oliveira",
      role: "Editor de Vídeo",
      image: "/man-team.png",
    },
    {
      name: "Marcos Oliveira",
      role: "Editor de Vídeo",
      image: "/man-team.png",
    },
    {
      name: "Marcos Oliveira",
      role: "Editor de Vídeo",
      image: "/man-team.png",
    },
    {
      name: "Marcos Oliveira",
      role: "Editor de Vídeo",
      image: "/man-team.png",
    },
  ];

  return (
    <div className="min-h-svh flex items-center justify-center bg-red-500 py-20">
      <div className="mx-auto max-w-screen-desktop p-10 space-y-20 overflow-hidden">
        {/* Title */}
        <div className="sticky top-0 z-20 bg-red-500">
          <div className="relative flex flex-col justify-center items-center tablet:items-start">
            <div className="h-32 w-full bg-gradient-to-b from-red-500 to-transparent absolute top-[100%] left-0 pointer-events-none" />

            <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }}>
              <p className="text-5xl text-center z-20 mx-auto tablet:ml-0">
                Quem faz
              </p>
            </motion.div>

            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-5xl text-center z-20 mx-auto tablet:ml-0 font-bold">
                Acontecer?
              </p>
            </motion.div>
          </div>
        </div>

        {/* Cards */}
        <div className="relative overflow-hidden">
          {/* Gradients */}
          <div className="h-full w-32 bg-gradient-to-r from-red-500 to-transparent absolute top-0 left-0 z-10 pointer-events-none hidden tablet:block" />
          <div className="h-full w-32 bg-gradient-to-l from-red-500 to-transparent absolute top-0 right-0 z-10 pointer-events-none hidden tablet:block" />

          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-20">
            {team.map((data, idx) => (
              <div
                className="flex justify-center tablet:justify-start relative"
                key={idx}
              >
                <div className="h-32 w-full bg-gradient-to-t from-red-500 to-transparent absolute bottom-0 left-0" />

                <Image
                  alt="employee"
                  src={data.image}
                  height={1000}
                  width={1000}
                  className="h-full w-[400px]"
                />

                {/* mobile Titles */}
                <div className="flex tablet:hidden flex-col justify-center items-center absolute w-full bottom-0">
                  <motion.div
                    initial={{ x: 10 }}
                    whileInView={{ x: -10 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror",
                      repeatDelay: 0,
                    }}
                  >
                    <p className="text-2xl text-background font-semibold">
                      {data.name}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ x: 10 }}
                    whileInView={{ x: -10 }}
                    transition={{
                      delay: 1,
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror",
                      repeatDelay: 0,
                    }}
                  >
                    <p className="text-lg text-background">{data.role}</p>
                  </motion.div>
                </div>

                {/* Desktop Titles */}
                <div className="hidden tablet:flex flex-col justify-center items-end absolute w-full left-auto -right-28 top-0 bottom-auto">
                  <motion.div
                    initial={{ x: 20 }}
                    whileInView={{ x: 0 }}
                    exit={{ x: 20 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "mirror",
                      type: "spring",
                    }}
                  >
                    <p className="text-2xl text-background font-semibold">
                      {data.name}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ x: 20 }}
                    whileInView={{ x: 0 }}
                    exit={{ x: 20 }}
                    transition={{
                      delay: 0.2,
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "mirror",
                      type: "spring",
                    }}
                  >
                    <p className="text-lg text-background">{data.role}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
