import { BrowserWindow, app, ipcMain } from "electron";

export class IpcHandler {
  private constructor(private currentWindow: BrowserWindow) {
    // setup listeners
    ipcMain.on('close-window', this.onCloseWindow);
    ipcMain.on('minimize-window', this.onMinimizeWindow),
    ipcMain.on('maximize-window', this.onMaximizeWindow);

  }
  static init(currentWindow: BrowserWindow) {
    new IpcHandler(currentWindow);
  }

  private onCloseWindow = () => {
    // support for multiple window
    // app.quit();
    this.currentWindow.close();
  }

  private onMinimizeWindow = () =>  {
    this.currentWindow.minimize();
  }

  private onMaximizeWindow = () => {
    if (this.currentWindow.isMaximized()) {
      this.currentWindow.unmaximize();
    } else {
      this.currentWindow.maximize();
    }
  }

}
