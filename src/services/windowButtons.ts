import { ipcRenderer } from "electron"

const closeWindow = () => {
    ipcRenderer.send('close-window');
}

const minimizeWindow = () => {
    ipcRenderer.send('minimize-window');
}

const maximizeWindow = () => {
    ipcRenderer.send('maximize-window');
}

export default { closeWindow, minimizeWindow, maximizeWindow };