import { payload } from "@/lib/payload";

export type JobProps = {
  id: string;
  role: string;
  company: {
    id: string;
    logo: string;
    name: string;
    email: string;
    legalName: string;
    cnpj: string;
    activityArea: string;
  };
  description: string;
  active: string;
};

export const getJobs = async (): Promise<JobProps[]> => {
  return (await payload.find({
    collection: "jobs",
  })) as unknown as JobProps[];
};
