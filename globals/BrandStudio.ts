import { GlobalConfig } from "payload";

export const BrandStudio: GlobalConfig = {
  slug: "brand_studio",
  label: "Brand Studio Page",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      label: "Hero Background Image",
    },
    {
      name: "masonryImages",
      type: "group",
      label: "Masonry Grid Images",
      fields: [
        { name: "image1", type: "upload", relationTo: "media" },
        { name: "image2", type: "upload", relationTo: "media" },
        { name: "image3", type: "upload", relationTo: "media" },
        { name: "image4", type: "upload", relationTo: "media" },
        { name: "image5", type: "upload", relationTo: "media" },
        { name: "image6", type: "upload", relationTo: "media" },
      ]
    }
  ]
};
