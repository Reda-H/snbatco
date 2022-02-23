import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from "@chakra-ui/react";

const ModalComponent = ({
  isOpen,
  onClose,
  overlay,
  children,
  title,
  background,
}) => {
  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      size={title ? "6xl" : "7xl"}
      scrollBehavior={"inside"}
      display={title ? "flex" : "inline-block"}
    >
      {overlay}
      <ModalContent
        height={"95vh"}
        w={title ? null : "90vw"}
        display={title ? "flex" : "inline-block"}
        className="aaa"
        // background={`${background ? background : "white"}`}
      >
        <ModalHeader>{title ? title : null}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
