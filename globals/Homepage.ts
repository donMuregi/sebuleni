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
        {
          name: 'roamsImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'riseImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'ecosystemCards',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'featuredProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      label: 'Featured Products (Shop items)',
      admin: {
        description: 'Select the specific products you want to display in the Our Collection section on the homepage.',
      }
    },
  ],
};
