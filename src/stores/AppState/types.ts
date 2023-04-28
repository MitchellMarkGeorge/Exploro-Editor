import { DefaultTheme } from "styled-components"

export interface AppState {
    // use index???
    currentPlayground: Playground | null
    playgrounds: Playground[]
    setCurrentPlayground: (playground: Playground) => void
    currentTheme: Theme;
    // currentThemeIndex: number
    themes: Theme[]
    changeTheme: (theme: Theme) => void
    addTheme: (theme: Theme) => void
    settings: Settings
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

interface Playground {
    name: string,
    language: Language,
    lastEdited: Date// or number???
}

export type Theme = DefaultTheme;