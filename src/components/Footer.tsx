import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-52 tablet:h-40 w-full bg-blue-950 flex items-center justify-center">
      <div className="max-w-screen-desktop mx-auto grid grid-cols-1 tablet:grid-cols-2 gap-10 p-10 w-full">
        <div className="flex items-center justify-center tablet:justify-start">
          <Image
            alt="Logo"
            src="/logo.png"
            height={500}
            width={500}
            className="w-auto h-10"
          />
        </div>

        <div className="text-background flex flex-col items-center tablet:items-start justify-center">
          <p className="text-center tablet:text-start">
            In-Finity - Pesquisa, Jornalismo e Marketing Luide Amorim Mendes
          </p>
          <p>CNPJ - 21.553.247/0001-05</p>
          <p>Rua 13, 2502 - Centro, Jales-SP</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
