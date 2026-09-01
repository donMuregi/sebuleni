import { CollectionConfig } from 'payload';

export const Branches: CollectionConfig = {
  slug: 'branches',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    { name: 'address', type: 'text' },
    { name: 'videoUrl', type: 'text' },
  ],
};
