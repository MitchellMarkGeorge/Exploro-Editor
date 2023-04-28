import React from 'react'
import styled from 'styled-components'
import SideBar from '../SideBar/SideBar';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import NoPlayground from '../NoPlaygound';
import { useAppState } from '@/stores/AppState';
import { useWorkspaceState } from '@/stores/WorkspaceState';

const WorkspaceContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export default function Workspace() {
  const currentPlayground = useAppState(state => state.currentPlayground);
  const isSideBarOpen = useWorkspaceState(state => state.isSideBarOpen);
  if (currentPlayground) {
    
  }
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
      <SideBar/>
      <NoPlayground/>
    </WorkspaceContainer>
  )
}
