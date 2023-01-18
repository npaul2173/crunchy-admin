import { Button } from "@chakra-ui/react";
import { CustomButtonProps } from "../interface";

export const PrimaryButton: React.FC<CustomButtonProps> = ({
  title,
  ...props
}) => {
  return (
    <Button
      variant="darkBrand"
      color="white"
      fontSize="sm"
      fontWeight="500"
      borderRadius="70px"
      px="24px"
      py="5px"
      {...props}
    >
      {title}
    </Button>
  );
};
