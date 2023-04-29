import React from "react";
import Modal from "../../ui/Modal";
import { Heading } from "@/components/ui/Heading";
import { useAppState } from "@/stores/AppState";

export default function NewProjectModal() {
  const showNewProjectModal = useAppState((state) => state.showNewProjectModal);
  const setShowNewProjectModal = useAppState(
    (state) => state.setShowNewProjectModal
  );
  return (
    <Modal
      showModal={showNewProjectModal}
      setShowModal={setShowNewProjectModal}
    >
      <Heading>Hello</Heading>
    </Modal>
  );
}
