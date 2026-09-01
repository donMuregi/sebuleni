import { CollectionConfig } from 'payload';

export const Products: CollectionConfig = {
  slug: 'products',
  admin: { useAsTitle: 'name' },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { 
      name: 'images', 
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true }
      ]
    },
    { name: 'category', type: 'select', options: ['Dress', 'Coat', 'Throw', 'Other'], required: true },
    { name: 'collectionYear', type: 'text' },
    { name: 'price', type: 'number' },
    { name: 'silhouettes', type: 'array', fields: [{ name: 'type', type: 'text' }, { name: 'stock', type: 'number' }] },
    { name: 'story', type: 'richText' },
    { name: 'fabricCare', type: 'richText' },
    { name: 'featured', type: 'checkbox', defaultValue: false },
    { name: 'inStock', type: 'checkbox', defaultValue: true },
  ],
};
