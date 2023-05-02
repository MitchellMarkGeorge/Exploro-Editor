import { create } from "zustand";
import { AppState, Language } from "./types";
import { defaultDarkTheme } from "@/style/themes";
import { Settings } from "./types";
import { useWorkspaceState } from "../WorkspaceState";
import { File } from "../WorkspaceState/types";

export const DEFAULT_SETTINGS: Settings = {
  autoSaveCode: true,
  enableBracketMatching: true,
  enableCloseBrackets: true,
  enableLineNumbers: true,
  toggleAstPreview: true,
};

const getNewFileName = (language: Language) => ""

export const useAppState = create<AppState>((set, get) => ({
  currentPlayground: null,
  playgrounds: [],
  setCurrentPlayground: (playground) => {
    set({ currentPlayground: playground });
  },
  setNewPlayGround: (playground) => {
    // const {  } = useWorkspaceState.getState();
    const newfile: File = {
        content: '',
        name: getNewFileName(playground.language),
    } 

    set({
        currentPlayground: playground
    })
    useWorkspaceState.setState({
        files: [newfile],
        openFiles: [newfile],
        currentFileIndex: 0,

    })
  },
  currentTheme: defaultDarkTheme,
  themes: [defaultDarkTheme],
  addTheme: (theme) => {
    const { themes } = get();
    set({
      themes: [...themes, theme],
    });
  },
  changeTheme: (theme) => {
    set({ currentTheme: theme });
  },
  settings: DEFAULT_SETTINGS,
  updateSettings: (updates) => {
    const { settings } = get();
    set({ settings: { ...settings, ...updates } });
  },
  showNewFileModal: false,
  setShowNewFileModal: (showNewFileModal) => {
    set({ showNewFileModal });
  },
  showNewProjectModal: false,
  setShowNewProjectModal: (showNewProjectModal) => {
    set({ showNewProjectModal })
  }
  //   showSidebar: true,
  //   toggleShowSidebar: () => {
  //     const { showSidebar } = get();
  //     set({ showSidebar: !showSidebar });
  //   },
}));
