import { DefaultTheme } from "styled-components"

export interface AppState {
    // use index???
    currentPlayground: Playground | null
    playgrounds: Playground[]
    setCurrentPlayground: (playground: Playground) => void
    setNewPlayGround: (playground: Playground) => void
    currentTheme: Theme;
    // currentThemeIndex: number
    themes: Theme[]
    changeTheme: (theme: Theme) => void
    addTheme: (theme: Theme) => void
    settings: Settings
    updateSettings: (updates: Partial<Settings>) => void
    showNewFileModal: boolean
    setShowNewFileModal: (showNewFileModal: boolean) => void
    showNewProjectModal: boolean
    setShowNewProjectModal: (showNewProjectModal: boolean) => void
    // showSidebar: boolean
    // toggleShowSidebar: () => void
}


export interface Settings {
    autoSaveCode: boolean
    toggleAstPreview: boolean
    enableLineNumbers: boolean
    enableBracketMatching: boolean
    enableCloseBrackets: boolean
}

export enum Language {
    Javascipt = "JavaScript",
    TypeScript = "TypeScript",
    Python = "Python",
    Ruby = "Ruby",
    Java = "Java",
    Go = "Go",
}

export const LANGUAGES = Object.values(Language);

export interface Playground {
    name: string,
    language: Language,
    lastEdited: number
}

export type Theme = DefaultTheme;