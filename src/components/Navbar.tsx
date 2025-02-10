import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  const items = [
    "Notícia - Acontecimento xyz",
    "Notícia - Acontecimento xyz",
    "Notícia - Acontecimento xyz",
    "Notícia - Acontecimento xyz",
    "Notícia - Acontecimento xyz",
    "Notícia - Acontecimento xyz",
    "Notícia - Acontecimento xyz",
    "Notícia - Acontecimento xyz",
    "Notícia - Acontecimento xyz",
    "Notícia - Acontecimento xyz",
  ];

  return (
    <div className={`${poppins.className} h-20 text-background bg-blue-950`}>
      <div className="mx-auto max-w-screen-desktop p-5 px-10 tablet:px-20 flex items-center justify-between">
        <Image
          alt="logo"
          src="/logo.png"
          height={500}
          width={500}
          className="h-10 w-auto"
        />

        <Link href="#about">Quem Somos?</Link>
      </div>

      <div className="flex relative h-10 z-50">
        <Button className="bg-blue-900 text-red-500 rounded-none left-0 top-0 z-30 h-10 font-bold">
          Visitar blog
        </Button>

        <div className="flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden bg-red-500 h-full w-full">
          <InfiniteMovingCards
            items={items.map((text, idx) => (
              <p className="mx-4" key={idx}>
                {text}
              </p>
            ))}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
