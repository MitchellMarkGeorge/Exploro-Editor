import { ipcMain, ipcRenderer } from "electron"

const createNewPlayground = () => {
    ipcRenderer.send('new-ground')
}