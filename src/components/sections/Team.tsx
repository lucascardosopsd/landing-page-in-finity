"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { MemberProps } from "@/types/cms";

type TeamSectionProps = {
  members: MemberProps[];
};

const TeamSection = ({ members }: TeamSectionProps) => {
  return (
    <div className="min-h-svh flex items-center justify-center bg-red-500 py-20">
      <div className="mx-auto max-w-screen-desktop p-10 space-y-20">
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
          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-20">
            {members.map((member, idx) => (
              <div
                className="flex justify-center tablet:justify-start relative"
                key={idx}
              >
                <div className="h-32 w-full bg-gradient-to-t from-red-500 to-transparent absolute bottom-0 left-0" />

                <Image
                  alt="employee"
                  src={member.image.url}
                  height={1000}
                  width={1000}
                  className="h-60 w-60 rounded-full border-4 border-background object-cover"
                />

                {/* mobile Titles */}
                <div className="flex flex-col justify-center items-center absolute w-full bottom-0">
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
                    <p className="text-xl text-background font-semibold text-center">
                      {member.name}
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
                    <p className="text-lg text-background">{member.role}</p>
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
