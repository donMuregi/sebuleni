import { GlobalConfig } from 'payload';

export const Rise: GlobalConfig = {
  slug: 'rise',
  label: 'Sebuleni Rise',
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
