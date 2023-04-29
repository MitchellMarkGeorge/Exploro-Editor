import React from "react";
import { ViewContainer } from "../ViewContainer";
import styled from "styled-components";
import { HiPlus } from "react-icons/hi";
import { ViewHeader, ViewHeaderButton } from "../ui";
import { useWorkspaceState } from "@/stores/WorkspaceState";

const FileViewHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  font-size: 0.75rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.stroke};
`;

const FileViewHeaderButton = styled.div`
  color: ${(props) => props.theme.colors.secondaryText};
  vertical-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  cursor: pointer;
  border-radius: 0.5rem;
  :hover {
    background-color: ${(props) => props.theme.colors.secondaryAccent};
  }
`;

const NoFilesText = styled.div`
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  text-align: center;
  color: ${(props) => props.theme.colors.secondaryText};
  width: 100%;
`;

const FileList = styled.div`
  display: flex;
  /* height: 100%; */

`;

export default function FileView() {
  const files = useWorkspaceState((state) => state.files);
  return (
    <ViewContainer>
      <ViewHeader>
        <div>Files</div>
        <ViewHeaderButton>
          <HiPlus size={"1rem"} />
        </ViewHeaderButton>
      </ViewHeader>
      <FileList>
      {!files.length && <NoFilesText>No Files.</NoFilesText>}
      </FileList>
    </ViewContainer>
  );
}
