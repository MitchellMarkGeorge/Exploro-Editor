import { Playground } from "@/stores/AppState/types";
import { db } from "./db";
import { File } from "@/stores/WorkspaceState/types";
import { gererateInitPlaygroundFile, savePlaygroundFiles } from "./playgroundFiles";

export const getPlaygrounds = async () => {
    await db.read();
    return db.data.playgrounds;
};

export const createPlayground = async (newPlayGround: Playground) => {
    db.data.playgrounds.push(newPlayGround);
    await db.write();
    await gererateInitPlaygroundFile(newPlayGround);
}

export const savePlayground = async (playground: Playground, files: File[]) => {
    const playGroundIndex = db.data.playgrounds.findIndex((p) => p.name === playground.name)
    if (playGroundIndex !== -1) {
        db.data.playgrounds[playGroundIndex] = playground; // basically to update the time edited
        await db.write();
        savePlaygroundFiles(playground.name, files);
    }
}