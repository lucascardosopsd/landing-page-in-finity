import { payload } from "@/lib/payload";

export const getCompanyById = async (id: string) => {
  return await payload.findByID({
    collection: "companies",
    id,
  });
};
