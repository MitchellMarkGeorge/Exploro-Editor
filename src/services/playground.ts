import { Playground } from "@/stores/AppState/types"
import { ipcMain, ipcRenderer } from "electron"

const createNewPlayground = (newPlayground: Playground) => {
    return ipcRenderer.invoke('new-playground', newPlayground);
    // use send()?
}

const getPlaygrounds = () => {
    return ipcRenderer.invoke('get-playgrounds') as Promise<Playground[]>;
}

export default { createNewPlayground, getPlaygrounds};