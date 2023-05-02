// const 
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { getDbPath } from "./paths";
import { Playground, Settings, Theme,  } from "@/stores/AppState/types";
import { DEFAULT_SETTINGS } from "@/stores/AppState";
import { defaultDarkTheme } from "@/style/themes";

interface Data   {
    playgrounds: Playground[]
    settings: Settings
    currentTheme: Theme
    themes: Theme[]
}

const defaultData: Data = {
   playgrounds: [],
   settings: DEFAULT_SETTINGS,
   currentTheme: defaultDarkTheme,
   themes: [defaultDarkTheme],
}

const adapter = new JSONFile<Data>(getDbPath());
export const db = new Low(adapter, defaultData);