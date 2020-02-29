export const INIT_APP = "INIT_APP";
// media-query rules for window.matchMedia()

export const media = [
  {
    id: "large",
    minWidth: 980,
  },

  {
    id: "mobile",
    maxWidth: 600,
  },
];

export const initApp = config => ({
  type: INIT_APP,
  config,
});
