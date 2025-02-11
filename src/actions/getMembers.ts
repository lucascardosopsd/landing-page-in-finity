import { payload } from "@/lib/payload";

export const getMembersData = async () => {
  return await payload.find({
    collection: "member",
  });
};
