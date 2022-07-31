import React from "react";
import Modal from "react-native-modal";
import { Button } from "../Button";
import { Container, Description, Title } from "./styles";

type NativeModalProps = {
  description: string;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
};

export const NativeModal = ({ description, isVisible, setIsVisible }: NativeModalProps) => {
  return (
    <Modal isVisible={isVisible}>
      <Container>
        <Description>
          {description}
        </Description>
        <Button title="OK" onPress={() => setIsVisible(!isVisible)} />
      </Container>
    </Modal>
  );
};
