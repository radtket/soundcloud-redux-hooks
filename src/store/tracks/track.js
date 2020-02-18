import { Record } from "immutable";
import {
  formatTrackTitle,
  formatStreamUrl,
  trackImageUrl,
  formatWaveformUrl,
} from "./utils";

export const Track = new Record({
  artworkUrl: null,
  duration: null,
  id: null,
  liked: null,
  likesCount: null,
  permalinkUrl: null,
  playbackCount: null,
  streamable: null,
  streamUrl: null,
  title: null,
  userId: null,
  username: null,
  userPermalinkUrl: null,
  waveformUrl: null,
});

export const createTrack = ({
  artworkUrl,
  duration,
  favoritingsCount,
  id,
  likesCount,
  permalinkUrl,
  playbackCount,
  streamable,
  streamUrl,
  title,
  user,
  userFavorite,
  userId,
  waveformUrl,
}) => {
  return new Track({
    artworkUrl: trackImageUrl({ artworkUrl, user }),
    duration,
    id,
    liked: !!userFavorite,
    likesCount: favoritingsCount || likesCount || 0,
    permalinkUrl,
    playbackCount: playbackCount || 0,
    streamable,
    streamUrl: streamable ? formatStreamUrl(streamUrl) : null,
    title: formatTrackTitle(title),
    userId: userId || user.id,
    username: user.username,
    userPermalinkUrl: user.permalinkUrl,
    waveformUrl: formatWaveformUrl(waveformUrl),
  });
};
