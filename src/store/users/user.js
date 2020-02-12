import { Record } from "immutable";

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

export const createUser = (data, profile = false) => {
  let attrs = {
    avatarUrl: data.avatar_url,
    id: data.id,
    permalinkUrl: data.permalink_url,
    username: data.username,
  };

  if (profile) {
    attrs = Object.assign(attrs, {
      bannerUrl: data.bannerUrl,
      city: data.city,
      country: data.country,
      description: data.description,
      followersCount: data.followers_count,
      followingsCount: data.followings_count,
      fullName: data.full_name,
      likesCount: data.public_favorites_count,
      playlistCount: data.playlist_count,
      profile: true,
      social: data.social,
      trackCount: data.track_count,
    });
  }

  return new User(attrs);
};
