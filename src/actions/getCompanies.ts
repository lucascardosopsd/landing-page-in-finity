"use server";

import { payload } from "@/lib/payload";

export const getAllCompanies = async () => {
  return await payload.find({
    collection: "companies",
  });
};
