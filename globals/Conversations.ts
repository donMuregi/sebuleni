import { GlobalConfig } from "payload";

export const Conversations: GlobalConfig = {
  slug: "conversations",
  label: "Conversations Page",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      label: "Hero Background Image",
      admin: {
        description: "Large background image for the top of the Conversations page.",
      }
    },
    {
      name: "contentImage",
      type: "upload",
      relationTo: "media",
      label: "Content Section Image",
      admin: {
        description: "Image for the main content section.",
      }
    },
    {
      name: "previousEventsImages",
      type: "group",
      label: "Previous Events Images (Masonry Grid)",
      fields: [
        { name: "image1", type: "upload", relationTo: "media", label: "Grid Image 1" },
        { name: "image2", type: "upload", relationTo: "media", label: "Grid Image 2" },
        { name: "image3", type: "upload", relationTo: "media", label: "Grid Image 3" },
        { name: "image4", type: "upload", relationTo: "media", label: "Grid Image 4" },
        { name: "image5", type: "upload", relationTo: "media", label: "Grid Image 5" },
        { name: "image6", type: "upload", relationTo: "media", label: "Grid Image 6" }
      ]
    }
  ]
};
