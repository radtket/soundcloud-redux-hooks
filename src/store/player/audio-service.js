// Actions
import {
  audioEnded,
  audioPaused,
  audioPlaying,
  audioRepeatChanged,
  audioTimeUpdated,
  audioVolumeChanged,
} from "./actions";

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

export const initAudio = (dispatch, audio = new Audio()) => {
  audio.addEventListener("ended", () => dispatch(audioEnded()));
  audio.addEventListener("pause", () => dispatch(audioPaused()));
  audio.addEventListener("playing", () => dispatch(audioPlaying()));
  audio.addEventListener("timeupdate", event =>
    dispatch(audioTimeUpdated(getTimes(event)))
  );
  audio.addEventListener("volumechange", () =>
    dispatch(audioVolumeChanged(getVolume()))
  );

  dispatch(audioRepeatChanged(audio.loop));

  audioElement = audio;

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

  toggleRepeat() {
    audioElement.loop = !audioElement.loop;
  },

  toggleMuted() {
    audioElement.muted = !audioElement.muted;
  },

  load(url) {
    if (url) {
      audioElement.src = url;
    }
  },

  pause() {
    audioElement.pause();
  },

  play() {
    audioElement.play().catch(e => {
      console.log({ e });
    });
  },

  seek(time) {
    audioElement.currentTime = time;
  },
};
