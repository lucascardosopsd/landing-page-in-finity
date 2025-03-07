import { CollectionConfig } from "payload";

export const Companies: CollectionConfig = {
  slug: "companies",
  labels: {
    singular: "Empresa",
    plural: "Empresas",
  },
  fields: [
    {
      name: "logo",
      label: "Logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "name",
      label: "Nome Fantasia",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "E-mail",
      type: "text",
      required: true,
      validate: (email: any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return "E-mail inválido";
        }
        return true;
      },
    },
    {
      name: "legalName",
      label: "Razão Social",
      type: "text",
      required: true,
    },
    {
      name: "cnpj",
      label: "CNPJ",
      type: "text",
      required: true,
<<<<<<< HEAD
=======
      validate: (text: any) =>
        text
          .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
            name: "CNPJ",
            invert: false,
          })
          .error("CNPJ inválido"),
>>>>>>> 3dbe53bcf03dfd329612a9c18f55685367b323f8
    },
    {
      name: "address",
      label: "Endereço",
      type: "text",
      required: true,
    },
    {
      name: "activityArea",
      label: "Área de Atuação",
      type: "text",
      required: true,
    },
  ],
};
