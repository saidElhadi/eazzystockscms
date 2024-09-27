import { buildCollection, buildProperty } from "firecms";

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
    order: {
      name: "Order",
      dataType: "number",
      description: "Lower numbers appear first",
    },
    imageUrl: buildProperty({ // Optional image for the category
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