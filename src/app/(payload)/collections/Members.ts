import { CollectionConfig } from "payload";

export const Members: CollectionConfig = {
  slug: "members",
  labels: {
    plural: "Colaboradores",
    singular: "Colaborador",
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
};
