import { GlobalConfig } from 'payload';

export const Roams: GlobalConfig = {
  slug: 'roams',
  label: 'Sebuleni Roams',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Background Image',
    },
    {
      name: 'contentImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Content Section Image',
    },
  ],
};
