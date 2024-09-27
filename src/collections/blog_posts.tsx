import { buildCollection, buildProperty, EntityReference } from "firecms";
import { MenuCategory } from "./menu_categories"; // Assuming both files are in the same directory

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  category: EntityReference<MenuCategory>;
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
    name: {
      name: "Name",
      dataType: "string",
      validation: { required: true },
    },
    description: {
      name: "Description",
      dataType: "string",
      // config: {
      //   multiline: true,
      // },
    },
    price: {
      name: "Price",
      dataType: "number",
      validation: { required: true },
    },
    category: {
      name: "Category",
      dataType: "reference",
      collectionPath: "menu-categories", 
    },
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
    available: {
      name: "Available",
      dataType: "boolean",
      defaultValue: true,
    },
    tags: {
      name: "Tags",
      dataType: "array",
      description: 'Add tags like "vegetarian", "spicy", etc.',
      of: {
        dataType: "string",
      },
    },
  },
});