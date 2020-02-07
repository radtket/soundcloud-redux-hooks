import { PLAYER_STORAGE_KEY } from "../constants";

const playerStorage = {
  clear() {
    localStorage.removeItem(PLAYER_STORAGE_KEY);
  },

  getPrefs() {
    return JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {};
  },

  setPrefs(prefs) {
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(prefs));
  },

  getVolume() {
    return playerStorage.getPrefs().volume;
  },

  setVolume(value) {
    const prefs = playerStorage.getPrefs();
    prefs.volume = value;
    playerStorage.setPrefs(prefs);
  },
};

export default playerStorage;
