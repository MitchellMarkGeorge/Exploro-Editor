import React from 'react'
import styled from 'styled-components'
import { HiOutlineX } from 'react-icons/hi';
import ModalFooter from './ModalFooter';
import { Button } from '../Button';

interface Props {
    children: React.ReactNode
    onCloseButtonClick: () => void;
}

const ModalHeaderContainer = styled.div`
    width: 100%;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
`

const ModalHeaderCloseButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: ${props => props.theme.colors.secondaryText};
`

export default function ModalHeader({ children, onCloseButtonClick } : Props) {
  return (
    <ModalHeaderContainer>
        <div>{children}</div>
        <ModalHeaderCloseButton onClick={onCloseButtonClick}>
            <HiOutlineX /> 
        </ModalHeaderCloseButton>
    </ModalHeaderContainer>
  )
}
