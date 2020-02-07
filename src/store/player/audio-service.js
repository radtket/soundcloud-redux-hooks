import { PLAYER_MAX_VOLUME, PLAYER_VOLUME_INCREMENT } from "../constants";
import playerActions from "./actions";

let audioElement;

const getTimes = ({ target }) => {
  const { buffered, currentTime, duration } = target;
  const bufferedTime = buffered.length ? buffered.end(0) : 0;

  return {
    bufferedTime,
    currentTime,
    duration,
    percentBuffered: `${(bufferedTime / duration) * 100 || 0}%`,
    percentCompleted: `${(currentTime / duration) * 100 || 0}%`,
  };
};

const getVolume = () => Math.floor(audioElement.volume * 100);

export const initAudio = (emit, audio = new Audio()) => {
  audio.addEventListener("ended", () => emit(playerActions.audioEnded()));
  audio.addEventListener("pause", () => emit(playerActions.audioPaused()));
  audio.addEventListener("playing", () => emit(playerActions.audioPlaying()));
  audio.addEventListener("timeupdate", event =>
    emit(playerActions.audioTimeUpdated(getTimes(event)))
  );
  audio.addEventListener("volumechange", () =>
    emit(playerActions.audioVolumeChanged(getVolume()))
  );

  audioElement = audio;
  return () => {};
};

export function setVolume(volume) {
  audioElement.volume = volume / 100;
}

export const audio = {
  decreaseVolume() {
    const volume = getVolume() - PLAYER_VOLUME_INCREMENT;
    if (volume >= 0) setVolume(volume);
  },

  increaseVolume() {
    const volume = getVolume() + PLAYER_VOLUME_INCREMENT;
    if (volume <= PLAYER_MAX_VOLUME) setVolume(volume);
  },

  load(url) {
    if (url) audioElement.src = url;
  },

  pause() {
    audioElement.pause();
  },

  play() {
    const promise = audioElement.play();
    if (promise && promise.catch) promise.catch(() => {});
  },

  seek(time) {
    audioElement.currentTime = time;
  },
};
