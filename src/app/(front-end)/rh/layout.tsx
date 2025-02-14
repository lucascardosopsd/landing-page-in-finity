import Footer from "@/components/Footer";
import Link from "next/link";
import { ReactNode } from "react";

import { Roboto } from "next/font/google";
const roboto = Roboto({
    subsets: ["latin"]
  })

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="w-full">
        <div className="mx-auto max-w-screen-desktop p-5 h-20 flex justify-between">
          <Link href="/" className="font-semibold">
            <p>Início</p>
          </Link>

          <div className={`flex items-center gap-4 ${}`}>
            <p className="text-5xl font-bold text-red-500">RH</p>

            <div className="h-full w-1 bg-blue-900" />

            <p className="text-5xl font-bold">IN-FINITY</p>
          </div>
        </div>
      </div>
      {children}
      <Footer />
    </>
  );
};

export default layout;
