import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";
import { Products } from "./collections/Products";
import { Branches } from "./collections/Branches";
import { Media } from "./collections/Media";
import { Homepage } from "./globals/Homepage";
import { TrendyB } from "./globals/TrendyB";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: { user: "users" },
  collections: [
    { slug: "users", auth: true, fields: [] },
    Products,
    Branches,
    Media,
  ],
  globals: [
    Homepage,
    TrendyB,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "sebuleni-secret",
  db: sqliteAdapter({ client: { url: "file:./payload.db" } }),
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
});
