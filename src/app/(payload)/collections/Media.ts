import { genSlug } from "@/utils/genSlug";
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    plural: "Arquivos",
    singular: "Arquivo",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: true,
  hooks: {
    beforeValidate: [
      ({ data, req }) => {
        if (req.file) {
          req.file.name = genSlug(req.file.name);
        }
        return data;
      },
    ],
  },
};
