import { Alert, Box, Button } from "@chakra-ui/react";
import { PrimaryButton } from "components/Buttons";
import { SearchBar } from "components/SearchBar";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ListView } from "./List";

export type PartnerModel = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
};

export const Partners = () => {
  const history = useHistory();

  const [data, setData] = useState<PartnerModel[]>([]);
  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets", {
      method: "GET",
      redirect: "follow",
    })
      .then(async (response) => {
        const data = await response.json();
        setData(data.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <PrimaryButton
        title="Create Transaction"
        onClick={() => {
          history.replace("/admin/partners/create");
        }}
      />

      <Box m={"20px"}>
        <SearchBar onEnterPress={(value) => console.log(value)} />
      </Box>

      <ListView data={data} />
    </Box>
  );
};
