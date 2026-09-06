import { GlobalConfig } from "payload";

export const TrendyB: GlobalConfig = {
  slug: "trendy_b",
  label: "Trendy B Page",
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
        description: "Large background image for the top of the TrendyB page.",
      }
    },
    {
      name: "brandOverviewImages",
      type: "group",
      label: "Brand Overview Section Images",
      fields: [
        {
          name: "image1",
          type: "upload",
          relationTo: "media",
          label: "Left Image (Image 1)",
        },
        {
          name: "image2",
          type: "upload",
          relationTo: "media",
          label: "Right Image (Image 2 - translated down slightly)",
        }
      ]
    },
    {
      name: "visionImages",
      type: "group",
      label: "Our Vision Section Images",
      fields: [
        {
          name: "image1",
          type: "upload",
          relationTo: "media",
          label: "Left Image (Image 3 - translated up slightly)",
        },
        {
          name: "image2",
          type: "upload",
          relationTo: "media",
          label: "Right Image (Image 4)",
        }
      ]
    },
    {
      name: "standForImages",
      type: "group",
      label: "What We Stand For Section Images",
      fields: [
        {
          name: "image1",
          type: "upload",
          relationTo: "media",
          label: "Left Image (Image 5)",
        },
        {
          name: "image2",
          type: "upload",
          relationTo: "media",
          label: "Right Image (Image 6 - translated down slightly)",
        }
      ]
    }
  ]
};
