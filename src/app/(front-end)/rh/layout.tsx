import Footer from "@/components/Footer";
import Link from "next/link";
import { ReactNode } from "react";

import { Roboto } from "next/font/google";
const roboto = Roboto({
<<<<<<< HEAD
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
=======
    subsets: ["latin"]
  })
>>>>>>> 3dbe53bcf03dfd329612a9c18f55685367b323f8

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
<<<<<<< HEAD
      <div className={`w-full ${roboto.className}`}>
=======
      <div className="w-full">
>>>>>>> 3dbe53bcf03dfd329612a9c18f55685367b323f8
        <div className="mx-auto max-w-screen-desktop p-5 h-20 flex justify-between">
          <Link href="/" className="font-semibold">
            <p>Início</p>
          </Link>

<<<<<<< HEAD
          <div className={`flex items-center gap-4`}>
=======
          <div className={`flex items-center gap-4 ${}`}>
>>>>>>> 3dbe53bcf03dfd329612a9c18f55685367b323f8
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
