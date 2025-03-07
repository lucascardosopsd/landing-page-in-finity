import { Media } from "payload/generated-types";

export type MemberProps = {
  id: string;
  image: Media;
  name: string;
  role: string;
};

export type ServiceProps = {
  id: string;
  image: Media;
  title: string;
};

export type WhyMarketingProps = {
  id: string;
  title: string;
  description: string;
};

export type NewsProps = {
  id: string;
  title: string;
  url: string;
};

export type Job = {
  id: string;
  role: string;
  company?: Company;
  description?: string;
  active: boolean;
};

export type Company = {
  id: string;
  logo: Media;
  name: string;
  email: string;
  legalName: string;
  cnpj: string;
  address: string;
  activityArea: string;
};
