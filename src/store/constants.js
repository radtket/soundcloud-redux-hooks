//* ========================================================
//*  CONSTANTS
//*---------------------------------------------------------
export const APP_NAME = "soundcloud-redux-hooks";

//* ====================================
//*  API
//*-------------------------------------
export const API_BASE_URL = "https://api.soundcloud.com";
export const API_TRACKS_URL = `${API_BASE_URL}/tracks`;
export const API_USERS_URL = `${API_BASE_URL}/users`;

export const CLIENT_ID = process.env.REACT_APP_SOUNDCLOUD_CLIENT_ID;
export const CLIENT_ID_PARAM = `client_id=${CLIENT_ID}`;

export const PAGINATION_LIMIT = 60;
export const PAGINATION_PARAMS = `limit=${PAGINATION_LIMIT}&linked_partitioning=1`;

//* ====================================
//*  TRACKLISTS
//*-------------------------------------
export const FEATURED_TRACKLIST_ID = "featured";
export const FEATURED_TRACKLIST_USER_ID = 3926410;
