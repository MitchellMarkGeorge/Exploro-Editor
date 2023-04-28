import { create } from "zustand";
import { AppState } from "./types";
import { defaultDarkTheme } from "@/style/themes";
import { Settings } from "./types";

const DEFAULT_SETTINGS: Settings = {
  autoSaveCode: true,
  enableBracketMatching: true,
  enableCloseBrackets: true,
  enableLineNumbers: true,
  toggleAstPreview: true,
};

export const useAppState = create<AppState>((set, get) => ({
  currentPlayground: null,
  playgrounds: [],
  setCurrentPlayground: (playground) => {
    set({ currentPlayground: playground });
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
//   showSidebar: true,
//   toggleShowSidebar: () => {
//     const { showSidebar } = get();
//     set({ showSidebar: !showSidebar });
//   },
}));
