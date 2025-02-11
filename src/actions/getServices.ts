import { payload } from "@/lib/payload";
import { ServiceProps } from "@/types/cms";
import { PaginatedDocs } from "payload";

export const getServicesData = async (): Promise<
  PaginatedDocs<ServiceProps>
> => {
  return (await payload.find({
    collection: "services",
  })) as PaginatedDocs<ServiceProps>;
};
