import { all } from "redux-saga/effects";

import browserSagas from "./browser/sagas";
import genreSagas from "./genre/sagas";
import playerSagas from "./player/sagas";
import searchSagas from "./search/sagas";
import sessionSagas from "./session/sagas";
import tracklistSagas from "./tracklists/sagas";
import userSagas from "./users/sagas";
import followingsSagas from "./followings/sagas";

export default function* sagas() {
  yield all([
    ...browserSagas,
    ...genreSagas,
    ...playerSagas,
    ...searchSagas,
    ...sessionSagas,
    ...tracklistSagas,
    ...userSagas,
    ...followingsSagas,
  ]);
}
