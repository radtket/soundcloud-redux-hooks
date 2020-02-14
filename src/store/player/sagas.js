import { eventChannel } from "redux-saga";
import { call, fork, put, select, take } from "redux-saga/effects";

import { PLAYER_INITIAL_VOLUME } from "../constants";
import { audio, initAudio, setVolume } from "./audio-service";
import { getPlayerTrack, getPlayerTracklistCursor } from "./selectors";
import playerStorage from "./storage";

// * Actions
import {
  playSelectedTrack,
  PLAY_SELECTED_TRACK,
  AUDIO_ENDED,
  AUDIO_VOLUME_CHANGED,
} from "./actions";
import { INIT_APP } from "../app/actions";

function* playNextTrack() {
  const { nextTrackId } = yield select(getPlayerTracklistCursor);
  if (nextTrackId) {
    yield put(playSelectedTrack(nextTrackId));
  }
}

function* playTrackSelected() {
  const { streamUrl } = yield select(getPlayerTrack);
  yield call(audio.load, streamUrl);
  yield call(audio.play);
}

function* saveVolumeToStorage({ volume }) {
  yield call(playerStorage.setVolume, volume);
}

function* setVolumeFromStorage() {
  let volume = yield call(playerStorage.getVolume);
  if (typeof volume !== "number") {
    volume = PLAYER_INITIAL_VOLUME;
  }
  yield call(setVolume, volume);
}

function* subscribeToAudio() {
  const channel = yield call(eventChannel, initAudio);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

//= ====================================
//  WATCHERS
//-------------------------------------

function* watchAudioEnded() {
  while (true) {
    yield take(AUDIO_ENDED);
    yield fork(playNextTrack);
  }
}

function* watchAudioVolumeChanged() {
  while (true) {
    const { volume } = yield take(AUDIO_VOLUME_CHANGED);
    yield fork(saveVolumeToStorage, volume);
  }
}

function* watchInitApp() {
  while (true) {
    yield take(INIT_APP);
    yield fork(subscribeToAudio);
    yield fork(setVolumeFromStorage);
  }
}

function* watchPlaySelectedTrack() {
  while (true) {
    yield take(PLAY_SELECTED_TRACK);
    yield fork(playTrackSelected);
  }
}

//= ====================================
//  ROOT
//-------------------------------------

export default [
  fork(watchAudioEnded),
  fork(watchAudioVolumeChanged),
  fork(watchInitApp),
  fork(watchPlaySelectedTrack),
];
