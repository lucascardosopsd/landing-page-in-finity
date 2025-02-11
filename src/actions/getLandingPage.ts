import { payload } from "@/lib/payload";
import { MemberProps, ServiceProps, WhyMarketingProps } from "@/types/cms";

type LandingPageProps = {
  services: ServiceProps[];
  members: MemberProps[];
  whyMarketing: WhyMarketingProps[];
};

export const getLandingPage = async (): Promise<LandingPageProps> => {
  return (await payload.findGlobal({
    slug: "landing-page",
  })) as LandingPageProps;
};
