import Image from "next/image";
import Parallax from "../Parallax";

const MaskSection = () => {
  return (
    <section className="h-[200svh] mt-10 py-5 flex items-center justify-center relative bg-background overflow-clip">
      <div className="mx-auto max-w-screen-desktop px-10 relative mb-40">
        <p className="text-7xl tablet:text-[200px] text-blue-950 flex flex-col justify-center items-center leading-none sticky top-0">
          <span className="font-bold">Quem</span>
          <span>Somos?</span>
        </p>

        <Parallax className="-translate-y-80">
          <Image
            alt="mask"
            src="/mask.png"
            height={1000}
            width={1000}
            className="h-auto w-full"
          />
        </Parallax>
      </div>
    </section>
  );
};

export default MaskSection;
