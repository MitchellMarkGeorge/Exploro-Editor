import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

interface Props {
  isSelected: boolean;
  isSideBarOpen: boolean;
  icon: IconType;
}

const SideBarItemContainer = styled.div<
  Pick<Props, "isSelected" | "isSideBarOpen">
>`
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: ${(props) => {
    if (props.isSelected && props.isSideBarOpen)
      return props.theme.colors.primaryAccent;
    if (props.isSelected) return props.theme.colors.secondaryAccent;
    return "transparent";
  }};
  color: ${(props) => props.theme.colors.primaryText};
`;

export default function SideBarItem({
  icon: Icon,
  isSelected,
  isSideBarOpen,
}: Props) {
  return (
    <SideBarItemContainer isSelected={isSelected} isSideBarOpen={isSideBarOpen}>
      <Icon size="1rem" />
    </SideBarItemContainer>
  );
}
