<<<<<<< HEAD
import { getJobs } from "@/actions/getJobs";
import JobForm from "@/components/forms/JobForm";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const Page = async () => {
  console.log(await getJobs());

  return (
    <div
      className={`h-[calc(100svh-18rem)] tablet:h-[calc(100svh-15rem)] w-full flex items-center justify-center relative ${roboto.className}`}
    >
      <div className="mx-auto w-full px-10 relative max-w-screen-desktop">
=======
import JobForm from "@/components/forms/JobForm";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="mx-auto max-w-screen-desktop tablet:px-10 relative">
>>>>>>> 3dbe53bcf03dfd329612a9c18f55685367b323f8
        <JobForm />
      </div>
    </div>
  );
};

export default Page;
