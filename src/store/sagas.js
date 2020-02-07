import { all } from "redux-saga/effects";

import { browserSagas } from "./browser/sagas";
import { tracklistSagas } from "./tracklists/sagas";

export default function* sagas() {
  yield all([...browserSagas, ...tracklistSagas]);
}
