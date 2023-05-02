import { app } from "electron";
import path from "path";

export const getDbPath = () => path.join(app.getPath('userData'), 'db.json');
export const getPlaygroundPath = (name: string) => path.join(app.getPath('userData'), 'playgrounds', name);