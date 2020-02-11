const playerActions = {
  AUDIO_ENDED: "AUDIO_ENDED",
  AUDIO_PAUSED: "AUDIO_PAUSED",
  AUDIO_PLAYING: "AUDIO_PLAYING",
  AUDIO_REPEAT_CHANGED: "AUDIO_REPEAT_CHANGED",
  AUDIO_TIME_UPDATED: "AUDIO_TIME_UPDATED",
  AUDIO_VOLUME_CHANGED: "AUDIO_VOLUME_CHANGED",
  PLAY_SELECTED_TRACK: "PLAY_SELECTED_TRACK",

  audioEnded: () => ({
    type: playerActions.AUDIO_ENDED,
  }),

  audioPaused: () => ({
    type: playerActions.AUDIO_PAUSED,
  }),

  audioPlaying: () => ({
    type: playerActions.AUDIO_PLAYING,
  }),

  audioTimeUpdated: times => ({
    type: playerActions.AUDIO_TIME_UPDATED,
    payload: times,
  }),

  audioVolumeChanged: volume => ({
    type: playerActions.AUDIO_VOLUME_CHANGED,
    payload: {
      volume,
    },
  }),

  audioRepeatChanged: isRepeat => {
    return {
      type: playerActions.AUDIO_REPEAT_CHANGED,
      payload: {
        isRepeat,
      },
    };
  },

  playSelectedTrack: (trackId, tracklistId) => ({
    type: playerActions.PLAY_SELECTED_TRACK,
    payload: {
      trackId,
      tracklistId,
    },
  }),
};

export default playerActions;
