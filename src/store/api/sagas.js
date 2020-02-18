import { call, put } from "redux-saga/effects";
import api from "./api-service";

// Actions
import { tracklistRequestActions } from "../tracklists/actions";
import { userRequestActions } from "../users/actions";

function* fetchEntities(
  apiFunction,
  { pending, fulfilled, failed },
  { id, oauthToken, query, url, resource }
) {
  try {
    yield put(pending({ id }));
    const data = yield call(apiFunction, {
      id,
      oauthToken,
      query,
      resource,
      url,
    });
    yield put(fulfilled({ id, data }));
  } catch (error) {
    yield put(failed(error));
  }
}

export const fetchGenreResults = fetchEntities.bind(
  null,
  api.fetchGenreResults,
  tracklistRequestActions
);

export const fetchNextTracks = fetchEntities.bind(
  null,
  api.fetch,
  tracklistRequestActions
);

export const fetchSearchResults = fetchEntities.bind(
  null,
  api.fetchSearchResults,
  tracklistRequestActions
);

export const fetchUserTracks = fetchEntities.bind(
  null,
  api.fetchUserTracks,
  tracklistRequestActions
);

export const fetchUser = fetchEntities.bind(
  null,
  api.fetchUser,
  userRequestActions
);
