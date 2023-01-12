import React from "react";

interface columnsProps {
  key: string;
  name: string;
}

// id: string;
// rank: string;
// symbol: string;
// name: string;
// supply: string;
// maxSupply: string;
// marketCapUsd: string;
// volumeUsd24Hr: string;
// priceUsd: string;
// changePercent24Hr: string;
// vwap24Hr: string;
// explorer: string;

const columnSchema = [
  {
    key: "rank",
    name: "Rank",
  },
  {
    key: "symbol",
    name: "Symbol",
  },
  {
    key: "name",
    name: "Name",
  },
  {
    key: "supply",
    name: "Supply",
  },
  {
    key: "volumeUsd24Hr",
    name: "Volume USD 24Hr",
  },
  {
    key: "priceUsd",
    name: "Price USD",
  },
];

export { columnSchema };
