import { useCallback } from "react";

import { useDataEnhancementPlugin } from "@firecms/data_enhancement";

import { User as FirebaseUser } from "firebase/auth";
import { Authenticator, FirebaseCMSApp } from "firecms";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";

import { firebaseConfig } from "./firebase-config.ts";
import { usersCollection } from "./collections/users.tsx";
import { tickersCollection } from "./collections/tickers.tsx";

export default function App() {
  const myAuthenticator: Authenticator<FirebaseUser> = useCallback(
    async ({ user, authController }) => {
      if (user?.email?.includes("flanders")) {
        throw Error("Stupid Flanders!");
      }
      console.log("Allowing access to", user?.email);
      const sampleUserRoles = await Promise.resolve(["admin"]);
      authController.setExtra(sampleUserRoles);

      return true;
    },
    []
  );

  const dataEnhancementPlugin = useDataEnhancementPlugin({
    getConfigForPath: ({ path }) => {
      return true;
    },
  });

  return (
    <FirebaseCMSApp
      name={"EazzyStocks Admin"} 
      plugins={[]}
      authentication={myAuthenticator}
      collections={[usersCollection, tickersCollection]}
      firebaseConfig={firebaseConfig}
    />
  );
}
