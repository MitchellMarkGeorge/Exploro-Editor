import React, { useState } from "react";
import styled from "styled-components";
import SideBarItem from "./components/SideBarItem";
// import { HiDocument } from "react-icons/hi";
import { HiPaintBrush, HiCog8Tooth, HiDocument } from "react-icons/hi2";
import { SideBarItemType } from "@/stores/WorkspaceState/types";
import { useWorkspaceState } from "@/stores/WorkspaceState";

const SideBarContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 0.5rem 0.75rem;
  border-right: 1px solid ${(props) => props.theme.colors.stroke};
`;

const sideBarItems = [
  {
    icon: HiDocument,
    type: SideBarItemType.Files,
  },
  { icon: HiCog8Tooth, type: SideBarItemType.Settings },
  {
    icon: HiPaintBrush,
    type: SideBarItemType.Theme,
  },
];

export default function SideBar() {
  const selectedSideBarItem = useWorkspaceState(state => state.selectedSideBarItem);
  const isSideBarOpen = useWorkspaceState(state => state.isSideBarOpen);
  const setSelectedSideBarItem = useWorkspaceState(state => state.setSelectedSideBarItem);
  return (
    <SideBarContainer>
      {sideBarItems.map((item) => (
        <SideBarItem
          onClick={() => setSelectedSideBarItem(item.type)}
          icon={item.icon}
          isSelected={selectedSideBarItem === item.type}
          isSideBarOpen={isSideBarOpen}
          key={item.type}
        />
      ))}
    </SideBarContainer>
  );
}
