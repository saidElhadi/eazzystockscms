import {
  AdditionalFieldDelegate,
  buildCollection,
  buildProperty,
  EntityReference,
} from "firecms";


export type User = {
  displayName: string;
  uid: string;
  email: string;
  phoneNumber: string;
  photoURL: string;

  wachlist: string[];
  sign_up: string;
  last_sign_in: string;
};

export const usersCollection = buildCollection<User>({
  name: "Users",
  singularName: "User",
  path: "users",
  icon: "User",
  group: "App",
  properties: {
    displayName: {
      name: "Name",
      dataType: "string",
    },
    uid: {
      name: "uid",
      dataType: "string",
    },
    email: {
      name: "email",
      dataType: "string",
    },
    phoneNumber: {
      name: "phone",
      dataType: "string",
    },
    photoURL: buildProperty({
      name: "Profile Image",
      dataType: "string",
      storage: {
        mediaType: "image",
        storagePath: "images/users",
        acceptedFiles: ["image/*"],
        storeUrl: true,
        metadata: {
          cacheControl: "max-age=1000000",
        },
      },
    }),
    wachlist: {
      name: "Wachlist",
      dataType: "array",
      of: buildProperty({
        name: "Wachlist",
        dataType: "string",
        properties: {
          
        },
      }),
    },
    sign_up: {
      name: "Sign up",
      dataType: "string",
    },
    last_sign_in: {
      name: "Last sign in",
      dataType: "string",
    },

    // ... other properties ...
  },
});
