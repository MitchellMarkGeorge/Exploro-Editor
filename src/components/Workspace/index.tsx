import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import SideBar from "../SideBar/SideBar";
import {
  ImperativePanelHandle,
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";
import NoPlayground from "../NoPlaygound";
import { useAppState } from "@/stores/AppState";
import { useWorkspaceState } from "@/stores/WorkspaceState";
import SideBarView from "../SideBarView";

const WorkspaceContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const Divider = styled(PanelResizeHandle)`
  // inspired by https://www.npmjs.com/package/react-split-pane#example-styling
  background-clip: padding-box;
  background-color: ${(props) => props.theme.colors.stroke};
  z-index: 1;
  /* width: 0.75rem; */
  width: 11px;
  margin: 0 -5px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  /* margin: 0 -6px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent; */

  // TODO
  /* :hover {
    border-left: 3px solid ${(props) => props.theme.colors.primaryAccent};
    border-right: 3px solid ${(props) => props.theme.colors.primaryAccent};
  } */
`;

export default function Workspace() {
  const sideBarViewPanelRef = useRef<ImperativePanelHandle>(null);
  // const currentPlayground = useAppState((state) => state.currentPlayground);
  const isSideBarOpen = useWorkspaceState((state) => state.isSideBarOpen);
  const closeSideBar = useWorkspaceState((state) => state.closeSideBar);

  useEffect(() => {
    const panel = sideBarViewPanelRef.current;
    if (panel) {
      const isCollapsed = panel.getCollapsed();
      console.log("is collapsed", isCollapsed);
      console.log("is side bar open", isSideBarOpen);
      if (!isSideBarOpen && !isCollapsed) {
        panel.collapse();
      } else if (isSideBarOpen && isSideBarOpen) {
        panel.resize(25);
      }
    }
  }, [isSideBarOpen]);
  // if (currentPlayground) {
  // }
  return (
    // <WorkspaceContainer>
    //   <PanelGroup direction='horizontal'>
    //     <SideBar/>
    //     <Panel collapsible>{/* <SideBarView/>*/}</Panel>
    //     <PanelResizeHandle/>
    //     <Panel>
    //       <PanelGroup direction='horizontal'>
    //         <Panel collapsible>{/* <Ediror/>*/}</Panel>
    //         <PanelResizeHandle/>
    //         <Panel collapsible>{/* <ASTPreview/>*/}</Panel>
    //       </PanelGroup>
    //     </Panel>
    //   </PanelGroup>
    // </WorkspaceContainer>
    <WorkspaceContainer>
      <PanelGroup direction="horizontal">
        <SideBar />
        <Panel
          collapsible
          defaultSize={0}
          maxSize={30}
          minSize={15}
          ref={sideBarViewPanelRef}
          // this makes sure that the isSideBarOpen remains in sync
          // and is only called when it is actually collapsed
          onCollapse={(isCollapsed) => {
            // could just use a set method
            isCollapsed && closeSideBar();
          }}
        >
          <SideBarView />
        </Panel>
        <Divider />
        <Panel>
          <NoPlayground />
        </Panel>
      </PanelGroup>
    </WorkspaceContainer>
  );
}
