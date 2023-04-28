import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

interface Props {
  isSelected: boolean;
  isSideBarOpen: boolean;
  icon: IconType;
  onClick: () => void;
}

const SideBarItemContainer = styled.div<
  Pick<Props, "isSelected" | "isSideBarOpen">
>`
  padding: 0.75rem;
  border-radius: 0.5rem;
  display: flex;
  background-color: ${(props) => {
    if (props.isSelected && props.isSideBarOpen)
      return props.theme.colors.primaryAccent;
    if (props.isSelected) return props.theme.colors.secondaryAccent;
    return "transparent";
  }};
  color: ${(props) => props.theme.colors.primaryText};
  :hover {
    ${(props) => {
      if (!props.isSelected)
        return `background-color: ${props.theme.colors.secondaryAccent}`;
    }}
  }
`;

export default function SideBarItem({
  icon: Icon,
  isSelected,
  isSideBarOpen,
  onClick,
}: Props) {
  return (
    <SideBarItemContainer
      isSelected={isSelected}
      isSideBarOpen={isSideBarOpen}
      onClick={onClick}
    >
      <Icon size="1rem" />
    </SideBarItemContainer>
  );
}
