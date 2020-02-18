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
    futureHref: json.futureHref || null,
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
