import request from "superagent";
import {
  API_TRACKS_URL,
  API_USERS_URL,
  CLIENT_ID_PARAM,
  PAGINATION_PARAMS,
} from "../constants";

const requestUrl = ({ paginate, query, url }) => {
  let path = url;
  const params = [];

  if (!path.includes(CLIENT_ID_PARAM)) {
    params.push(CLIENT_ID_PARAM);
  }
  if (paginate) {
    params.push(PAGINATION_PARAMS);
  }
  if (query) {
    params.push(query);
  }

  if (params.length) {
    path += path.indexOf("?") === -1 ? "?" : "&";
    path += params.join("&");
  }

  return path;
};

const dispatch = options => {
  return request[options.method || "get"](requestUrl(options))
    .set("Accept", "application/json")
    .then(response => response.body);
};

const api = {
  fetch(url) {
    return dispatch({ url });
  },

  fetchSearchResults(query) {
    return dispatch({
      paginate: true,
      query: `q=${query}`,
      url: API_TRACKS_URL,
    });
  },

  fetchUser(userId) {
    return dispatch({
      url: `${API_USERS_URL}/${userId}`,
    });
  },

  fetchUserLikes(userId) {
    return dispatch({
      paginate: true,
      url: `${API_USERS_URL}/${userId}/favorites`,
    });
  },

  fetchUserTracks(userId) {
    return dispatch({
      paginate: true,
      url: `${API_USERS_URL}/${userId}/tracks`,
    });
  },
};

export default api;
