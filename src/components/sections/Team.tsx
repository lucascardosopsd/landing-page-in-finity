import Image from "next/image";

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
    <div className="h-svh flex items-center justify-center sticky top-0 bg-background overflow-hidden">
      <div className="mx-auto max-w-screen-desktop bg-blue-500">
        <Image
          alt="mask"
          src="/shape-02.svg"
          height={1000}
          width={1000}
          className="h-full w-full left-0 top-0 absolute -z-10"
        />

        <div className="flex overflow-x-scroll h-full">
          {team.map((data, idx) => (
            <div className="flex relative" key={idx}>
              <div className="h-32 w-full bg-gradient-to-t from-red-500 to-transparent absolute bottom-0 left-0" />

              <div className="flex-1 w-[500px] h-auto">
                <Image
                  alt="employee"
                  src={data.image}
                  height={1000}
                  width={1000}
                  className="h-full w-full"
                />
              </div>

              <div className="flex-1 translate-y-10 -translate-x-20">
                <p className="text-2xl text-background font-semibold">
                  {data.name}
                </p>
                <p className="text-lg text-background">{data.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
