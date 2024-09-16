import { Settings } from "./schema";
import { getSettings } from "./controllers";

export let settings: Settings = {
  authorizedCookieGivers: [],
  isNumbersOnlyEnabled: false,
};

export const loadSettings = async () => {
  settings = (await getSettings()) ?? settings;
  console.log("✅  Settings Loaded!");
};
