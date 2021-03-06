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

export const FEATURED_USER_ID = 3926410;

//*  Session *//
export const API_SESSION_USER_URL = `${API_BASE_URL}/me`;
export const API_SESSION_FOLLOWINGS_URL = `${API_SESSION_USER_URL}/followings`;
export const API_SESSION_LIKES_URL = `${API_SESSION_USER_URL}/favorites`;
export const API_SESSION_PLAYLISTS_URL = `${API_SESSION_USER_URL}/playlists`;
export const API_SESSION_STREAM_URL = `${API_SESSION_USER_URL}/activities/tracks/affiliated`;

export const CLIENT_ID_PARAM = `client_id=${CLIENT_ID}`;

export const PAGINATION_LIMIT = 50;
export const PAGINATION_PARAMS = `linked_partitioning=1&limit=${PAGINATION_LIMIT}`;

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
export const FEATURED_TRACKLIST_ID = `${FEATURED_USER_ID}/favorites`;

export const SESSION_HISTORY_TRACKLIST_ID = `session/history`;
export const SESSION_STREAM_TRACKLIST_ID = `session/stream`;
export const SESSION_LIKES_TRACKLIST_ID = `session/likes`;
export const SESSION_FOLLOWINGS_TRACKLIST_ID = `session/followings`;

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

//* ====================================
//* PAGINATION
//*------------------------------------

export const FOLLOWINGS_PER_PAGE = 15;
export const FEATURED_FOLLOWINGLIST_ID = `${FEATURED_USER_ID}/followings`;
