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

export const getVolume = () => Math.floor(audioElement.volume * 100);

export const getIsMuted = () => audioElement.muted;

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

  console.log({ audioElement });
  return () => {};
};

export function setVolume(volume) {
  audioElement.volume = volume / 100;
  audioElement.muted = volume === 0;
}

export const audio = {
  changeVolume(newVolume) {
    const volume = getVolume();

    if (volume >= 0) {
      setVolume(newVolume);
    }
  },

  toggleMuted() {
    audioElement.muted = !audioElement.muted;
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
