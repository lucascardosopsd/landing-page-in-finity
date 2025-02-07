const Citation = () => {
  return (
    <div className="h-[40svh] tablet:h-40 sticky top-0 w-full flex flex-col items-center justify-center bg-red-500 text-background p-10">
      <div className="relative">
        <p className="text-4xl font-bold absolute -left-5">"</p>

        <p className="text-2xl text-center">
          As pessoas não sabem o que querem, até mostrarmos a elas.
        </p>
        <p className="text-center tablet:text-end w-full font-semibold">
          Steve Jobs
        </p>
      </div>
    </div>
  );
};

export default Citation;
