import {
  CLIENT_ID_PARAM,
  IMAGE_DEFAULT_SIZE,
  IMAGE_XLARGE_SIZE,
  WAVEFORM_IMAGE_HOST,
  WAVEFORM_JSON_HOST,
} from "../constants";

const EN_DASH = String.fromCharCode(8211);

export const formatTrackTitle = title => {
  if (!title) {
    return "";
  }
  return title.replace(/-/g, EN_DASH);
};

export const formatStreamUrl = url => `${url}?${CLIENT_ID_PARAM}`;

export const trackImageUrl = (
  { artworkUrl, avatarUrl, user },
  size = IMAGE_XLARGE_SIZE
) => {
  const image = artworkUrl || avatarUrl || user.avatarUrl;
  return image ? image.replace(IMAGE_DEFAULT_SIZE, size) : "";
};

export const formatWaveformUrl = url => {
  if (url.includes(".json")) {
    return url;
  }
  return url
    .replace(WAVEFORM_IMAGE_HOST, WAVEFORM_JSON_HOST)
    .replace(".png", ".json");
};
