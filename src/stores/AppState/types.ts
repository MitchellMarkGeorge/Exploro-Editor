import { DefaultTheme } from "styled-components"

export interface AppState {
    // use index???
    currentTheme: Theme;
    themes: Theme[]
    changeTheme: (theme: Theme) => void
    addTheme: (theme: Theme) => void
    settings: Settings
    showSidebar: boolean
    toggleShowSidebar: () => void
}


export interface Settings {
    fileSaveLocation?: string
    autoSaveCode: boolean
    toggleAstPreview: boolean
    enableLineNumbers: boolean
    enableBracketMatching: boolean
    enableCloseBrackets: boolean
}

type Theme = DefaultTheme;