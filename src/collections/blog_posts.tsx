import { buildCollection, buildProperty } from "firecms";

export type BlogPost = {
  title: string;
  slug: string; 
  content: string;
  published: boolean;
  publishedDate?: Date; 
  featuredImage?: string;
};

export const blogPostsCollection = buildCollection<BlogPost>({
  name: "Blog Posts",
  singularName: "Blog Post",
  path: "blog-posts",
  icon: "Newspaper",
  properties: {
    title: buildProperty({ 
      name: "Title",
      dataType: "string",
      validation: { required: true },
    }),
    slug: buildProperty({
      name: "Slug",
      dataType: "string",
      description: "URL-friendly version of the title (auto-generated)",
      // You'll need to implement slug generation logic
    }),
    content: buildProperty({
      name: "Content",
      dataType: "string",
      config: {
        multiline: true,
        wysiwyg: true, 
      } as any, // Type assertion
    }),
    published: buildProperty({
      name: "Published",
      dataType: "boolean",
      defaultValue: false,
    }),
    publishedDate: buildProperty({
      name: "Published Date",
      dataType: "date",
    }),
    featuredImage: buildProperty({
      name: "Featured Image",
      dataType: "string",
      storage: {
        mediaType: "image",
        storagePath: "blog-posts",
        acceptedFiles: ["image/*"],
        storeUrl: true,
      },
    }),
  },
});