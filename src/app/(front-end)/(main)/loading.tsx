import { Loader } from "lucide-react";

const loading = () => {
  return (
    <div className="h-svh w-full flex items-center justify-center text-red-500 bg-blue-950 gap-2">
      <Loader className="animate-spin" size={36} />
      <p className="text-2xl font-bold">Aguarde</p>
    </div>
  );
};

export default loading;
