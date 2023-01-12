import { IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import React, { PureComponent, useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onEnterPress?: (value: string) => void;
}
export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const { placeholder, onEnterPress } = props;
  const searchIconColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("white", "navy.700");
  const inputText = useColorModeValue("gray.700", "gray.100");

  return (
    <Stack spacing={3}>
      <InputGroup h="50px" w={{ base: "100%" }}>
        <InputLeftElement
          children={
            <IconButton
              aria-label="search"
              bg="inherit"
              borderRadius="inherit"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
              icon={<SearchIcon color={searchIconColor} w="15px" h="15px" />}
            />
          }
        />
        <Input
          variant="search"
          fontSize="sm"
          color={inputText}
          bg={inputBg}
          fontWeight="500"
          borderRadius={"30px"}
          _placeholder={{ color: "gray.400", fontSize: "14px" }}
          placeholder={placeholder ? placeholder : "Search..."}
          onKeyDown={(data) => {
            if (data.key === "Enter") {
              onEnterPress(searchValue);
            }
          }}
          onChange={({ target }) => {
            setSearchValue(target.value);
          }}
        />
      </InputGroup>
    </Stack>
  );
};
