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
<<<<<<< HEAD
      label: "Empresa",
      type: "relationship",
      relationTo: "companies",
      admin: {
        components: {
          Field: {
            path: "@/components/payloadCMS/CompanyLabel",
          },
        },
      },
=======
      type: "relationship",
      relationTo: "companies",
>>>>>>> 3dbe53bcf03dfd329612a9c18f55685367b323f8
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
