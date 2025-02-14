import JobForm from "@/components/forms/JobForm";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="mx-auto max-w-screen-desktop tablet:px-10 relative">
        <JobForm />
      </div>
    </div>
  );
};

export default Page;
