import { GlobalConfig } from 'payload';

export const Shop: GlobalConfig = {
  slug: 'shop',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'orderedProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      label: 'Pinned / Ordered Products',
      admin: {
        description: 'Select products here to force them to appear at the very top of the Shop page in the exact order you set them. Any other products not selected here will appear below these, sorted by newest first.',
      }
    },
  ],
};
