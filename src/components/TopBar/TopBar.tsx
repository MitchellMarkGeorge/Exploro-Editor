import React from "react";
import styled from "styled-components";
import { TrafficLightButton } from "./components/TrafficLightButton";
import { Button } from "../ui/Button";

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  /* padding: 0.75em; */
  background-color: ${(props) => props.theme.colors.topBarBackground};
  flex-direction: row;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.stroke};
  -webkit-app-region: drag;
  user-select: none;
  /* font-size: 1rem; */
`;

const TrafficLightButtonContainer = styled.div`
  /* display: inline; */
  // could also use flex
  & > * + * {
    margin-left: 0.5rem;
  }
`;

const TopBarTitle = styled.div`
  font-size: 0.875rem;
  
`;

export default function TopBar() {
  return (
    <TopBarContainer>
      <TrafficLightButtonContainer>
        <TrafficLightButton color="#D14343" />
        <TrafficLightButton color="#FFB020" />
        <TrafficLightButton color="#52BD95" />
      </TrafficLightButtonContainer>
      <TopBarTitle>Exploro Editor</TopBarTitle>
      <Button>New File</Button>
    </TopBarContainer>
  );
}
