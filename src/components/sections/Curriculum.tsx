import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const CurriculumSection = () => {
  return (
    <div className="min-h-[40svh] tablet:h-[40svh] flex items-center justify-center w-full bg-red-500">
      <div className="max-w-screen-desktop flex items-center justify-center h-full mx-auto mt-auto w-full">
        <div className="flex flex-col items-center justify-center tablet:flex-row gap-2 p-10 w-full">
          <div className="flex flex-col flex-1 items-center justify-center">
            <Image
              priority
              alt="curriculum"
              src="/paper.png"
              height={1000}
              width={1000}
              className="h-full w-auto"
            />
          </div>

          <div className="flex flex-col flex-1 items-center justify-center text-background">
            <p className="text-2xl tablet:text-4xl font-bold text-center">
              Procurando emprego?
            </p>

            <p className="text-xl text-center">Envie Seu currículo</p>

            <Link href="/rh" className="w-full">
              <Button className="w-full bg-blue-950 mt-5 py-10 text-2xl">
                <span>Enviar</span>
                <span>
                  <ArrowRight />{" "}
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;
