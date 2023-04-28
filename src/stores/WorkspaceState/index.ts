import { create } from "zustand";
import { SideBarItemType, WorkspaceState } from "./types";

export const useWorkspaceState = create<WorkspaceState>((set, get) => ({
  files: [],
  currentFileIndex: 0,
  setCurrentFile: (index) => {
    set({ currentFileIndex: index });
  },
  addFile: (file) => {
    const { files } = get();
    set({ files: [...files, file] });
  },
  openFiles: [],
  openFile: (index) => {
    const { files, openFiles } = get();
    set({ openFiles: [...openFiles, files[index]] });
  },
  closeOpenFile: (index) => {
    const { openFiles } = get();
    set({ openFiles: openFiles.splice(index, 1) });
  },
  selectedSideBarItem: SideBarItemType.Files,
  setSelectedSideBarItem: (sideBarType) => {
    set({ selectedSideBarItem: sideBarType });
  },
  isSideBarOpen: false,
  toggleSideBar: () => {
    const { isSideBarOpen } = get();
    set({ isSideBarOpen: !isSideBarOpen });
  },
}));
