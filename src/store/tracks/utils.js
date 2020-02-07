/* eslint-disable camelcase */
import {
  CLIENT_ID_PARAM,
  IMAGE_DEFAULT_SIZE,
  IMAGE_XLARGE_SIZE,
  WAVEFORM_IMAGE_HOST,
  WAVEFORM_JSON_HOST,
} from "../constants";

const EN_DASH = String.fromCharCode(8211);

export const formatTrackTitle = title => {
  if (!title) return "";
  return title.replace(/-/g, EN_DASH);
};

export const streamUrl = url => `${url}?${CLIENT_ID_PARAM}`;

export const trackImageUrl = (
  { artwork_url, user },
  size = IMAGE_XLARGE_SIZE
) => {
  return (artwork_url || user.avatar_url).replace(IMAGE_DEFAULT_SIZE, size);
};

export const waveformUrl = url => {
  if (url.includes(".json")) {
    return url;
  }
  return url
    .replace(WAVEFORM_IMAGE_HOST, WAVEFORM_JSON_HOST)
    .replace(".png", ".json");
};
