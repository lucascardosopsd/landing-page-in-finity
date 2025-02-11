import { payload } from "@/lib/payload";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import {
  MemberProps,
  NewsProps,
  ServiceProps,
  WhyMarketingProps,
} from "@/types/cms";

type LandingPageProps = {
  services: ServiceProps[];
  members: MemberProps[];
  whyMarketing: WhyMarketingProps[];
  news: NewsProps[];
  history: SerializedEditorState;
};

export const getLandingPage = async (): Promise<LandingPageProps> => {
  return (await payload.findGlobal({
    slug: "landing-page",
  })) as LandingPageProps;
};
