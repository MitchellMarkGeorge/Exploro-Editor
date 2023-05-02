import {
  ensureFile,
  existsSync,
  outputFile,
  pathExists,
  pathExistsSync,
} from "fs-extra";
import { getPlaygroundPath } from "./paths";
import path from "path";
import { readdir, readFile } from "fs/promises";
import { File } from "@/stores/WorkspaceState/types";
import { Language, Playground } from "@/stores/AppState/types";

export const readPlaygroundFiles = async (playgroundName: string) => {
  const playgroundPath = getPlaygroundPath(playgroundName);
  const playGroundFiles: File[] = [];
  if (pathExistsSync(playgroundPath)) {
    const files = await readdir(playgroundPath);
    for (const fileName of files) {
      const filePath = path.join(playgroundPath, fileName);
      playGroundFiles.push({
        name: fileName,
        content: await readPlaygroundFile(filePath),
      });
    }
  }
  return playGroundFiles;
};

export const readPlaygroundFile = async (filePath: string) => {
  return await readFile(filePath, "utf-8");
};

export const savePlaygroundFiles = async (
  playgroundName: string,
  files: File[]
) => {
  const playgroundPath = getPlaygroundPath(playgroundName);
  for (const file of files) {
    const filePath = path.join(playgroundPath, file.name);
    await outputFile(filePath, file.content);
  }
};

export const gererateInitPlaygroundFile = async (playground: Playground) => {
  const playgroundPath = getPlaygroundPath(playground.name);
  switch (playground.language) {
    case Language.Javascipt:
      await ensureFile(path.join(playgroundPath, "index.js"));
      break;
    case Language.TypeScript:
      await ensureFile(path.join(playgroundPath, "index.ts"));
      break;
    case Language.Go:
      await ensureFile(path.join(playgroundPath, "main.go"));
      break;
    case Language.Java:
      await ensureFile(path.join(playgroundPath, "Main.java"));
      break;
    case Language.Python:
      await ensureFile(path.join(playgroundPath, "main.py"));
      break;
    case Language.Ruby:
      await ensureFile(path.join(playgroundPath, "main.rb"));
      break;
  }
};
