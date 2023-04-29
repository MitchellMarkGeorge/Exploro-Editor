import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding-top: 20vh;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 2;
  backdrop-filter: blur(3px);
`;

const ModalWrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 2;
  border-radius: 0.5rem;
  padding: 1.5rem;
  color: ${props => props.theme.colors.primaryText};
`;

interface Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  children: React.ReactNode;
}

export default function Modal({ children, setShowModal, showModal }: Props) {
  const modalBackgroundRef = useRef<HTMLDivElement | null>(null);
  const onKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (showModal && event.key === "Escape") {
        // in case of any un
        setShowModal(false);
      }
    },
    [showModal, setShowModal]
  );

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalBackgroundRef.current === e.target) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => document.removeEventListener("keydown", onKeyPress);
  });

  return (
    <>
      {showModal ? (
        <ModalBackground onClick={closeModal} ref={modalBackgroundRef}>
          <ModalWrapper>{children}</ModalWrapper>
        </ModalBackground>
      ) : null}
    </>
  );
}
