// media-query rules for window.matchMedia()
export const media = [
  {
    id: "large",
    minWidth: 980,
  },
];

const appActions = {
  INIT_APP: "INIT_APP",

  initApp: config => ({
    type: appActions.INIT_APP,
    payload: config,
  }),
};

export default appActions;
