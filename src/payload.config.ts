// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import { pt } from "@payloadcms/translations/languages/pt";
import { Media } from "./app/(payload)/collections/Media";
import { LandingPage } from "./app/(payload)/collections/LandingPage";
import { Jobs } from "./app/(payload)/collections/Jobs";
import { Companies } from "./app/(payload)/collections/Company";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  globals: [LandingPage],
  collections: [Jobs, Companies, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "/src/types/payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: "public-read",
      },
    }),
  ],
  upload: {
    limits: {
      fileSize: 500000, // 500kb
    },
  },
  i18n: {
    supportedLanguages: { pt },
  },
});
