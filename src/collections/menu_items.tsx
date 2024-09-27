import { buildCollection, buildProperty, EntityReference } from "firecms";

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  category: EntityReference; // Reference to MenuCategory
  imageUrl?: string;
  available: boolean;
  tags: string[];
};

export const menuItemsCollection = buildCollection<MenuItem>({
  name: "Menu Items",
  singularName: "Menu Item",
  path: "menu-items",
  icon: "FoodBank",
  properties: {
    name: buildProperty({
      name: "Name",
      validation: { required: true },
      dataType: "string",
    }),
    description: buildProperty({
      name: "Description",
      dataType: "string",
      config: {
        multiline: true,
      } as any, // Type assertion 
    }),
    price: buildProperty({
      name: "Price",
      dataType: "number",
      validation: { required: true },
    }),
    category: buildProperty({ // Reference field
      name: "Category",
      dataType: "reference",
      collectionPath: "menu-categories",
    }),
    imageUrl: buildProperty({
      name: "Image",
      dataType: "string",
      storage: {
        mediaType: "image",
        storagePath: "menu-items",
        acceptedFiles: ["image/*"],
        storeUrl: true,
      },
    }),
    available: buildProperty({
      name: "Available",
      dataType: "boolean",
      defaultValue: true,
    }),
    tags: buildProperty({
      name: "Tags",
      dataType: "array",
      description: 'Add tags like "vegetarian", "spicy", etc.',
      of: buildProperty({
        dataType: "string",
      }),
    }),
  },
});