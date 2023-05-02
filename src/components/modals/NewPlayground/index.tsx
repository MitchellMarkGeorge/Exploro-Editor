import React, { useState } from "react";
import { Modal } from "../../ui/Modal";
import { Heading } from "@/components/ui/Heading";
import { useAppState } from "@/stores/AppState";
import ModalHeader from "@/components/ui/Modal/ModalHeader";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import ModalFooter from "@/components/ui/Modal/ModalFooter";
import Select from "@/components/ui/Select";
import { LANGUAGES, Language, Playground } from "@/stores/AppState/types";
import { ModalItem } from "@/components/ui/Modal/ModalItem";
import playground from "@/services/playground";
import { useWorkspaceState } from "@/stores/WorkspaceState";

export default function NewPlaygroundModal() {
  const showNewProjectModal = useAppState((state) => state.showNewProjectModal);
  const setCurrentPlayground  = useAppState((state) => state.setCurrentPlayground);
  const setShowNewProjectModal = useAppState(
    (state) => state.setShowNewProjectModal
  );
  const l = useWorkspaceState(state => state.)
  const [playgroundName, setPlaygroundName] = useState("");
  const [playgroundLanguage, setPlaygroundLanguage] = useState<Language>(
    LANGUAGES[0]
  );

  const closeModal = () => setShowNewProjectModal(false);
  const createPlayground = async () => {
    const newPlayground: Playground = {
      language: playgroundLanguage,
      name: playgroundName,
      lastEdited: Date.now(),
    }
    // ??? loading 
    await playground.createNewPlayground(newPlayground);
    
    
  }
  return (
    <Modal showModal={showNewProjectModal} closeModal={closeModal}>
      <ModalHeader onCloseButtonClick={closeModal}>New Playground</ModalHeader>
      <ModalItem>
        <div>Name</div>
        <Input
          placeholder="Name"
          value={playgroundName}
          onChange={(e) => setPlaygroundName(e.target.value)}
        />
      </ModalItem>
      <ModalItem>
        <div>Language</div>
        <Select
          value={playgroundLanguage}
          onChange={(value) => setPlaygroundLanguage(value as Language)}
          options={LANGUAGES}
        />
      </ModalItem>
      <ModalFooter>
        <Button variant="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button onClick={closeModal}>Create Project</Button>
      </ModalFooter>
    </Modal>
  );
}
