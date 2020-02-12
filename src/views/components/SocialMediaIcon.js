import React from "react";
import PropTypes from "prop-types";
import {
  IconBandsInTown,
  IconFacebook,
  IconFavorite,
  IconGenius,
  IconGlobe,
  IconGooglePlus,
  IconInstagram,
  IconSongKick,
  IconSoundCloud,
  IconSpotify,
  IconTwitter,
  IconYouTube,
} from "./Icons";

const SocialMediaIcon = ({ service }) => {
  switch (service) {
    case "facebook":
      return <IconFacebook />;
    case "twitter":
      return <IconTwitter />;
    case "instagram":
      return <IconInstagram />;
    case "youtube":
      return <IconYouTube />;
    case "hypem":
      return <IconFavorite />;
    case "google_plus":
      return <IconGooglePlus />;
    case "spotify":
      return <IconSpotify />;
    case "songkick":
      return <IconSongKick />;
    case "soundcloud":
      return <IconSoundCloud />;
    case "bandsintown":
      return <IconBandsInTown />;
    case "genius":
      return <IconGenius />;
    default:
      return <IconGlobe />;
  }
};

SocialMediaIcon.propTypes = {
  service: PropTypes.string,
};

SocialMediaIcon.defaultProps = {
  service: null,
};

export default SocialMediaIcon;
