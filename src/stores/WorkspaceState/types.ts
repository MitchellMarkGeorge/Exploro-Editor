export interface WorkspaceState {
    files: File[]
    // currentFile: File
    currentFileIndex: number
    // should I use file objects or just indexes????
    setCurrentFile: (index: number) => void
    addFile: (file: File) => void
    openFiles: File[]
    openFile: (index: number) => void
    closeOpenFile: (index: number) => void
    selectedSideBarItem: SideBarItemType
    setSelectedSideBarItem: (sideBarType: SideBarItemType) => void
    isSideBarOpen: boolean
    toggleSideBar: () => void
    closeSideBar: () => void
}

export interface File {
    // id: string,
    name: string
    content: string
}

// type Language = any;

export enum SideBarItemType {
    Files,
    Settings,
    Theme
}