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
    return Promise.all([
      dispatch({
        url: `${API_USERS_URL}/${userId}/web-profiles`,
      }),
      dispatch({
        url: `${API_USERS_URL}/${userId}`,
      }),
    ]).then(async ([social, user]) => {
      const bannerUrl = await request
        .get(`https://cors-anywhere.herokuapp.com/${user.permalink_url}`)
        .then(res => {
          const html = res.text.split(`"visual_url":"`);
          const [image] = html && html[1].split(`"`);
          return image;
        })
        .catch(e => {
          console.log({ e });
          return null;
        });

      return {
        ...user,
        social,
        bannerUrl,
      };
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
