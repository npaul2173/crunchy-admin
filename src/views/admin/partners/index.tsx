import { Box } from "@chakra-ui/react";
import { SearchBar } from "components/SearchBar";
export const Partners = () => {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Custom Searrch Bar Created */}
      <SearchBar />
    </Box>
  );
};
