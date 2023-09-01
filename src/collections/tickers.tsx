import { buildCollection, buildProperty, EntityReference } from "firecms";

export type Product = {
  company_name: string;
  security_name: string;
  market_category: string;
  symbol: string;
  company_logo_url: string;
  description: string;
};

export const tickersCollection = buildCollection<Product>({
  name: "Tickers",
  singularName: "Ticker",
  path: "financial_assets",
  icon: "Coin",
  group: "App",
  // ... other collection properties ...
  properties: {
    symbol: buildProperty({
      name: "Symbol",
      dataType: "string",
    }),
    company_name: {
      name: "Name",
      validation: { required: true },
      dataType: "string",
    },
    security_name: {
      name: "uid",
      dataType: "string",
    },
    market_category: buildProperty({
      dataType: "string",
      name: "type",
      enumValues: {
        crypto: "Crypto",
        stock: "Stock",
        etf: "ETF",
        index: "Index",
        currency: "Currency",
        commodity: "Commodity",
        bond: "Bond",
        future: "Future",
        other: "Other",
        Q: 'Q',
        G: 'G',
        S: 'S',
      },
    }),
    company_logo_url: buildProperty({
      name: "Main Image",
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
    description: buildProperty({
      name: "Description",
      dataType: "string",
      config: {
        multiline: true,
      },
    }),



    // ... other properties ...
  },
});
