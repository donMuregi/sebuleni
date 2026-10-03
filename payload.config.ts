import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";
import { Products } from "./collections/Products";
import { Branches } from "./collections/Branches";
import { Media } from "./collections/Media";
import { Homepage } from "./globals/Homepage";
import { TrendyB } from "./globals/TrendyB";
import { AboutUs } from "./globals/AboutUs";
import { StyleDrop } from "./globals/StyleDrop";
import { Conversations } from "./globals/Conversations";
import { Roams } from "./globals/Roams";
import { Rise } from "./globals/Rise";
import { Blogs } from "./collections/Blogs";
import { Orders } from "./collections/Orders";
import { Events } from "./collections/Events";
import { BrandStudio } from "./globals/BrandStudio";
import { Shop } from "./globals/Shop";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: { user: "users" },
  collections: [
    { 
      slug: "users", 
      auth: true, 
      access: {
        create: () => true,
      },
      fields: [] 
    },
    Products,
    Branches,
    Media,
    Blogs,
    Orders,
    Events,
  ],
  globals: [
    Homepage,
    TrendyB,
    AboutUs,
    StyleDrop,
    Conversations,
    Roams,
    Rise,
    BrandStudio,
    Shop,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "sebuleni-secret",
  db: process.env.DATABASE_URI 
    ? postgresAdapter({ pool: { connectionString: process.env.DATABASE_URI, max: 5 }, push: true })
    : sqliteAdapter({ client: { url: "file:./payload.db" }, push: true }),
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
});
