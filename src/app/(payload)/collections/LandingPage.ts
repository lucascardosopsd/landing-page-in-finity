import { GlobalConfig } from "payload";

export const LandingPage: GlobalConfig = {
  slug: "landing-page",
  label: "Landing Page",
  fields: [
    {
      name: "services",
      label: "Serviços",
      type: "array",
      fields: [
        {
          name: "image",
          label: "Imagem",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "title",
          label: "Nome",
          type: "text",
        },
      ],
    },
    {
      name: "members",
      label: "Colaboradores",
      type: "array",
      fields: [
        {
          name: "image",
          label: "Imagem",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "name",
          label: "Nome",
          type: "text",
        },
        {
          name: "role",
          label: "Cargo",
          type: "text",
        },
      ],
    },
    {
      name: "whyMarketing",
      label: "Porquê Marketing",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Título",
        },
        {
          name: "description",
          type: "text",
          label: "Descrição",
        },
      ],
    },
  ],
};
