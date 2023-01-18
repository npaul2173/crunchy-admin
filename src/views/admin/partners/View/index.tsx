import {
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { PrimaryButton } from "components/Buttons";
import { useHistory } from "react-router-dom";

export const CreatePartner = () => {
  const history = useHistory();

  const onClose = () => {
    history.replace("/admin/partners");
  };
  // bg: mode('#ffffff', 'navy.800')(props),
  return (
    <Modal isOpen={true} onClose={onClose} isCentered motionPreset="scale">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Ullamco ad amet enim tempor aliqua commodo. Officia culpa in
            consequat ullamco nisi adipisicing in ea ullamco cupidatat qui est
            non. Anim aliquip et aliqua tempor ex est culpa tempor ut ut duis
            esse enim. Consequat sit aliqua reprehenderit ut irure. Commodo et
            reprehenderit ex laborum labore ipsum cupidatat reprehenderit
            commodo. Veniam sint ex nisi officia adipisicing labore velit
            incididunt labore dolor magna.
          </Text>
        </ModalBody>

        <ModalFooter>
          <PrimaryButton
            title="New Create Partner"
            onClick={() => alert("Hi")}
          />
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

    // <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
    //   <PrimaryButton title="New Create Partner" onClick={() => alert("Hi")} />
    // </Box>
  );
};
