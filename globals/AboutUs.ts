import { GlobalConfig } from "payload";

export const AboutUs: GlobalConfig = {
  slug: "about_us",
  label: "About Us Page",
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
        description: "Large background image for the top of the About Us page.",
      }
    },
    {
      name: "whatIsSebuleniImages",
      type: "group",
      label: "What is Sebuleni Section Images",
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
      name: "sebuleniConversationsImages",
      type: "group",
      label: "Sebuleni Conversations Section Images",
      fields: [
        {
          name: "image1",
          type: "upload",
          relationTo: "media",
          label: "Left Image (Image 1 - translated up slightly)",
        },
        {
          name: "image2",
          type: "upload",
          relationTo: "media",
          label: "Right Image (Image 2)",
        }
      ]
    },
    {
      name: "trendyBFashionHouseImages",
      type: "group",
      label: "TrendyB Fashion House Section Images",
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
      name: "styleDropImages",
      type: "group",
      label: "Style Drop Section Images",
      fields: [
        {
          name: "image1",
          type: "upload",
          relationTo: "media",
          label: "Left Image (Image 1 - translated up slightly)",
        },
        {
          name: "image2",
          type: "upload",
          relationTo: "media",
          label: "Right Image (Image 2)",
        }
      ]
    },
    {
      name: "sebuleniDukaImages",
      type: "group",
      label: "Sebuleni Duka Section Images",
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
    }
  ]
};
