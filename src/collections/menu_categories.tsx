import { buildCollection, buildProperty, EntityReference } from "firecms";

// 1. Menu Categories
export type MenuCategory = {
  name: string;
  description?: string;
  order: number;
  imageUrl?: string;
};

export const menuCategoriesCollection = buildCollection<MenuCategory>({
  name: "Menu Categories",
  singularName: "Menu Category",
  path: "menu-categories",
  icon: "List",
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
    order: buildProperty({
      name: "Order",
      dataType: "number",
      description: "Lower numbers appear first",
    }),
    imageUrl: buildProperty({
      name: "Image",
      dataType: "string",
      storage: {
        mediaType: "image",
        storagePath: "menu-categories",
        acceptedFiles: ["image/*"],
        storeUrl: true,
      },
    }),
  },
});