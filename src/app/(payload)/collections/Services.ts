import { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  labels: {
    plural: "Serviços",
    singular: "Serviços",
  },
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
};
