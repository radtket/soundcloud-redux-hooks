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
    future_href: json.future_href || null,
    next_href: json.next_href || null,
  };
};
