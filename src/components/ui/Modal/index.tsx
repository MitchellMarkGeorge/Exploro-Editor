import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 2;
  backdrop-filter: blur(3px);
`;

const ModalWrapper = styled.div`
  position: relative;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.background};
  z-index: 2;
  border-radius: 0.5rem;
  padding: 1.5rem;
  color: ${props => props.theme.colors.primaryText};
  max-height: 22.5rem;
  min-width: 18.75rem;
  max-width: 22.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

`;

interface Props {
  showModal: boolean;
  closeModal: () => void
  // setShowModal: (showModal: boolean) => void;
  children: React.ReactNode;
}

export function Modal({ children, closeModal, showModal }: Props) {
  const modalBackgroundRef = useRef<HTMLDivElement | null>(null);
  const onKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (showModal && event.key === "Escape") {
        // in case of any un
        closeModal();
      }
    },
    [showModal, closeModal]
  );

  const closeModalOnBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalBackgroundRef.current === e.target) {
      closeModal()
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => document.removeEventListener("keydown", onKeyPress);
  });

  return (
    <>
      {showModal ? (
        <ModalBackground onClick={closeModalOnBackground} ref={modalBackgroundRef}>
          <ModalWrapper>{children}</ModalWrapper>
        </ModalBackground>
      ) : null}
    </>
  );
}

