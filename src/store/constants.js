//* ========================================================
//* CONSTANTS
//*--------------------------------------------------------
export const APP_NAME = "soundcloud-redux-hooks";

//* ====================================
//* API
//*------------------------------------
export const API_BASE_URL = "https://api.soundcloud.com";
export const API_TRACKS_URL = `${API_BASE_URL}/tracks`;
export const API_USERS_URL = `${API_BASE_URL}/users`;

export const CLIENT_ID = process.env.REACT_APP_SOUNDCLOUD_CLIENT_ID;

//*  Session *//
export const API_SESSION_USER_URL = `${API_BASE_URL}/me`;
export const API_SESSION_FOLLOWINGS_URL = `${API_SESSION_USER_URL}/followings`;
export const API_SESSION_LIKES_URL = `${API_SESSION_USER_URL}/favorites`;
export const API_SESSION_PLAYLISTS_URL = `${API_SESSION_USER_URL}/playlists`;
export const API_SESSION_STREAM_URL = `${API_SESSION_USER_URL}/activities/tracks/affiliated`;

export const CLIENT_ID_PARAM = `client_id=${CLIENT_ID}`;

export const PAGINATION_LIMIT = 60;
export const PAGINATION_PARAMS = `limit=${PAGINATION_LIMIT}&linked_partitioning=1`;

//* ====================================
//* IMAGES
//*------------------------------------
export const IMAGE_DEFAULT_SIZE = "large.jpg";
export const IMAGE_XLARGE_SIZE = "t500x500.jpg";

//* ====================================
//* PLAYER
//*------------------------------------
export const PLAYER_INITIAL_VOLUME = 10;
export const PLAYER_MAX_VOLUME = 100;

export const PLAYER_STORAGE_KEY = `${APP_NAME}:player`;

//* ====================================
//* TRACKLISTS
//*------------------------------------
export const FEATURED_TRACKLIST_USER_ID = 3926410;
export const FEATURED_TRACKLIST_ID = `${FEATURED_TRACKLIST_USER_ID}/featured`;

export const SESSION_TRACKLIST_ID = "session";

export const TRACKS_PER_PAGE = 15;

//* ====================================
//* WAVEFORMS
//*------------------------------------
export const WAVEFORM_IMAGE_HOST = "w1.sndcdn.com";
export const WAVEFORM_JSON_HOST = "wis.sndcdn.com";

//* ====================================
//* SESSION
//*------------------------------------

export const COOKIE_PATH = "oauthToken";

export const GENRES = {
  chill: "chill house",
  deep: "deep house",
  dubstep: "dubstep",
  house: "house",
  progressive: "progressive house",
  tech: "tech house",
  trance: "trance",
  tropical: "tropical house",
};

export const TIMES = [
  { key: "7", label: "7 days" },
  { key: "30", label: "30 days" },
  { key: "90", label: "90 days" },
];
