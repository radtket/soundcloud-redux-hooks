export const MEDIA_QUERY_CHANGED = "MEDIA_QUERY_CHANGED";

const mediaQueryChanged = results => ({
  type: MEDIA_QUERY_CHANGED,
  results,
});

export default mediaQueryChanged;
