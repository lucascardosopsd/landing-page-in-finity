import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Poppins } from "next/font/google";
import { NewsProps } from "@/types/cms";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type NavbarProps = {
  news: NewsProps[];
};

const Navbar = ({ news }: NavbarProps) => {
  return (
    <div className={`${poppins.className} h-20 text-background bg-blue-950`}>
      <div className="mx-auto max-w-screen-desktop p-5 px-10 tablet:px-20 flex items-center justify-center tablet:justify-between bg-blue-950">
        <Image
          alt="logo"
          src="/logo.png"
          height={500}
          width={500}
          className="h-8 w-auto"
        />

        <Link href="#about" className="hidden tablet:block z-50">
          Quem Somos?
        </Link>
      </div>

      <div className="flex relative h-10 z-50">
        <Link href="https://in-finitynews.com/" target="_blank">
          <Button className="bg-blue-900 text-red-500 rounded-none left-0 top-0 z-30 h-10 font-bold">
            Visitar blog
          </Button>
        </Link>

        <div className="flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden bg-red-500 h-full w-full">
          <InfiniteMovingCards
            className="w-full"
            fade={true}
            items={news.map((data, idx) => (
              <p className="mx-4" key={idx}>
                {data.title}
              </p>
            ))}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
