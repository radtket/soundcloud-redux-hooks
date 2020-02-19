import { Record } from "immutable";
import { trackImageUrl } from "../tracks/utils";

export const User = new Record({
  avatarUrl: null,
  bannerUrl: null,
  city: null,
  country: null,
  description: null,
  followersCount: 0,
  followingsCount: 0,
  fullName: null,
  id: null,
  likesCount: 0,
  permalinkUrl: null,
  playlistCount: 0,
  profile: false,
  social: [],
  trackCount: 0,
  username: null,
});

export const createUser = (
  {
    avatarUrl,
    bannerUrl,
    city,
    country,
    description,
    followersCount,
    followingsCount,
    fullName,
    id,
    permalinkUrl,
    playlistCount,
    publicFavoritesCount,
    social,
    trackCount,
    username,
  },
  profile = false
) => {
  let attrs = {
    avatarUrl: trackImageUrl({ avatarUrl }),
    followersCount,
    id,
    permalinkUrl,
    username,
  };

  if (profile) {
    attrs = Object.assign(attrs, {
      bannerUrl,
      city,
      country,
      description,
      followingsCount,
      fullName,
      likesCount: publicFavoritesCount,
      playlistCount,
      profile: true,
      social,
      trackCount,
    });
  }

  return new User(attrs);
};
