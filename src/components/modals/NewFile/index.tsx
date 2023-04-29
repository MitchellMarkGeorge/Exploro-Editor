import React from "react";
import Modal from "../../ui/Modal";
import { Heading } from "@/components/ui/Heading";
import { useAppState } from "@/stores/AppState";

export default function NewFileModal() {
  const showNewFileModal = useAppState((state) => state.showNewFileModal);
  const setShowNewFileModal = useAppState(
    (state) => state.setShowNewFileModal
  );
  return (
    <Modal
      showModal={showNewFileModal}
      setShowModal={setShowNewFileModal}
    >
      <Heading>Hello</Heading>
    </Modal>
  );
}

