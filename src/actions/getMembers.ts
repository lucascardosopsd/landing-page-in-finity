import { payload } from "@/lib/payload";
import { MemberProps } from "@/types/cms";
import { PaginatedDocs } from "payload";

export const getMembersData = async (): Promise<PaginatedDocs<MemberProps>> => {
  return (await payload.find({
    collection: "members",
  })) as PaginatedDocs<MemberProps>;
};
