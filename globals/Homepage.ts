import { GlobalConfig } from 'payload';

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'essenceImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'divisions',
      type: 'group',
      fields: [
        {
          name: 'conversationsImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'trendybImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'styledropImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'dukaImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
};
