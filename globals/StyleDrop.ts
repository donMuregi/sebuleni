import { GlobalConfig } from "payload";

export const StyleDrop: GlobalConfig = {
  slug: "style_drop",
  label: "Style Drop Page",
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
        description: "Large background image for the top of the Style Drop page.",
      }
    },
    {
      name: "stylistImage",
      type: "upload",
      relationTo: "media",
      label: "Stylist Section Image",
      admin: {
        description: "Image for the Nakhulo Khamia personalized styling section.",
      }
    },
    {
      name: "manyStylesImages",
      type: "group",
      label: "Many Styles Section Images (Masonry Grid)",
      fields: [
        {
          name: "image1",
          type: "upload",
          relationTo: "media",
          label: "Grid Image 1",
        },
        {
          name: "image2",
          type: "upload",
          relationTo: "media",
          label: "Grid Image 2",
        },
        {
          name: "image3",
          type: "upload",
          relationTo: "media",
          label: "Grid Image 3",
        },
        {
          name: "image4",
          type: "upload",
          relationTo: "media",
          label: "Grid Image 4",
        },
        {
          name: "image5",
          type: "upload",
          relationTo: "media",
          label: "Grid Image 5",
        },
        {
          name: "image6",
          type: "upload",
          relationTo: "media",
          label: "Grid Image 6",
        }
      ]
    }
  ]
};
