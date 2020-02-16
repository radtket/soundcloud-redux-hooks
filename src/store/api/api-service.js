import SC from "soundcloud";
import request from "superagent";
import {
  API_SESSION_FOLLOWINGS_URL,
  API_SESSION_LIKES_URL,
  API_SESSION_USER_URL,
  API_TRACKS_URL,
  API_USERS_URL,
  CLIENT_ID_PARAM,
  PAGINATION_PARAMS,
} from "../constants";
import { isArrayEmpty } from "../../utils/helpers";

const requestUrl = ({ paginate, query, url, oauthToken }) => {
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

  if (oauthToken) {
    params.push(`oauth_token=${oauthToken}`);
  }

  if (!isArrayEmpty(params)) {
    path += path.indexOf("?") === -1 ? "?" : "&";
    path += params.join("&");
  }

  return path;
};

const dispatch = options => {
  console.log({ options });
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

  fetchGenreResults(query) {
    return dispatch({
      paginate: true,
      query: `tags=${query}`,
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

  loginToSoundCloud: () => {
    SC.initialize({
      client_id: process.env.REACT_APP_AUTH_CLIENT_ID,
      redirect_uri: `${window.location.protocol}//${window.location.host}/callback`,
    });

    return SC.connect()
      .then(
        json => json.oauth_token,
        error => error
      )
      .catch(error => error);
  },

  fetchSessionUser: oauthToken => {
    return dispatch({
      url: `${API_SESSION_USER_URL}`,
      oauthToken,
    });
  },

  fetchSessionFollowings: oauthToken => {
    return dispatch({
      url: `${API_SESSION_FOLLOWINGS_URL}`,
      oauthToken,
    }).then(item => {
      return {
        ...item,
        followings: item.collection.reduce((all, { id }) => {
          return {
            ...all,
            [id]: true,
          };
        }, {}),
      };
    });
  },

  fetchSessionLikes: oauthToken => {
    return dispatch({
      url: `${API_SESSION_LIKES_URL}`,
      oauthToken,
    }).then(item => {
      return item.reduce((all, { streamable, id }) => {
        if (streamable) {
          return {
            ...all,
            [id]: true,
          };
        }

        return all;
      }, {});
    });
  },

  toggleLike({ id, liked, oauthToken }) {
    return dispatch({
      method: !liked ? "put" : "delete",
      url: `${API_SESSION_LIKES_URL}/${id}`,
      oauthToken,
    });
  },
};

export default api;
