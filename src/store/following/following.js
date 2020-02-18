import { Record } from "immutable";

export const Track = new Record({
  username: null,
});

export const createFollowing = ({ username }) => {
  return new Track({
    username,
  });
};
