import React from 'react'
import styled from "styled-components";
import SideBarItem from './components/SideBarItem';

const SideBarContainer = styled.div`
    height: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding: 0.5rem 0.75rem;
    border-right: 1px solid ${props => props.theme.colors.stroke};
`


export default function SideBar() {
  return (
    <SideBarContainer>
        {/* <SideBarItem/>
        <SideBarItem/>
        <SideBarItem/> */}
    </SideBarContainer>
  )
}
