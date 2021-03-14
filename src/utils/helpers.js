import camelize from "camelize";
import { HTML_ELEMENTS } from "./constants";

export const isArrayEmpty = arrayArg => {
  if (arrayArg && arrayArg.length) {
    return false;
  }
  return true;
};

export const cleanTrackJson = json => {
  return {
    collection: (json.collection || json)
      .map(song => song.origin || song)
      .filter(({ kind, streamable }) => kind === "track" && streamable),
    nextHref: json.nextHref || null,
  };
};

const convertKey = key => {
  let res = camelize(key);

  if (key.indexOf("-ms-") === 0) {
    res = res[0].toLowerCase() + res.slice(1);
  }

  return res;
};

export const styleParser = styleStr => {
  return styleStr
    .split(";")
    .reduce((res, token) => {
      if (token.slice(0, 7) === "base64,") {
        res[res.length - 1] += `;${token}`;
      } else {
        res.push(token);
      }
      return res;
    }, [])
    .reduce((obj, str) => {
      const all = { ...obj };
      const tokens = str.split(":");
      const key = tokens[0].trim();
      if (key) {
        const value = tokens
          .slice(1)
          .join(":")
          .trim();
        all[convertKey(key)] = value;
      }
      return all;
    }, {});
};

export const convertAttr = attr => {
  if (/^(data-|aria-)/.test(attr)) {
    return attr;
  }

  const key = attr.replace(/[-:]/g, "").toLowerCase();
  return HTML_ELEMENTS[key] || attr;
};

export const getPixelRatio = () =>
  // eslint-disable-next-line no-restricted-globals
  window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI;

export const formattedTime = ({ value = 0, unit }) => {
  let val = value;
  // HTMLAudioElement provides time in seconds
  // SoundCloud provides time in milliseconds
  if (unit === "ms") {
    val /= 1000; // convert milliseconds to seconds
  }

  const hours = Math.floor(val / 3600);
  const minutes = `0${Math.floor((val % 3600) / 60)}`.slice(-2);
  const seconds = `0${Math.floor(val % 60)}`.slice(-2);

  return hours ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
};
