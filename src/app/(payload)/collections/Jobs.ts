import { CollectionConfig } from "payload";

export const Jobs: CollectionConfig = {
  slug: "jobs",
  labels: {
    plural: "Vagas",
    singular: "Vaga",
  },
  fields: [
    {
      name: "role",
      label: "Cargo",
      type: "text",
      required: true,
    },
    {
      name: "company",
      type: "relationship",
      relationTo: "companies",
    },

    {
      name: "description",
      label: "Descrição",
      type: "text",
    },
    {
      name: "active",
      label: "Vaga ativa",
      type: "checkbox",
      defaultValue: true,
    },
  ],
};
