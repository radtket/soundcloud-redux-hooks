export const INIT_APP = "INIT_APP";
// media-query rules for window.matchMedia()

export const media = [
  {
    id: "large",
    minWidth: 980,
  },
];

export const initApp = config => ({
  type: INIT_APP,
  config,
});
