import { CollectionConfig } from "payload";

export const Orders: CollectionConfig = {
  slug: "orders",
  admin: {
    useAsTitle: "id",
    defaultColumns: ["id", "status", "total", "createdAt"],
  },
  access: {
    // Anyone can create an order (even guests)
    create: () => true,
    // Users can only read their own orders. Admins can read all.
    read: ({ req: { user } }) => {
      if (!user) return false;
      // In a real app, you'd check for admin roles. For now, we restrict to the user's ID
      // If we want admins to see all orders, we would check if user has an admin role
      // Assuming 'admin' role doesn't exist yet, we'll just allow user to read their own
      return {
        user: {
          equals: user.id,
        },
      };
    },
    // Only admins (or nobody for now from frontend) can update/delete
    update: () => false,
    delete: () => false,
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      admin: {
        description: "The registered user who placed this order (if applicable)",
      },
    },
    {
      name: "status",
      type: "select",
      defaultValue: "pending",
      options: [
        { label: "Pending", value: "pending" },
        { label: "Processing", value: "processing" },
        { label: "Shipped", value: "shipped" },
        { label: "Delivered", value: "delivered" },
        { label: "Cancelled", value: "cancelled" },
      ],
      required: true,
    },
    {
      name: "total",
      type: "number",
      required: true,
    },
    {
      name: "contactInfo",
      type: "group",
      fields: [
        { name: "firstName", type: "text", required: true },
        { name: "lastName", type: "text", required: true },
        { name: "email", type: "text", required: true },
        { name: "phone", type: "text", required: true },
      ],
    },
    {
      name: "shippingAddress",
      type: "group",
      fields: [
        { name: "street", type: "text", required: true },
        { name: "city", type: "text", required: true },
        { name: "postalCode", type: "text", required: true },
      ],
    },
    {
      name: "items",
      type: "array",
      required: true,
      fields: [
        {
          name: "product",
          type: "relationship",
          relationTo: "products",
          required: true,
        },
        {
          name: "productName",
          type: "text",
          required: true,
          admin: { description: "Snapshot of product name at time of purchase" },
        },
        {
          name: "quantity",
          type: "number",
          required: true,
          min: 1,
        },
        {
          name: "priceAtPurchase",
          type: "text",
          required: true,
          admin: { description: "Snapshot of price at time of purchase" },
        },
      ],
    },
  ],
};
