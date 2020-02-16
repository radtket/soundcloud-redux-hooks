export const AUDIO_ENDED = "AUDIO_ENDED";
export const AUDIO_PAUSED = "AUDIO_PAUSED";
export const AUDIO_PLAYING = "AUDIO_PLAYING";
export const AUDIO_REPEAT_CHANGED = "AUDIO_REPEAT_CHANGED";
export const AUDIO_TIME_UPDATED = "AUDIO_TIME_UPDATED";
export const AUDIO_VOLUME_CHANGED = "AUDIO_VOLUME_CHANGED";
export const PLAY_SELECTED_TRACK = "PLAY_SELECTED_TRACK";

export const audioEnded = () => ({
  type: AUDIO_ENDED,
});

export const audioPaused = () => ({
  type: AUDIO_PAUSED,
});

export const audioPlaying = () => ({
  type: AUDIO_PLAYING,
});

export const audioTimeUpdated = times => ({
  type: AUDIO_TIME_UPDATED,
  times,
});

export const audioVolumeChanged = volume => ({
  type: AUDIO_VOLUME_CHANGED,
  volume,
});

export const audioRepeatChanged = isRepeat => {
  return {
    type: AUDIO_REPEAT_CHANGED,
    isRepeat,
  };
};

export const playSelectedTrack = ({ trackId, tracklistId }) => {
  return {
    type: PLAY_SELECTED_TRACK,
    trackId,
    tracklistId,
  };
};
