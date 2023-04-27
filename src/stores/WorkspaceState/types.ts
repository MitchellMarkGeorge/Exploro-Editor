interface WorkspaceState {
    files: File[]
    currentFile: File
    // should I use file objects or just indexes????
    setCurrentFile: (file: File) => void
    addFile: (file: File) => void
    openFiles: File[]
}

interface File {
    id: string
    content: string
    language: Language
}

type Language = any;