import { call, put } from "redux-saga/effects";
import api from "./api-service";

// Actions
import { tracklistRequestActions } from "../tracklists/actions";
import { userRequestActions } from "../users/actions";

function* fetchEntities(apiFunction, actions, id, param) {
  const { pending, fulfilled, failed } = actions;

  try {
    yield put(pending(id));
    const data = yield call(apiFunction, param || id);
    yield put(fulfilled(id, data));
  } catch (error) {
    yield put(failed(error));
  }
}

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

export const fetchUserLikes = fetchEntities.bind(
  null,
  api.fetchUserLikes,
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
