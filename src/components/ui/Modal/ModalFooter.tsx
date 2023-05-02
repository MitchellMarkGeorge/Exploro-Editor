import React from 'react'
import styled from 'styled-components'

const ModalFooterContainer = styled.div`
    width: 100%;
    margin-top: 0.75rem;
    display: flex;
    flex: row;
    justify-content: flex-end;
    align-items: center;
    gap: 0.75rem;
    
`
interface Props {
    children: React.ReactNode
}
export default function ModalFooter({ children }: Props) {
  return (
    <ModalFooterContainer>{children}</ModalFooterContainer>
  )
}
