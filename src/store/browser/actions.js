const browserActions = {
  MEDIA_QUERY_CHANGED: "MEDIA_QUERY_CHANGED",

  mediaQueryChanged: results => ({
    type: browserActions.MEDIA_QUERY_CHANGED,
    results,
  }),
};

export default browserActions;
